import { graphQLSchemaExtension } from '@keystone-6/core';
import verifyMember from './Membership/Member/queries/verifyMember';

const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: /* graphql */ `
    type Query {
      verifyMember(id: ID!, code: String!): Member
    }
  `,
  resolvers: {
    Query: {
      verifyMember,
    },
  },
});

export default extendGraphqlSchema;
