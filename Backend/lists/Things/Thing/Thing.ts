import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

const Thing = list({
  fields: {
    // author: Member! @relation(name: "Author")
    title: text(),
    // featuredImage: String
    // poster: String

    // color: String

    // privacy: PrivacySetting @default(value: Private)
    // individualViewPermissions: [Member] @relation(name: "IndividualViewers")

    // votes: [Vote]
    // score: Int! @default(value: 0)

    // partOfTags: [Tag]

    // content: [ContentPiece!] @scalarList(strategy:RELATION) @relation(name: "OriginalThingForContentPiece")
    // unsavedNewContent: String
    // addToStartUnsavedNewContent: String
    // copiedInContent: [ContentPiece] @relation(name: "ThingsAddedToForContentPiece")
    // contentOrder: [String] @scalarList(strategy:RELATION)

    // comments: [Comment]

    // subjectConnections: [Connection!] @scalarList(strategy: RELATION) @relation(name:"IsSubject")
    // objectConnections: [Connection!] @scalarList(strategy: RELATION) @relation(name:"IsObject")

    // manualUpdatedAt: DateTime
    // createdAt: DateTime! @createdAt
  },
});

export default Thing;
