import { list } from '@keystone-6/core';

const Comment = list({
  fields: {
    // author: Member!
    // comment: String!
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
    // onThing: Thing
    // onContentPiece: ContentPiece
    // replies: [Comment] @relation(name: "Replies")
    // replyTo: Comment @relation(name: "ReplyTo")
    // onTag: Tag
    // votes: [Vote]
    // score: Int
  },
});

export default Comment;
