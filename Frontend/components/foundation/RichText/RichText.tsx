/* eslint-disable react/jsx-no-useless-fragment */
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

const RichText = ({ text }: RichTextProps): JSX.Element => {
  // First we run a custom regex exec loop that allows us to find nested and overlapping matches
  const matches = getAllMatches(text, superMatcher);

  // Then we want to turn each match into a CustomMatchObj that identifies what kind of tag the match is and has all the info we'll need about it
  const matchObjects: CustomMatchObj[] = [];
  for (const match of matches) {
    const matchObj = makeCustomMatchObj(match);
    matchObjects.push(matchObj);
  }

  // If there are no matches, we can just return plain text
  if (matchObjects.length === 0) {
    return <>{text}</>;
  }

  // If there are matches, first we want to get rid of any false positives caused by the end tag of one match and the start tag of the next match of the same kind
  const realMatches = filterFalsePositiveMatches(matchObjects);

  // Then we need to split any overlapping matches into pure matches with the corresponding tags. IE, one match for the part before the overlap, one combined match for the overlap, and a final match for the part after the overlap. We also need to skip any matches nested within other matches, as those will be handled by our recursive use of this component
  const pureMatches = splitCombinedMatches(realMatches);

  // Finally, we want to turn our matches (and the text that doesn't include any matches) into JSX elements
  const elementsArray = makeElementsArrayFromMatches(pureMatches, text);

  return <>{elementsArray}</>;
};

export default RichText;
