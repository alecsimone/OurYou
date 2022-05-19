import { list } from '@keystone-6/core';

const ContentPiece = list({
  fields: {
    // content: String!
    // unsavedNewContent: String
    // comments: [Comment]
    // onThing: Thing @relation(name: "OriginalThingForContentPiece")
    // copiedToThings: [Thing] @relation(name: "ThingsAddedToForContentPiece")
    // onTag: Tag
    // votes: [Vote]
    // score: Int! @default(value: 0)
    // privacy: PrivacySetting @default(value: Public)
    // individualViewPermissions: [Member] @relation(name: "IndividualContentPieceViewers")
  },
});

export default ContentPiece;
