import { list } from '@keystone-6/core';

const Note = list({
  fields: {
    // author: Member!
    // content: String @default(value: "New note")
    // onCollectionGroup: CollectionGroup
    // createdAt: DateTime @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default Note;
