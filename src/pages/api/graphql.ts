import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler<NextApiRequest>(server, {
  context: async (req) => {
    const headers = req.headers;
    return { headers };
  },
});
