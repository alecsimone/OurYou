import { list } from '@keystone-6/core';

const Member = list({
  fields: {
    // displayName: String!
    // avatar: String
    // rep: Int! @default(value: 0)
    // points: Int! @default(value: 0)
    // giveableRep: Int! @default(value: 0)
    // color: String
    // friends: [Member] @relation(name:"Friends")
    // friendRequests: [Member] @relation(name:"FriendRequests")
    // ignoredFriendRequests: [Member] @relation(name:"IgnoredFriendRequests")
    // notifications: [Notification] @relation(name:"Notification")
    // twitchName: String
    // email: String! @unique
    // votes: [Vote]
    // createdThings: [Thing] @relation(name: "Author")
    // ownedTags: [Tag]
    // defaultPrivacy: PrivacySetting
    // individualViewPermissions: [Thing] @relation(name: "IndividualViewers")
    // individualContentPieceViewPermissions: [ContentPiece] @relation(name: "IndividualContentPieceViewers")
    // collections: [Collection] @relation(name: "Collector")
    // collectionsCanEdit: [Collection] @relation(name: "CollectionEditor")
    // collectionsCanView: [Collection] @relation(name: "CollectionViewer")
    // lastActiveCollection: Collection @relation(name:"LastActiveCollection")
    // comments: [Comment]
    // password: String!
    // role: Role
    // verificationToken: String
    // verificationTokenExpiry: Float
    // twitterTokenSecret: String
    // twitterUserName: String
    // twitterUserID: String
    // twitterUserToken: String
    // twitterUserTokenSecret: String
    // twitterListsObject: String
    // twitterSeenIDs: [String] @scalarList(strategy: RELATION)
    // createdConnections: [Connection] @scalarList(strategy: RELATION)
    // ownedLinks: [PersonalLink]
    // ownedLinkTags: [LinkTag]
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default Member;
