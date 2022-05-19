import { list } from '@keystone-6/core';

const Tag = list({
  fields: {
    // title: String! @unique
    // author: Member!
    // featuredImage: String
    // content: [ContentPiece!] @scalarList(strategy:RELATION)
    // unsavedNewContent: String
    // contentOrder: [String!] @scalarList(strategy:RELATION)
    // connectedThings: [Thing]
    // color: String
    // comments: [Comment]
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default Tag;
