import { list } from '@keystone-6/core';

const Notification = list({
  fields: {
    // kind: String!
    // recipient: Member! @relation(name: "Notification")
    // initiator: Member! @relation(name: "NotificationInitiator")
    // unread: Boolean! @default(value: true)
    // linkQuery: String
  },
});

export default Notification;
