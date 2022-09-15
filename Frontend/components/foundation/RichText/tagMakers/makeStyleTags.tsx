import { CSSProperties } from 'react';
import stringToObject from 'utils/stringToObject';
import RichText from '../RichText';
import { CustomMatchObj } from '../types';

const makeStyleTags = (match: CustomMatchObj) => {
  let styleObj: CSSProperties = {};

  if (match.tag.includes('stars')) {
    styleObj.fontWeight = 'bold';
  }
  if (match.tag.includes('bars')) {
    styleObj.textDecoration = 'underline';
  }
  if (match.tag.includes('pounds')) {
    styleObj.fontSize = '2em';
    styleObj.fontWeight = '700';
  }
  if (match.tag.includes('slashes')) {
    styleObj.fontStyle = 'italic';
  }
  if (match.tag.includes('rawStyle')) {
    if (match.extraGroups == null) {
      return match.content;
    }
    styleObj = stringToObject(match.extraGroups.styleObjectRaw, ':;');
  }

  return (
    <span
      key={match.start}
      style={styleObj}
    >
      <RichText text={match.content} />
    </span>
  );
};

export default makeStyleTags;
