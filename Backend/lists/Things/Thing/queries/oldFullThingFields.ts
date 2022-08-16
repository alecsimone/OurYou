const linkFields = `
   __typename
   id
   title
   description
   icon
   video
   image
   siteName
   url
   ogURL
   updatedAt
`;

const commentFields = `
   __typename
   id
   author {
      __typename
      id
      displayName
      avatar
      rep
      friends {
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
         friends {
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
      updatedAt
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
         friends {
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
      updatedAt
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
            friends {
               id
               friends {
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
         friends {
            id
            friends {
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
         friends {
            id
            friends {
               id
            }
         }
      }
   }
   score
   createdAt
   updatedAt
   links {
      ${linkFields}
   }
`;

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
         friends {
            id
            friends {
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
         friends {
            id
            friends {
               id
            }
         }
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
   individualViewPermissions {
      __typename
      id
      displayName
      avatar
   }
   links {
      ${linkFields}
   }
`;

const oldFullThingFields = `
   __typename
   id
   title
   author {
      __typename
      id
      avatar
      displayName
      friends {
         __typename
         id
         friends {
            __typename
            id
         }
      }
      rep
   }
   featuredImage
   poster
   link
   content {
      ${contentPieceFields}
   }
   unsavedNewContent
   addToStartUnsavedNewContent
   copiedInContent {
      ${contentPieceFields}
   }
   summary
   contentOrder
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
   individualViewPermissions {
      __typename
      id
      displayName
      avatar
   }
   manualUpdatedAt
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
   createdAt
   updatedAt
`;
export default oldFullThingFields;
