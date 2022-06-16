import { cloudinaryImage } from '@keystone-6/cloudinary';
import { list } from '@keystone-6/core';
import {
  integer,
  password,
  relationship,
  select,
  text,
} from '@keystone-6/core/fields';
import getRandomString from '../../../utils/getRandomString';
import sendEmail from '../../../utils/sendEmail';
import createdAt from '../../common/createdAt';
import privacy from '../../common/privacy';

const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder:
    process.env.NODE_ENV === 'production'
      ? 'pisano-family-photos'
      : 'pisano-family-photos-dev',
};

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
    // We don't use avatarUpload for something, but we need to have at least one field of a cloudinaryImage type so that we can use the Upload scalar, which we'll handle manually to set the avatar field
    avatarUpload: cloudinaryImage({ cloudinary }),
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
    giveableRep: integer({
      defaultValue: 0,
      validation: {
        min: 0,
        max: 500,
      },
    }),

    // color: String
    defaultPrivacy: privacy,

    // notifications: [Notification] @relation(name:"Notification")
    // friends: [Member] @relation(name:"Friends")
    // friendRequests: [Member] @relation(name:"FriendRequests")
    // ignoredFriendRequests: [Member] @relation(name:"IgnoredFriendRequests")

    twitchName: text(),

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

    verificationToken: text({
      hooks: {
        resolveInput({ resolvedData, inputData, operation }) {
          if (inputData.verificationToken == null && operation === 'create') {
            return getRandomString(24);
          }
          return resolvedData.verificationToken;
        },
      },
    }),
    // verificationToken: String
    // verificationTokenExpiry: Float

    twitterUserName: text(),
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
  hooks: {
    afterOperation: ({ item, operation, context }) => {
      // Send out the verification email
      if (operation === 'create') {
        if (typeof item.verificationToken !== 'string') {
          throw new Error('Invalid token');
        }
        const emailParams = {
          domain: process.env.FRONTEND_URL || 'localhost',
          memberId: item.id.toString(),
          verificationToken: item.verificationToken,
        };
        if (typeof item.email !== 'string') {
          throw new Error('Invalid email');
        }
        if (typeof item.displayName !== 'string') {
          throw new Error('Invalid name');
        }
        sendEmail(
          [{ email: item.email, name: item.displayName }],
          1,
          context,
          emailParams
        );
      }
    },
  },
});

export default Member;
