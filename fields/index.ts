import { GraphQLObjectType } from "graphql";
import { memberField } from "./member";

export const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query type.',
  fields: {
    ...memberField.query
  }
});

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The mutation query type.',
  fields: {
    ...memberField.mutation
  }
});