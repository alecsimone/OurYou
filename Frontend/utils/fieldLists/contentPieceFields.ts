import commentFields from './commentFields';

const contentPieceFields = `
  __typename
  id
  content
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
`;
export default contentPieceFields;

// Not Implemented Yet

// unsavedNewContent;

// individualViewPermissions {
//   __typename
//   id
//   displayName
//   avatar
// }

// links {
//   ${linkFields}
// }
