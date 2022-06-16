import { graphQLSchemaExtension } from '@keystone-6/core';
import verifyMember from './Membership/Member/queries/verifyMember';
import getProfileSidebarData from './Membership/Member/queries/getProfileSidebarData';
import setAvatar from './Membership/Member/mutations/setAvatar';

const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: /* graphql */ `
    type Query {
      verifyMember(id: ID!, code: String!): Member,
      getProfileSidebarData(id: ID): Member
    }
    type Mutation {
      setAvatar(newAvatarLink: String, uploadedAvatar: Upload): Member
    }
  `,
  resolvers: {
    Query: {
      verifyMember,
      getProfileSidebarData,
    },
    Mutation: {
      setAvatar,
    },
  },
});

export default extendGraphqlSchema;
