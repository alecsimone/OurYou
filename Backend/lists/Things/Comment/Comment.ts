import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import createdAt from '../../common/createdAt';
import score from '../../common/score';

const Comment = list({
  fields: {
    author: relationship({
      ref: 'Member.comments',
    }),
    comment: text({
      validation: {
        isRequired: true,
        length: {
          min: 1,
        },
      },
    }),

    onThing: relationship({
      ref: 'Thing.comments',
    }),
    onContentPiece: relationship({
      ref: 'ContentPiece.comments',
    }),
    onTag: relationship({
      ref: 'Tag.comments',
    }),

    replies: relationship({
      ref: 'Comment.replyTo',
      many: true,
    }),
    replyTo: relationship({
      ref: 'Comment.replies',
    }),

    votes: relationship({
      ref: 'Vote.onComment',
      many: true,
    }),
    score,

    // updatedAt: DateTime @updatedAt
    createdAt,
  },
});

export default Comment;
