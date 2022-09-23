import { CustomMatchObj } from './types';

const filterFalsePositiveMatches = (matchObjects: CustomMatchObj[]) => {
  // We want to filter out any false positive matches caused by the end tag of one match and the start tag of the next match of the same kind
  const realMatches = matchObjects.filter((currentMatch, index) => {
    // These false positives are found between two matches of the same type, so they can't be the first or last match
    if (index === 0 || index === matchObjects.length - 1) return true;

    const prevMatch = matchObjects[index - 1];
    const nextMatch = matchObjects[index + 1];
    if (
      currentMatch.start < prevMatch.end &&
      currentMatch.tag === prevMatch.tag &&
      currentMatch.end > nextMatch.start &&
      currentMatch.tag === nextMatch.tag
    )
      return false;

    return true;
  });

  return realMatches;
};

export default filterFalsePositiveMatches;
