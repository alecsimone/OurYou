const commentFields = `
  __typename
  id
  author {
    __typename
    id
    displayName
    avatar
    rep
    friendsA {
      __typename
      id
    }
    friendsB {
      __typename
      id
    }
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
        friendsA {
          __typename
          id
        }
        friendsB {
          __typename
          id
        }
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
        friendsA {
          __typename
          id
        }
        friendsB {
          __typename
          id
        }
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
        friendsA {
          id
          friendsA {
            id
          }
          friendsB {
            id
          }
        }
        friendsB {
          id
          friendsA {
            id
          }
          friendsB {
            id
          }
        }
      }
    }
  }
  onThing {
    __typename
    id
    title
    author {
      id
      friendsA {
        id
        friendsA {
          id
        }
        friendsB {
          id
        }
      }
      friendsB {
        id
        friendsA {
          id
        }
        friendsB {
          id
        }
      }
    }
  }
  onTag {
    __typename
    id
    title
    author {
        id
        friendsA {
          id
          friendsA {
            id
          }
          friendsB {
            id
          }
        }
        friendsB {
          id
          friendsA {
            id
          }
          friendsB {
            id
          }
        }
    }
  }
  score
  createdAt
`;
export default commentFields;

// Not Implemented yet

// links {
//   ${linkFields}
// }
