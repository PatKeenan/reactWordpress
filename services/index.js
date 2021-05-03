//Import the Apollo Client
import { ApolloClient, InMemoryCache } from "@apollo/client";

//test
import { gql } from "@apollo/client";

//initalize the apollo client and export it to make available in the app

export const client = new ApolloClient({
  //connect the wordpress graphql endpoint using the public ip proided by lightsail
  uri: "http://54.82.147.116/graphql",

  cache: new InMemoryCache(),
});

//apollo documentation https://www.apollographql.com/docs/react/get-started/
