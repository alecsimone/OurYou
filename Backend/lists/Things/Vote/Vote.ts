import { list } from '@keystone-6/core';
import { integer, relationship } from '@keystone-6/core/fields';
import createdAt from '../../common/createdAt';

const Vote = list({
  fields: {
    voter: relationship({
      ref: 'Member.votes',
    }),

    onThing: relationship({
      ref: 'Thing.votes',
    }),
    onComment: relationship({
      ref: 'Comment.votes',
    }),
    onContentPiece: relationship({
      ref: 'ContentPiece.votes',
    }),

    value: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 100,
      },
    }),

    createdAt,
  },
});

export default Vote;
