import { list } from '@keystone-6/core';

const LinkTag = list({
  fields: {
    // owner: Member!
    // title: String!
    // description: String
    // connectedLinks: [PersonalLink]
    // parentTags: [LinkTag] @relation(name: "Parent")
    // childTags: [LinkTag] @relation(name: "Parent")
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default LinkTag;
