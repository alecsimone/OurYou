import splitOverlappingMatches from './splitOverlappingMatches';
import { CustomMatchObj } from './types';

const splitCombinedMatches = (matches: CustomMatchObj[]) => {
  let pureMatches: CustomMatchObj[] = [];

  const indicesToSkip: number[] = [];

  // * Essentially, here is what we need to do:
  // * For each match, we need to look ahead until we get to a match that is not nested inside the current match or overlapping with it
  // * When we find matches that are either nested or overlapping, we need to process them a bit differently.
  // * For overlapping matches, we need to split them up into multiple match objects (probably more than this to handle daisy chain, but I'm not thinking about that yet)
  // * For nested matches, we just need to skip that match by adding its index to our indices to skip array
  // * If there are no matches that are nested within or overlapping our current match, we can just push it into our pure matches array.

  matches.forEach((currentMatch, index) => {
    if (!indicesToSkip.includes(index)) {
      if (index < matches.length - 1) {
        let i = 1;
        let nextMatch = matches[index + i];
        // If there are no nested or overlapping matches with the current match, we can just add it
        if (nextMatch.start >= currentMatch.end) {
          pureMatches.push(currentMatch);
        }
        // Otherwise, we want to loop through the nested and overlapping matches and handle them specially
        while (
          index + i <= matches.length - 1 &&
          nextMatch.start < currentMatch.end
        ) {
          if (
            nextMatch.start < currentMatch.end &&
            nextMatch.end > currentMatch.end
          ) {
            // The next match overlaps with this one, so we need to split them up
            // First we note that the next match has already been processed and should be skipped
            indicesToSkip.push(index + i);
            // Then we get the split up match objects
            const splitMatchObjects = splitOverlappingMatches(
              currentMatch,
              nextMatch
            );

            pureMatches = [...pureMatches, ...splitMatchObjects];
          } else if (
            nextMatch.start < currentMatch.end &&
            nextMatch.end < currentMatch.end
          ) {
            // The next match is nested within this one. We don't need to handle it differently because that will be caught by the recursive <RichText /> usage in the match's content, but we do need to skip it so it doesn't appear in our pureMatches array. We also want to make sure we only add the currentMatch to pureMatches once, so we only do so on the first loop
            indicesToSkip.push(index + i);
            if (i === 1) {
              pureMatches.push(currentMatch);
            }
          } else {
            pureMatches.push(currentMatch);
          }
          i += 1;
          nextMatch = matches[index + i];
        }
      } else {
        pureMatches.push(currentMatch);
      }
    }
  });

  return pureMatches;
};

export default splitCombinedMatches;
