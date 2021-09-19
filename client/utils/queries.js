import { gql } from '@apollo/client';

export const QUERY_CHORES = gql`
  query chores {
    chores {
      _id
      name
      description
      price
      choreLocation
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      email
      password
      chores
    }
  }
`;

export const QUERY_CHORES = gql`
  query chores {
    chores {
      _id
      name
      description
      price
      choreLocation
    }
  }
`;

export const QUERY_CHORELOCATIONS = gql`
  query choreLocation {
    choreLocations {
      _id
      name
    }
  }
`;