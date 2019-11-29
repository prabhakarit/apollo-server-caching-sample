import { gql } from 'apollo-server';

const schema = gql`
  extend type Query {
    Hello(name: String!): String
  }
`;
export default schema;
