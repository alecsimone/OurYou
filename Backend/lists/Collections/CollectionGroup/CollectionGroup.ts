import { list } from '@keystone-6/core';

const CollectionGroup = list({
  fields: {
    // title: String! @default(value: "Untitled Group")
    // inCollection: Collection @relation(name: "ConnectedGroups")
    // includedLinks: [PersonalLink] @scalarList(strategy: RELATION)
    // notes: [Note] @scalarList(strategy: RELATION)
    // order: [String] @scalarList(strategy: RELATION)
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default CollectionGroup;
