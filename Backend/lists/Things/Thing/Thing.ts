import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';
import createdAt from '../../common/createdAt';
import privacy from '../../common/privacy';
import score from '../../common/score';

const Thing = list({
  description: 'The model for posts, which we call Things',
  fields: {
    title: text({
      defaultValue: 'Untitled Thing',
      validation: {
        isRequired: true,
        length: {
          min: 1,
          max: 140,
        },
      },
      isIndexed: true,
    }),

    author: relationship({
      ref: 'Member.createdThings',
    }),

    featuredImage: text({
      db: {
        isNullable: true,
      },
    }),
    poster: text({
      db: {
        isNullable: true,
      },
    }),
    color: text({
      defaultValue: 'hsl(210, 10%, 30%)',
    }),

    privacy,
    individualViewers: relationship({
      ref: 'Member.individualThingViewPermissions',
      many: true,
    }),

    votes: relationship({
      ref: 'Vote.onThing',
      many: true,
    }),
    score,

    partOfTags: relationship({
      ref: 'Tag.connectedThings',
      many: true,
    }),

    content: relationship({
      ref: 'ContentPiece.onThing',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['content'],
        linkToItem: true,
        inlineCreate: {
          fields: ['content'],
        },
        inlineEdit: {
          fields: ['content'],
        },
        inlineConnect: true,
      },
    }),
    contentOrder: text({
      isOrderable: false,
      defaultValue: '[]',
      validation: {
        isRequired: true,
        match: {
          regex: /\[.*\]/,
          explanation:
            'contentOrder must be a string that represents an array of IDs',
        },
      },
    }),
    // contentOrder: [String] @scalarList(strategy:RELATION)
    unsavedNewContent: text({
      db: {
        isNullable: true,
      },
    }),
    addToStartUnsavedNewContent: text({
      db: {
        isNullable: true,
      },
    }),
    copiedInContent: relationship({
      ref: 'ContentPiece.copiedToThings',
      many: true,
    }),

    comments: relationship({
      ref: 'Comment.onThing',
      many: true,
    }),

    subjectConnections: relationship({
      ref: 'Connection.subject',
      many: true,
    }),
    objectConnections: relationship({
      ref: 'Connection.object',
      many: true,
    }),

    updatedAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
    createdAt,
  },
  ui: {
    labelField: 'title',
    description: 'The model for posts, which we call Things',
    listView: {
      initialColumns: [
        'title',
        'author',
        'partOfTags',
        'score',
        'createdAt',
        'id',
      ],
      initialSort: {
        field: 'createdAt',
        direction: 'DESC',
      },
    },
  },
});

export default Thing;
