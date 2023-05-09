// import ApolloClient from "apollo-client";
// import { HttpLink } from "apollo-link-http";
// import { ApolloLink, concat, split } from "apollo-link";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { getMainDefinition } from "apollo-utilities";

// const httpLink = new HttpLink({ uri: "http://localhost:4000/api/graphql" });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   const token = localStorage.getItem("token");
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   });
//   return forward(operation);
// });
// export const apolloClient = new ApolloClient({
//   link: concat(authMiddleware, httpLink),
//   cache: new InMemoryCache(),
// });

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/api/graphql",
  cache: new InMemoryCache(),
});
