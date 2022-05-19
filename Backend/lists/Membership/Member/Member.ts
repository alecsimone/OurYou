import { list } from '@keystone-6/core';
import {
  integer,
  password,
  relationship,
  select,
  text,
} from '@keystone-6/core/fields';
import createdAt from '../../common/createdAt';
import privacy from '../../common/privacy';

const Member = list({
  description: 'All the information for each member of the site. AKA Users.',
  fields: {
    email: text({
      validation: {
        isRequired: true,
      },
      isIndexed: 'unique',
    }),
    displayName: text({
      validation: {
        isRequired: true,
        length: {
          min: 3,
          max: 24,
        },
      },
      isIndexed: 'unique',
    }),
    avatar: text(),
    password: password(),
    role: select({
      options: [
        { label: 'Admin', value: 'Admin' },
        { label: 'Editor', value: 'Editor' },
        { label: 'Moderator', value: 'Moderator' },
        { label: 'Member', value: 'Member' },
        { label: 'LiteMember', value: 'LiteMember' },
        { label: 'Unverified', value: 'Unverified' },
      ],
      defaultValue: 'Unverified',
      validation: {
        isRequired: true,
      },
    }),

    rep: integer({
      defaultValue: 0,
      validation: {
        min: 0,
        max: 100,
      },
    }),
    // points: Int! @default(value: 0)
    // giveableRep: Int! @default(value: 0)

    // color: String
    defaultPrivacy: privacy,

    // notifications: [Notification] @relation(name:"Notification")
    // friends: [Member] @relation(name:"Friends")
    // friendRequests: [Member] @relation(name:"FriendRequests")
    // ignoredFriendRequests: [Member] @relation(name:"IgnoredFriendRequests")

    // twitchName: String

    votes: relationship({
      ref: 'Vote.voter',
      many: true,
    }),

    createdThings: relationship({
      ref: 'Thing.author',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'createdAt', 'id'],
        linkToItem: true,
      },
    }),

    ownedTags: relationship({
      ref: 'Tag.author',
      many: true,
    }),

    // individualThingViewPermissions: [Thing] @relation(name: "IndividualViewers")

    // individualContentPieceViewPermissions: [ContentPiece] @relation(name: "IndividualContentPieceViewers")

    // collections: [Collection] @relation(name: "Collector")
    // lastActiveCollection: Collection @relation(name:"LastActiveCollection")
    // collectionsCanEdit: [Collection] @relation(name: "CollectionEditor")
    // collectionsCanView: [Collection] @relation(name: "CollectionViewer")

    comments: relationship({
      ref: 'Comment.author',
      many: true,
    }),

    // verificationToken: String
    // verificationTokenExpiry: Float

    // twitterUserName: String
    // twitterListsObject: String
    // twitterSeenIDs: [String] @scalarList(strategy: RELATION)
    // twitterUserID: String
    // twitterTokenSecret: String
    // twitterUserToken: String
    // twitterUserTokenSecret: String

    createdConnections: relationship({
      ref: 'Connection.creator',
      many: true,
    }),

    // ownedLinks: [PersonalLink]
    // ownedLinkTags: [LinkTag]

    // updatedAt: DateTime @updatedAt
    createdAt,
  },
  ui: {
    labelField: 'displayName',
    description: 'All the information for each member of the site. AKA Users.',
    listView: {
      initialColumns: [
        'displayName',
        'email',
        'rep',
        'role',
        'createdAt',
        'id',
      ],
      initialSort: {
        field: 'role',
        direction: 'ASC',
      },
    },
  },
});

export default Member;
