/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import filterFalsePositiveMatches from './filterFalsePositiveMatches';
import getAllMatches from './getAllMatches';
import makeCustomMatchObj from './makeCustomMatchObj';
// eslint-disable-next-line import/no-cycle
import makeElementsArrayFromMatches from './makeElementsArrayFromMatches';
import { superMatcher } from './regexes';
import splitCombinedMatches from './splitCombinedMatches';
import { CustomMatchObj } from './types';

interface RichTextProps {
  text: string;
}

const logging = true;

const RichText = ({ text }: RichTextProps): JSX.Element => {
  if (logging) {
    console.log('---- New Rich Text Instance ----');
  }
  const matches = getAllMatches(text, superMatcher);
  if (logging) {
    console.log({ matches });
  }

  const matchObjects: CustomMatchObj[] = [];
  for (const match of matches) {
    const matchObj = makeCustomMatchObj(match);
    matchObjects.push(matchObj);
  }
  if (logging) {
    console.log({ matchObjects });
  }

  if (matchObjects.length === 0) {
    if (logging) {
      console.log('no matches');
    }
    return <span>{text}</span>;
  }

  // First we want to get rid of any false positives caused by the end tag of one match and the start tag of the next match of the same kind
  const realMatches = filterFalsePositiveMatches(matchObjects);
  if (logging) {
    console.log({ realMatches });
  }

  // Then we need to split any overlapping matches into pure matches with the corresponding tags. IE, one match for the part before the overlap, one combined match for the overlap, and a final match for the part after the overlap
  const pureMatches = splitCombinedMatches(realMatches);
  if (logging) {
    console.log({ pureMatches });
  }

  // Finally, we want to turn our matches (and the text that doesn't include any matches) into JSX elements
  const elementsArray = makeElementsArrayFromMatches(pureMatches, text);
  if (logging) {
    console.log({ elementsArray });
  }

  return <>{elementsArray}</>;
};

export default RichText;
