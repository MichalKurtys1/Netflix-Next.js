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
    poster: String!
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
    poster: String!
  }

  input EpizodeInput {
    title: String!
    content: String!
  }

  input SeasonInput {
    title: String!
    epizodes: [EpizodeInput!]
  }

  type Responses {
    id: ID!
    nick: String!
    content: String!
    createdAt: String!
    commentId: ID!
  }

  type Comments {
    id: ID!
    user: User!
    film: Films
    series: Series
    content: String!
    createdAt: String!
    like: Int!
    dislike: Int!
    responses: [Responses!]
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
      poster: String!
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
      poster: String!
      seasons: [SeasonInput!]
    ): Series!
    getSerie(title: String!): Series!
    addComment(title: String!, nick: String!, content: String!): Comments!
    getComments(title: String!): [Comments!]
    addResponse(id: Int!, nick: String!, content: String!): Responses!
    modifyLikes(id: Int!, value: Int!, type: String!): Int!
    modifyDislikes(id: Int!, value: Int!, type: String!): Int!
  }
`;

module.exports = { typeDefs };
