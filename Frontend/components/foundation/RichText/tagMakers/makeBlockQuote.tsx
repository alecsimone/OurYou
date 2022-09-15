import RichText from '../RichText';
import { CustomMatchObj } from '../types';

const makeBlockQuote = (match: CustomMatchObj) => (
  <blockquote>
    <RichText text={match.content} />
  </blockquote>
);

export default makeBlockQuote;
