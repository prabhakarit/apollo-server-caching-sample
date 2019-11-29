import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-server';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/sheerflier-scowl-319'
});

const GET_USER = gql`
  query User($id: ID!) {
    User(id: $id) {
      id
      name
      email
      imageURL
      organisation
      phoneNumber
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser( $createUser: CreateUser!
          ) {
            CreateUser
            (
              createUser: $createUser
            ) {
              id
              name
              email
              imageURL
              organisation
              phoneNumber
    }
  }
`;

export async function getUser(id: String) {
    let obj = {
                "id":id
              };
    console.log(id);
    return ( await client.query({
      query: GET_USER,
      variables: obj,
      fetchPolicy: 'no-cache'
    }).then(response => {console.log(response);console.log(Date.now());return response.data.User}) );
}

export async function createUser(id: String, name: String, phoneNumber: String, organisation: String, email: String, imageURL: String) {
  let obj = {
    "CreateUser":{
      "id": id,
      "name": name,
      "phoneNumber": phoneNumber,
      "organisation": organisation,
      "email": email,
      "imageURL": imageURL
    }
  };
  return await client.mutate({
    mutation: CREATE_USER,
    variables: obj,
  }).then(data => {console.log(data)});
}