import { CustomMatchObj } from './types';

const filterFalsePositiveMatches = (matchObjects: CustomMatchObj[]) => {
  const realMatches = matchObjects.filter((currentMatch, index) => {
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
