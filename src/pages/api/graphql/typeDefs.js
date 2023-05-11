const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    nick: String!
    type: String!
  }

  type AuthData {
    token: String!
    email: String!
    nick: String!
    type: String!
    expiresIn: String!
  }

  type Films {
    id: ID!
    title: String!
    description: String!
    director: String!
    scenario: String!
    genre: String!
    production: String!
    premiere: String!
    miniature: String!
    content: String!
    duration: String!
    like: Int!
    dislike: Int!
  }

  type Popular {
    films: [Films!]
  }

  type Query {
    getUsers(email: String): [User!]
    getFilms: [Films!]
    getPopular: Popular!
  }

  type Mutation {
    login(email: String!, password: String!): AuthData!
    createUser(email: String!, password: String!, nick: String!): User!
    addFilm(
      title: String!
      description: String!
      director: String!
      scenario: String!
      genre: String!
      production: String!
      premiere: String!
      miniature: String!
      content: String!
      duration: String!
      like: Int!
      dislike: Int!
    ): Films!
    getFilm(title: String!): Films!
  }
`;

module.exports = { typeDefs };
