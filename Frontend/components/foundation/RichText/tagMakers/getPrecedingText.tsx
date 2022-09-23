import { Fragment } from 'react';
import { CustomMatchObj } from '../types';

const getPrecedingText = (
  match: CustomMatchObj,
  matches: CustomMatchObj[],
  index: number,
  originalText: string
) => {
  // If it's the first match, we just want to get the text from the original string before the match starts
  if (index === 0) {
    const startingText = originalText.substring(0, match.start);
    return <Fragment key={0}>{startingText}</Fragment>;
  }
  // If it's a later match, we want the text between the end of the last match and the start of this one
  const previousMatch = matches[index - 1];
  const interMatchText = originalText.substring(previousMatch.end, match.start);
  return <Fragment key={match.start - 1}>{interMatchText}</Fragment>;
};

export default getPrecedingText;
