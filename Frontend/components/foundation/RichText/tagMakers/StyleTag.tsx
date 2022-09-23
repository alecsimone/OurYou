import { CSSProperties } from 'react';
import stringToObject from 'utils/stringToObject';
// eslint-disable-next-line import/no-cycle
import RichText from '../RichText';
import { CustomMatchObj } from '../types';

interface StyleTagProps {
  match: CustomMatchObj;
}

const StyleTag = ({ match }: StyleTagProps): JSX.Element => {
  // What we're doing here is creating an object of style properties that we can apply to this text. There might be multiple tags involved, so we just check for each tag and if it's present we add its properties to our style object.
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
      return <span key={match.start}>match.content</span>;
    }
    styleObj = stringToObject(match.extraGroups.styleObjectRaw, ':;');
  }

  return (
    <span style={styleObj}>
      <RichText text={match.content} />
    </span>
  );
};

export default StyleTag;
