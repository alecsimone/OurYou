import linkFields from './linkFields';

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
export default commentFields;
