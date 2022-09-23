import splitOverlappingMatches from './splitOverlappingMatches';
import { CustomMatchObj } from './types';

const splitCombinedMatches = (matches: CustomMatchObj[]) => {
  // When we find overlapping or nested matches, we need to split them up or skip them so that we end up with a list of matches that are not contaminated by other overlapping or nested matches. We call these "pure" matches
  let pureMatches: CustomMatchObj[] = [];

  // As we loop through our matches, we'll process some before we get to them. We'll then need to skip them once we do get to them in the loop. We store the indices of those matches here so we can skip them when we get there
  const indicesToSkip: number[] = [];

  // Now let's loop over our matches
  matches.forEach((currentMatch, index) => {
    // First a quick check to make sure this match hasn't been processed already so we can skip the ones that have
    if (!indicesToSkip.includes(index)) {
      if (index === matches.length - 1) {
        // If this is the last match, we can just add it to our pure matches list, because it can't be contaminated by a later match
        pureMatches.push(currentMatch);
      } else {
        // For all the earlier matches, we need to check if there's any contamination

        // If there are no nested or overlapping matches with the current match (i.e. if the next match starts after this match ends), we can just add it to our pure matches list
        let nextMatch = matches[index + 1];
        if (nextMatch.start >= currentMatch.end) {
          pureMatches.push(currentMatch);
        }

        // Otherwise, we want to loop through the nested and overlapping matches and handle them specially
        let i = 1;
        while (
          // We want to go through all the matches that start before our current match ends
          index + i <= matches.length - 1 &&
          nextMatch.start < currentMatch.end
        ) {
          if (
            // If the next match starts before this match ends but ends after this match ends, it's overlapping
            nextMatch.start < currentMatch.end &&
            nextMatch.end > currentMatch.end
          ) {
            // When matches overlap, we need to split them up and add the split up matches to our pure matches object.
            const splitMatchObjects = splitOverlappingMatches(
              currentMatch,
              nextMatch
            );
            pureMatches = [...pureMatches, ...splitMatchObjects];

            // Then we note that the next match has already been processed and should be skipped
            indicesToSkip.push(index + i);
          } else if (
            // If the next match starts and ends before this match ends, then it's nested within this one
            nextMatch.start < currentMatch.end &&
            nextMatch.end <= currentMatch.end
          ) {
            // We don't need to handle nested matches differently because that will be taken care of by the recursive <RichText /> usage in the match's content, but we do need to make sure we're only adding it to our pure matches array once, so we only do so on the first iteration of the loop
            if (i === 1) {
              pureMatches.push(currentMatch);
            }
            // We also need to skip all the nested matches because they don't belong in our pure matches array.
            indicesToSkip.push(index + i);
          }

          // Now we can move on to the next iteration of the while loop
          i += 1;
          nextMatch = matches[index + i];
        }
      }
    }
  });

  return pureMatches;
};

export default splitCombinedMatches;
