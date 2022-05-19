import { integer } from '@keystone-6/core/fields';

const score = integer({
  defaultValue: 0,
  validation: {
    isRequired: true,
    min: 0,
  },
});

export default score;
