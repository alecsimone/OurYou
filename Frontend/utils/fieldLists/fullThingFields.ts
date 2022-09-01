import commentFields from './commentFields';
import contentPieceFields from './contentPieceFields';

const fullThingFields = `
  __typename
  id
  title
  author {
    __typename
    id
    avatar
    displayName
    friendsA {
      __typename
      id
      friendsA {
        __typename
        id
      }
      friendsB {
        __typename
        id
      }
    }
    friendsB {
      __typename
      id
      friendsA {
        __typename
        id
      }
      friendsB {
        __typename
        id
      }
    }
    rep
  }
  featuredImage
  poster
  content {
    ${contentPieceFields}
  }
  contentOrder
  unsavedNewContent
  addToStartUnsavedNewContent
  copiedInContent {
    ${contentPieceFields}
  }
  partOfTags {
    __typename
    id
    title
    author {
        __typename
        id
        displayName
        avatar
        rep
    }
  }
  color
  comments {
    ${commentFields}
  }
  votes {
    __typename
    id
    value
    voter {
        __typename
        id
        displayName
        rep
        avatar
    }
  }
  score
  privacy
  individualViewers {
    __typename
    id
    displayName
    avatar
  }
  subjectConnections {
    id
    subject {
        id
        privacy
    }
    object {
        id
        privacy
    }
    relationship
    strength
    isBlocked
    createdAt
  }
  objectConnections {
    id
    subject {
        id
    }
    object {
        id
    }
    relationship
    strength
    isBlocked
    createdAt
  }
  updatedAt
  createdAt
`;
export default fullThingFields;
