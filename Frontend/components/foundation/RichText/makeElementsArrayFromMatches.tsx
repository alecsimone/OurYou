/* eslint-disable import/no-cycle */
import getPrecedingText from './tagMakers/getPrecedingText';
import { CustomMatchObj } from './types';
import CodeBlock from './tagMakers/CodeBlock';
import BlockQuote from './tagMakers/BlockQuote';
import StyleTag from './tagMakers/StyleTag';
import Summary from './tagMakers/Summary';
import TwitterMention from './tagMakers/TwitterMention';
import Email from './tagMakers/Email';
import Url from './tagMakers/Url';
import { Fragment } from 'react';

const makeElementsArrayFromMatches = (
  matches: CustomMatchObj[],
  originalText: string
) => {
  // Basically we're doing two things here. Turning our matches into the relevant kind of tag, and getting all the text between our matches so it can just be added as a string. All of that will be stored in this elementsArray
  const elementsArray: (JSX.Element | string)[] = [];

  matches.forEach((match, index) => {
    // Our getPrecedingText function will get the text before the first match or between the last match and this match, depending on which one we need
    if (index !== 0 || match.start !== 0) {
      elementsArray.push(getPrecedingText(match, matches, index, originalText));
    }

    // Now we need to figure out which tag we're working with. We use includes instead of equals because it might be an array, and there might be more than one
    if (
      match.tag.includes('stars') ||
      match.tag.includes('bars') ||
      match.tag.includes('pounds') ||
      match.tag.includes('slashes') ||
      match.tag.includes('rawStyle')
    ) {
      elementsArray.push(
        <StyleTag
          key={match.start}
          match={match}
        />
      );
    }

    if (match.tag.includes('code')) {
      elementsArray.push(
        <CodeBlock
          key={match.start}
          match={match}
        />
      );
    }

    if (match.tag.includes('quote')) {
      elementsArray.push(
        <BlockQuote
          key={match.start}
          match={match}
        />
      );
    }

    if (match.tag.includes('summary')) {
      if (
        match.extraGroups != null &&
        match.extraGroups.summaryText != null &&
        match.extraGroups.summarizedText != null
      ) {
        elementsArray.push(
          <Summary
            key={match.start}
            match={match}
          />
        );
      }
    }

    if (match.tag.includes('twitterMention')) {
      elementsArray.push(
        <TwitterMention
          key={match.start}
          match={match}
        />
      );
    }

    if (match.tag.includes('email')) {
      elementsArray.push(
        <Email
          key={match.start}
          match={match}
        />
      );
    }

    if (match.tag.includes('url')) {
      if (match.fullTag != null) {
        elementsArray.push(
          <Url
            key={match.start}
            match={match}
          />
        );
      }
    }

    // Finally, we need to add any plain text from after our last match
    if (index === matches.length - 1) {
      const endingText = originalText.substring(match.end);
      elementsArray.push(<Fragment key={match.end}>{endingText}</Fragment>);
    }
  });

  return elementsArray;
};

export default makeElementsArrayFromMatches;
