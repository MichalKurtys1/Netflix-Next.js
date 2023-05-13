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

  enum Platforms {
    NETFLIX
    HBO_MAX
    AMAZON_PRIME
    DISNEY_PLUS
    APPLE_TV
    CDA_PREMIUM
    CANAL_ONLINE
    PLAYER
    HULU
  }

  enum Type {
    FILM
    SERIES
    COMMING_SOON
    IN_CINEMAS
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
    type: [Type!]
    platforms: [Platforms!]
  }

  type Epizode {
    id: ID!
    seasonId: ID!
    title: String!
    content: String!
  }

  type Season {
    id: ID!
    seriesId: ID!
    title: String!
    epizodes: [Epizode!]
  }

  type Series {
    id: ID!
    title: String!
    description: String!
    director: String!
    scenario: String!
    genre: String!
    production: String!
    premiere: String!
    miniature: String!
    duration: String!
    like: Int!
    dislike: Int!
    seasons: [Season!]
    type: [Type!]
    platforms: [Platforms!]
  }

  input EpizodeInput {
    title: String!
    content: String!
  }

  input SeasonInput {
    title: String!
    epizodes: [EpizodeInput!]
  }

  type Query {
    getUsers(email: String): [User!]
    getFilms: [Films!]
    getSeries: [Series!]
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
      type: [Type!]
      platforms: [Platforms!]
    ): Films!
    getFilm(title: String!): Films!
    addSeries(
      title: String!
      description: String!
      director: String!
      scenario: String!
      genre: String!
      production: String!
      premiere: String!
      miniature: String!
      duration: String!
      like: Int!
      dislike: Int!
      type: [Type!]
      platforms: [Platforms!]
      seasons: [SeasonInput!]
    ): Series!
    getSerie(title: String!): Series!
  }
`;

module.exports = { typeDefs };
