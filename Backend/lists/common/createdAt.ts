import { timestamp } from '@keystone-6/core/fields';

const createdAt = timestamp({
  defaultValue: { kind: 'now' },
  // access: {
  //   update: isEditor,
  // },
});

export default createdAt;
