import { gql } from '@apollo/client';

const PROFILE_SIDEBAR_QUERY = gql`
  query PROFILE_SIDEBAR_QUERY($id: ID) {
    getProfileSidebarData(id: $id) {
      __typename
      id
      avatar
      defaultPrivacy
      displayName
      role
      rep
      giveableRep
      email
      twitchName
      twitterUserName
    }
  }
`;

export default PROFILE_SIDEBAR_QUERY;
