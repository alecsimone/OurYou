import { list } from '@keystone-6/core';
import { checkbox, integer, relationship, text } from '@keystone-6/core/fields';
import createdAt from '../../common/createdAt';

const Connection = list({
  fields: {
    creator: relationship({
      ref: 'Member.createdConnections',
    }),

    subject: relationship({
      ref: 'Thing.subjectConnections',
    }),
    object: relationship({
      ref: 'Thing.objectConnections',
    }),

    relationship: text({
      validation: {
        isRequired: true,
        length: {
          min: 2,
          max: 140,
        },
      },
    }),

    strength: integer({
      defaultValue: 0,
      validation: {
        isRequired: true,
        min: 0,
      },
    }),
    isBlocked: checkbox({
      defaultValue: true,
    }),

    createdAt,
  },
});

export default Connection;
