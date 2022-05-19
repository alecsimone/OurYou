import { list } from '@keystone-6/core';

const Member = list({
  fields: {
    // email: String! @unique
    // displayName: String!
    // avatar: String
    // password: String!
    // role: Role
    // rep: Int! @default(value: 0)
    // points: Int! @default(value: 0)
    // giveableRep: Int! @default(value: 0)
    // color: String
    // defaultPrivacy: PrivacySetting
    // notifications: [Notification] @relation(name:"Notification")
    // friends: [Member] @relation(name:"Friends")
    // friendRequests: [Member] @relation(name:"FriendRequests")
    // ignoredFriendRequests: [Member] @relation(name:"IgnoredFriendRequests")
    // twitchName: String
    // votes: [Vote]
    // createdThings: [Thing] @relation(name: "Author")
    // ownedTags: [Tag]
    // individualViewPermissions: [Thing] @relation(name: "IndividualViewers")
    // individualContentPieceViewPermissions: [ContentPiece] @relation(name: "IndividualContentPieceViewers")
    // collections: [Collection] @relation(name: "Collector")
    // collectionsCanEdit: [Collection] @relation(name: "CollectionEditor")
    // collectionsCanView: [Collection] @relation(name: "CollectionViewer")
    // lastActiveCollection: Collection @relation(name:"LastActiveCollection")
    // comments: [Comment]
    // verificationToken: String
    // verificationTokenExpiry: Float
    // twitterUserName: String
    // twitterListsObject: String
    // twitterSeenIDs: [String] @scalarList(strategy: RELATION)
    // twitterUserID: String
    // twitterTokenSecret: String
    // twitterUserToken: String
    // twitterUserTokenSecret: String
    // createdConnections: [Connection] @scalarList(strategy: RELATION)
    // ownedLinks: [PersonalLink]
    // ownedLinkTags: [LinkTag]
    // createdAt: DateTime! @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default Member;
