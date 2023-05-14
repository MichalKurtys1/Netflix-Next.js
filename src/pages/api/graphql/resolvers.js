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
    getSeries: async function (parent, args) {
      const series = await prisma.series.findMany({
        include: {
          seasons: {
            include: {
              epizodes: true,
            },
          },
        },
      });
      return series;
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
      const {
        title,
        description,
        director,
        scenario,
        genre,
        production,
        premiere,
        miniature,
        duration,
        content,
        like,
        dislike,
        platforms,
        poster,
        type,
      } = args;
      const film = await prisma.films.create({
        data: {
          title,
          description,
          director,
          scenario,
          genre,
          production,
          premiere,
          miniature,
          duration,
          content,
          like,
          dislike,
          platforms,
          type,
          poster,
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
    addSeries: async (parent, args) => {
      const {
        title,
        description,
        director,
        scenario,
        genre,
        production,
        premiere,
        miniature,
        duration,
        like,
        dislike,
        platforms,
        type,
        seasons,
        poster,
      } = args;
      const series = await prisma.series.create({
        data: {
          title,
          description,
          director,
          scenario,
          genre,
          production,
          premiere,
          miniature,
          duration,
          like,
          dislike,
          platforms,
          poster,
          type,
          seasons: {
            create: seasons.map((season) => {
              const { title, epizodes } = season;
              return {
                title,
                epizodes: {
                  create: epizodes.map((epizode) => {
                    const { title, content } = epizode;
                    return { title, content };
                  }),
                },
              };
            }),
          },
        },
        include: {
          seasons: {
            include: {
              epizodes: true,
            },
          },
        },
      });
      return series;
    },
    getSerie: async function (parent, args) {
      const title = args.title;
      const series = await prisma.series.findFirst({
        where: {
          title: {
            equals: title,
          },
        },
        include: {
          seasons: {
            include: {
              epizodes: true,
            },
          },
        },
      });
      return series;
    },
    addComment: async function (parent, args) {
      const { title, nick, content } = args;

      let user = await prisma.user.findFirst({
        where: {
          nick: {
            equals: nick,
          },
        },
      });

      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "BAD_USER" },
        });
      }

      let film = await prisma.films.findFirst({
        where: {
          title: {
            equals: title,
          },
        },
      });

      let serie = await prisma.series.findFirst({
        where: {
          title: {
            equals: title,
          },
        },
      });

      const currentTimestamp = new Date(Date.now()).toLocaleString();

      let filmId;
      let serieId;
      let comment;
      if (film) {
        filmId = film.id;
        serieId = undefined;
        comment = await prisma.comments.create({
          data: {
            content: content,
            createdAt: currentTimestamp,
            user: {
              connect: {
                id: user.id,
              },
            },
            film: {
              connect: {
                id: filmId,
              },
            },
          },
          include: {
            user: true,
            film: true,
          },
        });
      } else if (serie) {
        serieId = serie.id;
        filmId = undefined;
        comment = await prisma.comments.create({
          data: {
            content: content,
            user: {
              connect: {
                id: user.id,
              },
            },
            series: {
              connect: {
                id: serieId,
              },
            },
          },
          include: {
            user: true,
            series: true,
          },
        });
      } else {
        throw new GraphQLError("Film or Serie not found", {
          extensions: { code: "NOT_FOUND" },
        });
      }
      return comment;
    },
    getComments: async function (parent, args) {
      const title = args.title;
      const comment = await prisma.comments.findMany({
        where: {
          OR: [{ film: { title } }, { series: { title } }],
        },
        include: {
          user: true,
          film: true,
          series: true,
          responses: true,
        },
      });
      return comment;
    },
    addResponse: async function (parent, args) {
      const { id, nick, content } = args;
      const currentTimestamp = new Date(Date.now()).toLocaleString();

      const newResponse = await prisma.responses.create({
        data: {
          nick,
          content,
          createdAt: currentTimestamp,
          comment: {
            connect: {
              id: id,
            },
          },
        },
        include: {
          comment: true,
        },
      });

      return newResponse;
    },
  },
};

module.exports = { resolvers };
