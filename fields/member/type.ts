import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInputObjectType } from "graphql";


export const memberType = new GraphQLObjectType({
  name: 'member',
  description: 'member',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member ID.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member name.'
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member age.'
    },
  }
});

export const memberCreateInput = new GraphQLInputObjectType({
  name: 'memberCreateInput',
  description: 'memberCreateInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member name.'
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member age.'
    },
  }
});