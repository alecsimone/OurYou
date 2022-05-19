import { list } from '@keystone-6/core';

const Collection = list({
  fields: {
    // title: String! @default(value: "New Collection")
    // author: Member! @relation(name: "Collector")
    // editors: [Member] @relation(name: "CollectionEditor")
    // viewers: [Member] @relation(name:"CollectionViewer")
    // privacy: PrivacySetting @default(value: Private)
    // userGroups: [CollectionGroup] @scalarList(strategy: RELATION) @relation(name: "ConnectedGroups")
    // columnOrders: [ColumnOrder] @relation(name: "ManualColumnOrders")
    // columnOrderOrder: [String] @scalarList(strategy: RELATION)
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default Collection;
