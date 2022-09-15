import { CustomMatchObj } from '../types';

const getPrecedingText = (
  match: CustomMatchObj,
  matches: CustomMatchObj[],
  index: number,
  originalText: string
) => {
  if (index === 0) {
    const startingText = originalText.substring(0, match.start);
    return startingText;
  }
  const previousMatch = matches[index - 1];
  const interMatchText = originalText.substring(previousMatch.end, match.start);
  return interMatchText;
};

export default getPrecedingText;
