import { CustomMatchObj, TagName } from './types';

const splitOverlappingMatches = (
  currentMatch: CustomMatchObj,
  nextMatch: CustomMatchObj
) => {
  const matchObjects: CustomMatchObj[] = [];

  const matchOneObj = {
    start: currentMatch.start,
    end: nextMatch.start,
    content: currentMatch.content.substring(
      0,
      nextMatch.start - currentMatch.start - 2
    ),
    tag: currentMatch.tag,
  };
  matchObjects.push(matchOneObj);

  const matchTwoObj: CustomMatchObj = {
    start: nextMatch.start,
    end: currentMatch.end,
    content: currentMatch.content.substring(
      nextMatch.start - currentMatch.start
    ),
    tag: [currentMatch.tag as TagName, nextMatch.tag as TagName],
  };
  matchObjects.push(matchTwoObj);

  const matchThreeObj: CustomMatchObj = {
    start: currentMatch.end,
    end: nextMatch.end,
    content: nextMatch.content.substring(matchTwoObj.content.length + 2),
    tag: nextMatch.tag,
  };
  matchObjects.push(matchThreeObj);

  return matchObjects;
};

export default splitOverlappingMatches;
