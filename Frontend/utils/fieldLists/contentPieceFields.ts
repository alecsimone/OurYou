import commentFields from './commentFields';

const contentPieceFields = `
  __typename
  id
  content
  unsavedNewContent
  comments {
    ${commentFields}
  }
  onThing {
    __typename
    id
    title
    privacy
    author {
        id
    }
  }
  onTag {
    __typename
    id
    title
    author {
        id
    }
  }
  copiedToThings {
    __typename
    id
    title
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
  privacy
  individualViewers {
    __typename
    id
    displayName
    avatar
  }
`;
export default contentPieceFields;

// Not Implemented Yet

// links {
//   ${linkFields}
// }
