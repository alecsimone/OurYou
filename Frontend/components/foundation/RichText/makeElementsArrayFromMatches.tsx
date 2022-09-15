import getPrecedingText from './tagMakers/getPrecedingText';
import makeBlockQuote from './tagMakers/makeBlockQuote';
import makeCodeBlock from './tagMakers/makeCodeBlock';
import makeEmail from './tagMakers/makeEmail';
import makeStyleTags from './tagMakers/makeStyleTags';
import makeSummary from './tagMakers/makeSummary';
import makeTwitterMention from './tagMakers/makeTwitterMention';
import makeUrl from './tagMakers/makeUrl';
import { CustomMatchObj } from './types';

const makeElementsArrayFromMatches = (
  matches: CustomMatchObj[],
  originalText: string
) => {
  const elementsArray: (JSX.Element | string)[] = [];

  matches.forEach((match, index) => {
    elementsArray.push(getPrecedingText(match, matches, index, originalText));

    // We're using includes because it could be an array or a string
    if (
      match.tag.includes('stars') ||
      match.tag.includes('bars') ||
      match.tag.includes('pounds') ||
      match.tag.includes('slashes') ||
      match.tag.includes('rawStyle')
    ) {
      elementsArray.push(makeStyleTags(match));
    }

    if (match.tag.includes('code')) {
      elementsArray.push(makeCodeBlock(match));
    }

    if (match.tag.includes('quote')) {
      elementsArray.push(makeBlockQuote(match));
    }

    if (match.tag.includes('summary')) {
      if (
        match.extraGroups != null &&
        match.extraGroups.summaryText != null &&
        match.extraGroups.summarizedText != null
      ) {
        elementsArray.push(makeSummary(match));
      }
    }

    if (match.tag.includes('twitterMention')) {
      elementsArray.push(makeTwitterMention(match));
    }

    if (match.tag.includes('email')) {
      elementsArray.push(makeEmail(match));
    }

    if (match.tag.includes('url')) {
      if (match.fullTag != null) {
        elementsArray.push(makeUrl(match));
      }
    }

    if (index === matches.length - 1) {
      const endingText = originalText.substring(match.end);
      elementsArray.push(endingText);
    }
  });

  return elementsArray;
};

export default makeElementsArrayFromMatches;
