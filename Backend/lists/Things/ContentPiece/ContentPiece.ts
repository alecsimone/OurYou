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
      // I wanted content to be indexed, but it's causing errors with longer content pieces. They're pretty generic "Prisma Error" errors, but through trial and error I've been able to narrow it down to the total complexity of the content piece. I.e. 10,000 'd's repeated over and over again can be added, but the Boots Riley Endorsement post could not be until I got it under ~4375 characters (not a hard limit because again, it seems to depend on the entropy of the string).
      // isIndexed: true,
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
