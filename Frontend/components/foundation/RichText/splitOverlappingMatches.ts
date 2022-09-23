import { CustomMatchObj, TagName } from './types';

const splitOverlappingMatches = (
  firstMatch: CustomMatchObj,
  secondMatch: CustomMatchObj
) => {
  // We're going to create three match objects: one for the part before the second match starts (where only the first tag is active), one for the part after the second match starts and before the first match ends (where both tags are active), and one for the part after the first match ends (where only the second tag is active). We'll keep them in this matchObjects array.
  const matchObjects: CustomMatchObj[] = [];

  // So the first match object goes from the start of the first match to the start of the second match and has only the first tag
  const matchOneObj = {
    start: firstMatch.start,
    end: secondMatch.start,
    content: firstMatch.content.substring(
      // The start property of the match object is relative to the whole string these matches are coming from. So to find the end point here we start from the second match start point, subtract the first match start point (to get the distance between the two start points), and then subtract the length of the second tag's opening demarcator so it doesn't get included.
      0,
      secondMatch.start - firstMatch.start - 2 // ! This 2 needs to be generalized to something like tagDemarcatorLength, because it isn't necessarily 2
    ),
    tag: firstMatch.tag,
  };
  matchObjects.push(matchOneObj);

  // The second match object goes from the start of the second match to the end of the first match and has both tags
  const matchTwoObj: CustomMatchObj = {
    start: secondMatch.start,
    end: firstMatch.end,
    content: firstMatch.content.substring(secondMatch.start - firstMatch.start), // Here we're trying to start at the point in the first match where the second match begins, which means we want to get the distance between the two start points, start our substring there, and go to the end of the first match
    tag: [firstMatch.tag as TagName, secondMatch.tag as TagName],
  };
  matchObjects.push(matchTwoObj);

  // Finally, the third match object goes from the end of the first match to the end of the second match
  const matchThreeObj: CustomMatchObj = {
    start: firstMatch.end,
    end: secondMatch.end,
    // our matchTwoObj goes from the start of the second match until the start of this match, so we can just use its length for the start of our substring, adding the length of the tag demarcator so it doesn't get included.
    content: secondMatch.content.substring(matchTwoObj.content.length + 2), // ! Again, this 2 needs to be generalized to something like tagDemarcatorLength, because it isn't necessarily 2
    tag: secondMatch.tag,
  };
  matchObjects.push(matchThreeObj);

  return matchObjects;
};

export default splitOverlappingMatches;
