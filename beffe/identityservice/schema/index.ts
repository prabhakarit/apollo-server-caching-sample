import { gql } from 'apollo-server';
import 'apollo-cache-control';

const schema = gql`

directive @cacheControl(
  maxAge: Int,
  scope: CacheControlScope
) on OBJECT | FIELD_DEFINITION

enum CacheControlScope {
  PUBLIC
  PRIVATE
}

type User @cacheControl(maxAge: 30, scope: "PRIVATE"){
    id: ID!
    name: String!
    email: String!
    organisation: String @cacheControl(maxAge: 100, scope: "PRIVATE")
    #organisation: String
    phoneNumber: String
    imageURL: String
  }

  input EditUser {
    id: ID!
    email: String
    name: String
    organisation: String
    phoneNumber: String
    imageURL: String
  }

  input CreateUser {
    id: ID!
    email: String!
    name: String!
    organisation: String!
    phoneNumber: String
    imageURL: String
  }

  extend type Query{
    getUser(id: ID!): User
  }

  extend type Mutation {
      EditUser(editUser: EditUser): User
      CreateUser(createUser: CreateUser): User
  }
`;

export default schema;
