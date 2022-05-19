import { list } from '@keystone-6/core';

const Link = list({
  fields: {
    // title: String
    // description: String
    // video: String
    // image: String
    // icon: String
    // siteName: String
    // url: String @unique
    // ogURL: String
    // onContentPiece: ContentPiece
    // onComment: Comment
    // onTweet: Tweet
    // createdAt: DateTime @createdAt
    // updatedAt: DateTime @updatedAt
  },
});

export default Link;
