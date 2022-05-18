import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

const Thing = list({
  fields: {
    title: text(),
  },
});

export default Thing;
