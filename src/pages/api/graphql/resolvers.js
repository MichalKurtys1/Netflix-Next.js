const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Str = require("@supercharge/strings");
const Sib = require("sib-api-v3-sdk");
const crypto = require("crypto");
const { GraphQLError } = require("graphql");

const client = Sib.ApiClient.instance;

const apiKey = client.authentications["api-key"];

apiKey.apiKey = process.env.EMAIL_SENDER;

const tranEmailApi = new Sib.TransactionalEmailsApi();

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    getUsers: async function (parent, args) {
      const users = await prisma.user.findMany();
      return users;
    },
    getFilms: async function (parent, args) {
      const films = await prisma.films.findMany();
      return films;
    },
  },

  Mutation: {
    login: async function (parent, args) {
      const email = args.email;
      const password = args.password;
      let user = await prisma.user.findFirst({
        where: {
          email: {
            equals: email,
          },
        },
      });
      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        throw new GraphQLError("Password is inncorect", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const expiration = "1h";

      const token = jwt.sign(
        {
          userId: user.id.toString(),
          nick: user.nick,
          type: user.type,
        },
        "MmcXUQpSl3KxyAw",
        { expiresIn: expiration }
      );

      return {
        token: token,
        email: user.email,
        nick: user.nick,
        type: user.type,
        expiresIn: expiration,
      };
    },
    createUser: async function (parent, args) {
      const id = Str.Str.random();
      const existingUser = await prisma.user.findFirst({
        where: {
          email: {
            equals: args.email,
          },
        },
      });
      const existingNick = await prisma.user.findFirst({
        where: {
          nick: {
            equals: args.nick,
          },
        },
      });

      if (existingUser) {
        throw new GraphQLError("Email already taken", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      if (existingNick) {
        throw new GraphQLError("Nick already taken", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const hashedPw = await bcrypt.hash(args.password, 12);
      const createdUser = await prisma.user.create({
        data: {
          id: id,
          email: args.email,
          password: hashedPw,
          nick: args.nick,
          type: "user",
        },
      });
      return createdUser;
    },
    addFilm: async function (parent, args) {
      const id = Str.Str.random();
      const title = args.title;
      const description = args.description;
      const director = args.director;
      const scenario = args.scenario;
      const genre = args.genre;
      const production = args.production;
      const premiere = args.premiere;
      const miniature = args.miniature;
      const content = args.content;
      const duration = args.duration;
      const like = args.like;
      const dislike = args.dislike;

      const film = await prisma.films.create({
        data: {
          id: id,
          title: title,
          description: description,
          director: director,
          scenario: scenario,
          genre: genre,
          production: production,
          premiere: premiere,
          miniature: miniature,
          content: content,
          duration: duration,
          like: like,
          dislike: dislike,
        },
      });

      return film;
    },
    getFilm: async function (parent, args) {
      const title = args.title;
      const film = await prisma.films.findFirst({
        where: {
          title: {
            equals: title,
          },
        },
      });
      return film;
    },
  },
};

module.exports = { resolvers };
