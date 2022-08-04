const commentFields = `
  __typename
  id
  author {
    __typename
    id
    displayName
    avatar
    rep
  }
  comment
  replies {
    __typename
    id
    author {
        __typename
        id
        displayName
        avatar
        rep
    }
    comment
    votes {
        __typename
        id
        voter {
          __typename
          id
          displayName
          rep
          avatar
        }
        value
    }
    createdAt
  }
  replyTo {
    __typename
    id
    author {
        __typename
        id
        displayName
        avatar
        rep
    }
    comment
    votes {
        __typename
        id
        voter {
          __typename
          id
          displayName
          rep
          avatar
        }
        value
    }
    createdAt
  }
  votes {
    __typename
    id
    voter {
        __typename
        id
        displayName
        rep
        avatar
    }
    value
  }
  onContentPiece {
    __typename
    id
    onThing {
        __typename
        id
        title
        author {
          id
        }
    }
  }
  onThing {
    __typename
    id
    title
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
  score
  createdAt
`;
export default commentFields;

// Not Implemented yet

// In every use of author except the one that follows this
// author {
//   friends {
//       __typename
//       id
//   }
// }

// onContentPiece {

//   onThing / onTag / onContentPiece/onThing {
//       author {
//         id
//         friends {
//             id
//             friends {
//               id
//             }
//         }
//       }
//   }
// }

// links {
//   ${linkFields}
// }
