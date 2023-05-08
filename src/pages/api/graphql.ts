import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
