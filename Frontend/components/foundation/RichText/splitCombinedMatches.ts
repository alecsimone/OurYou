import { CustomMatchObj, TagName } from './types';

const splitCombinedMatches = (matches: CustomMatchObj[]) => {
  const pureMatches: CustomMatchObj[] = [];

  const indicesToSkip: number[] = [];

  matches.forEach((currentMatch, index) => {
    if (!indicesToSkip.includes(index)) {
      if (index < matches.length - 1) {
        const nextMatch = matches[index + 1];
        if (nextMatch.start < currentMatch.end) {
          // The next match overlaps with this one, so we need to split them up
          // First we note that the next match has already been processed and should be skipped
          indicesToSkip.push(index + 1);
          // Match one, from start of 1 to start of 2
          const matchOneObj = {
            start: currentMatch.start,
            end: nextMatch.start,
            content: currentMatch.content.substring(
              0,
              nextMatch.start - currentMatch.start - 2
            ),
            tag: currentMatch.tag,
          };
          pureMatches.push(matchOneObj);

          const matchTwoObj: CustomMatchObj = {
            start: nextMatch.start,
            end: currentMatch.end,
            content: currentMatch.content.substring(
              nextMatch.start - currentMatch.start
            ),
            tag: [currentMatch.tag as TagName, nextMatch.tag as TagName],
          };
          pureMatches.push(matchTwoObj);

          const matchThreeObj: CustomMatchObj = {
            start: currentMatch.end,
            end: nextMatch.end,
            content: nextMatch.content.substring(
              matchTwoObj.content.length + 2
            ),
            tag: nextMatch.tag,
          };
          pureMatches.push(matchThreeObj);
        } else {
          pureMatches.push(currentMatch);
        }
      } else {
        console.log(currentMatch);
        pureMatches.push(currentMatch);
      }
    }
  });

  return pureMatches;
};

export default splitCombinedMatches;
