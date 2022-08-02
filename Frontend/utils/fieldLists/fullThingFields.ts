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
   content {
      ${contentPieceFields}
   }
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
export default fullThingFields;

// Not Implemented yet

//  contentOrder;
//  manualUpdatedAt;
//  individualViewPermissions {
//     __typename
//     id
//     displayName
//     avatar
//  }
