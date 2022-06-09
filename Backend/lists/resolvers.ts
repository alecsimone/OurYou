import { graphQLSchemaExtension } from '@keystone-6/core';
import verifyMember from './Membership/Member/queries/verifyMember';
import getProfileSidebarData from './Membership/Member/queries/getProfileSidebarData';

const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: /* graphql */ `
    type Query {
      verifyMember(id: ID!, code: String!): Member,
      getProfileSidebarData(id: ID): Member
    }
  `,
  resolvers: {
    Query: {
      verifyMember,
      getProfileSidebarData,
    },
  },
});

export default extendGraphqlSchema;
