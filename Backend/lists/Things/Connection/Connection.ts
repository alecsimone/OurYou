import { list } from '@keystone-6/core';

const Connection = list({
  fields: {
    // creator: Member
    // subject: Thing! @relation(name: "IsSubject")
    // object: Thing! @relation(name: "IsObject")
    // relationship: String!
    // strength: Int! @default(value: 0)
    // isBlocked: Boolean @default(value: false)
    // createdAt: DateTime! @createdAt
  },
});

export default Connection;
