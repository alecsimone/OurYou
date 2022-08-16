import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import createdAt from '../../common/createdAt';
import privacy from '../../common/privacy';
import score from '../../common/score';

const ContentPiece = list({
  description: 'An individual piece of content within a thing',
  fields: {
    content: text({
      validation: {
        isRequired: true,
        length: {
          min: 1,
        },
      },
      isIndexed: true,
      ui: {
        displayMode: 'textarea',
      },
    }),

    unsavedNewContent: text({
      db: {
        isNullable: true,
      },
    }),

    comments: relationship({
      ref: 'Comment.onContentPiece',
      many: true,
    }),

    onThing: relationship({
      ref: 'Thing.content',
    }),
    copiedToThings: relationship({
      ref: 'Thing.copiedInContent',
      many: true,
    }),

    onTag: relationship({
      ref: 'Tag.content',
    }),

    votes: relationship({
      ref: 'Vote.onContentPiece',
      many: true,
    }),
    score,

    privacy,

    individualViewers: relationship({
      ref: 'Member.individualContentPieceViewPermissions',
      many: true,
    }),

    createdAt,
  },
});

export default ContentPiece;
