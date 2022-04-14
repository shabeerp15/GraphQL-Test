const { gql } = require('apollo-server')

const typeDefs = gql`
   type User {
      id: ID!
      name: String!
      username: String!
      age: Int!
      nationality: Nationality
      friends: [User]
      favoriteMovies: [Movie]
   }

   type Movie {
      id: ID!
      name: String!
      release_date: String!
      description: String!
      image: String!
   }

   type Query {
      users: [User!]!
      user(id: ID!): User!
      movies: [Movie!]!
      movie(name: String!): Movie!
   }

   input UserInput {
      name: String!
      username: String!
      age: Int!
      nationality: Nationality = INDIA 
   }

   input UpdateUserInput {
      name: String
      username: String
      age: Int
      nationality: Nationality 
   }

   type Mutation {
      createUser(input: UserInput): User!
      updateUser(id: ID!, input: UpdateUserInput): User!
      deleteUser(id: ID!): User!
   }

   enum Nationality {
      INDIA
      USA
      CANADA
      UK
      CHINA
   }
`

module.exports = { typeDefs }
