const { PrismaClient } = require('@prisma/client');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const Str = require('@supercharge/strings');
const Sib = require('sib-api-v3-sdk');
const crypto = require('crypto');
const { GraphQLError } = require('graphql');

const client = Sib.ApiClient.instance;

const apiKey = client.authentications['api-key'];

apiKey.apiKey = process.env.EMAIL_SENDER;

const tranEmailApi = new Sib.TransactionalEmailsApi();

const prisma = new PrismaClient();

const resolvers = {

    Query: {
        login: async function(parent, args) {
            const email = args.email;
            const password = args.password;
            let user = await prisma.user.findFirst({ 
                where: { 
                    email: {
                        equals: email
            }}})
                if(!user){
                    throw new GraphQLError("User not found", {
                        extensions: { code: 'BAD_USER_INPUT' },
                      });
                }

            const isEqual = await bcrypt.compare(password, user.password);
            if(!isEqual){
                throw new GraphQLError("Password is inncorect", {
                    extensions: { code: 'BAD_USER_INPUT' },
                  });
            }

            const token = jwt.sign(
                {
                  userId: user.id.toString(),
                  nick: user.nick,
                  type: user.type
                },
                'MmcXUQpSl3KxyAw',
                { expiresIn: '1h' }
              );

                return { token: token, user: user }
        },
    },

}

module.exports = { resolvers };