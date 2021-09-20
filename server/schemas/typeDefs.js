// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    chores: [Chore]
  }

  type Chore {
    _id: ID
    name: String
    description: String
    price: Int
    choreLocation: ChoreLocation
  }

  type ChoreLocation {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    chores(email: String): [Chore]
    chore(_id: ID!): Chore
    choreLocations: [ChoreLocation]
    choreLocation(_id: ID!): ChoreLocation
    users: [User]
    user(_id: ID!): User
    checkout(chores: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteUser(_id: ID!): User
    login(email: String!, password: String!): Auth

  }

  type Checkout {
  session: ID
  }

  type Order {
    _id: ID
    choreCompletionDate: String
    chores: [Chore]
  }
`;

// export the typeDefs
module.exports = typeDefs;