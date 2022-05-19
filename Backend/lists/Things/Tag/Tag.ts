import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import createdAt from '../../common/createdAt';

const Tag = list({
  fields: {
    title: text({
      validation: {
        isRequired: true,
        length: {
          min: 1,
          max: 64,
        },
      },
      isIndexed: 'unique',
    }),

    author: relationship({
      ref: 'Member.ownedTags',
    }),

    featuredImage: text(),
    poster: text(),
    color: text(),

    content: relationship({
      ref: 'ContentPiece.onTag',
      many: true,
    }),
    // unsavedNewContent: String
    // addToStartUnsavedNewContent: String
    // contentOrder: [String!] @scalarList(strategy:RELATION)

    connectedThings: relationship({
      ref: 'Thing.partOfTags',
      many: true,
    }),

    comments: relationship({
      ref: 'Comment.onTag',
      many: true,
    }),

    // updatedAt: DateTime @updatedAt
    createdAt,
  },
});

export default Tag;
