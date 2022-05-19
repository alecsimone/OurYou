import { list } from '@keystone-6/core';

const Vote = list({
  fields: {
    // voter: Member!
    // onThing: Thing
    // onComment: Comment
    // onContentPiece: ContentPiece
    // value: Int!
    // createdAt: DateTime! @createdAt
  },
});

export default Vote;
