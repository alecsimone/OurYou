import React from 'react';
import filterFalsePositiveMatches from './filterFalsePositiveMatches';
import getAllMatches from './getAllMatches';
import makeCustomMatchObj from './makeCustomMatchObj';
import makeElementsArrayFromMatches from './makeElementsArrayFromMatches';
import { superMatcher } from './regexes';
import splitCombinedMatches from './splitCombinedMatches';
import { CustomMatchObj } from './types';

interface RichTextProps {
  text: string;
}

const RichText = ({ text }: RichTextProps): JSX.Element => {
  const matches = getAllMatches(text, superMatcher);
  // console.log({ matches });

  const matchObjects: CustomMatchObj[] = [];
  for (const match of matches) {
    const matchObj = makeCustomMatchObj(match);
    matchObjects.push(matchObj);
  }
  // console.log({ matchObjects });

  if (matchObjects.length === 0) {
    // console.log('no matches');
    return <div>{text}</div>;
  }

  // First we want to get rid of any false positives caused by the end tag of one match and the start tag of the next match of the same kind
  const realMatches = filterFalsePositiveMatches(matchObjects);
  // console.log({ realMatches });

  // Then we need to split any overlapping matches into pure matches with the corresponding tags. IE, one match for the part before the overlap, one combined match for the overlap, and a final match for the part after the overlap
  const pureMatches = splitCombinedMatches(realMatches);
  console.log({ pureMatches });

  // Finally, we want to turn our matches (and the text that doesn't include any matches) into JSX elements
  const elementsArray = makeElementsArrayFromMatches(pureMatches, text);
  // console.log({ elementsArray });

  return <div>{elementsArray}</div>;
};

export default RichText;
