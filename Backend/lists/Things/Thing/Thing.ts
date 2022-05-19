import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

const Thing = list({
  fields: {
    title: text(),
    // author: Member! @relation(name: "Author")
    // featuredImage: String
    // poster: String
    // content: [ContentPiece!] @scalarList(strategy:RELATION) @relation(name: "OriginalThingForContentPiece")
    // unsavedNewContent: String
    // addToStartUnsavedNewContent: String
    // copiedInContent: [ContentPiece] @relation(name: "ThingsAddedToForContentPiece")
    // contentOrder: [String] @scalarList(strategy:RELATION)
    // partOfTags: [Tag]
    // color: String
    // votes: [Vote]
    // score: Int! @default(value: 0)
    // comments: [Comment]
    // privacy: PrivacySetting @default(value: Private)
    // individualViewPermissions: [Member] @relation(name: "IndividualViewers")
    // manualUpdatedAt: DateTime
    // subjectConnections: [Connection!] @scalarList(strategy: RELATION) @relation(name:"IsSubject")
    // objectConnections: [Connection!] @scalarList(strategy: RELATION) @relation(name:"IsObject")
    // createdAt: DateTime! @createdAt
  },
});

export default Thing;
