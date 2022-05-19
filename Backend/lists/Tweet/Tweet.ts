import { list } from '@keystone-6/core';

const Tweet = list({
  fields: {
    // id_str: String! @unique
    // tweetJson: Json!
  },
});

export default Tweet;
