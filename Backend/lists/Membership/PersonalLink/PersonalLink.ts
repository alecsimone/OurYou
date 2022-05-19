import { list } from '@keystone-6/core';

const PersonalLink = list({
  fields: {
    // url: String!
    // owner: Member!
    // title: String
    // description: String
    // partOfTags: [LinkTag]
    // inCollectionGroups: [CollectionGroup] @scalarList(strategy: RELATION)
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default PersonalLink;
