// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Chore {
    _id: ID
    name: String
    description: String
    price: Int
  }

  type ChoreLocation {
    _id: ID
    name: String
  }

  type Query {
    chores(email: String): [Chore]
    chore(_id: ID!): Chore
    choreLocations: [ChoreLocation]
  }
`;

// export the typeDefs
module.exports = typeDefs;