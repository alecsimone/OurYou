import Member from './Membership/Member';
import Comment from './Things/Comment';
import Connection from './Things/Connection';
import ContentPiece from './Things/ContentPiece';
import Tag from './Things/Tag';
import Thing from './Things/Thing';
import Vote from './Things/Vote';

// Collects all the lists from the different sections and exports them as an object
const lists = {
  Member,
  Thing,
  ContentPiece,
  Tag,
  Vote,
  Connection,
  Comment,
};

export default lists;
