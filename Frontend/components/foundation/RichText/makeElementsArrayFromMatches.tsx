import { CSSProperties } from 'react';
import stringToObject from 'utils/stringToObject';
import { CustomMatchObj } from './types';

const makeElementsArrayFromMatches = (
  matches: CustomMatchObj[],
  originalText: string
) => {
  const elementsArray: (JSX.Element | string)[] = [];

  matches.forEach((match, index) => {
    if (index === 0) {
      const startingText = originalText.substring(0, match.start);
      console.log({ startingText });
      elementsArray.push(startingText);
    } else {
      const previousMatch = matches[index - 1];
      const interMatchText = originalText.substring(
        previousMatch.end,
        match.start
      );
      console.log({ interMatchText });
      elementsArray.push(interMatchText);
    }

    // We're using includes because it could be an array or a string
    if (
      match.tag.includes('stars') ||
      match.tag.includes('bars') ||
      match.tag.includes('pounds') ||
      match.tag.includes('slashes') ||
      match.tag.includes('rawStyle')
    ) {
      let styleObj: CSSProperties = {};

      if (match.tag.includes('stars')) {
        styleObj.fontWeight = 'bold';
      }
      if (match.tag.includes('bars')) {
        styleObj.textDecoration = 'underline';
      }
      if (match.tag.includes('pounds')) {
        styleObj.fontSize = '2em';
        styleObj.fontWeight = '700';
      }
      if (match.tag.includes('slashes')) {
        styleObj.fontStyle = 'italic';
      }
      if (match.tag.includes('rawStyle')) {
        if (match.extraGroups == null) {
          elementsArray.push(match.content);
        } else {
          styleObj = stringToObject(match.extraGroups.styleObjectRaw, ':;');
        }
      }

      elementsArray.push(
        <span
          key={match.start}
          style={styleObj}
        >
          {match.content}
        </span>
      );
    }

    if (match.tag.includes('code')) {
      elementsArray.push(
        <pre>
          <code className={`language-${match?.extraGroups?.codeLang}`}>
            {match.content.trim()}
          </code>
        </pre>
      );
    }

    if (match.tag.includes('quote')) {
      elementsArray.push(<blockquote>{match.content}</blockquote>);
    }

    if (match.tag.includes('summary')) {
      if (
        match.extraGroups != null &&
        match.extraGroups.summaryText != null &&
        match.extraGroups.summarizedText != null
      ) {
        elementsArray.push(
          <details>
            <summary>{match.extraGroups.summaryText}</summary>
            {match.extraGroups.summarizedText}
          </details>
        );
      }
    }

    if (match.tag.includes('twitterMention')) {
      if (match.extraGroups == null || match.extraGroups.username == null) {
        if (match.fullTag == null) {
          elementsArray.push('[Mention Error]');
        } else {
          elementsArray.push(match.fullTag);
        }
      } else {
        elementsArray.push(
          <a
            href={`https://twitter.com/${match.extraGroups.username}`}
            target="_blank"
            rel="noreferrer"
          >
            @{match.extraGroups.username}
          </a>
        );
      }
    }

    if (match.tag.includes('email')) {
      elementsArray.push(
        <a
          href={`mailto:${match.fullTag}`}
          target="_blank"
          rel="noreferrer"
        >
          {match.fullTag}
        </a>
      );
    }

    if (match.tag.includes('url')) {
      if (match.fullTag != null) {
        let fullUrl: string;
        if (
          !match.fullTag.includes('://') &&
          !match.fullTag.includes('mailto')
        ) {
          fullUrl = `https://${match.fullTag}`;
        } else {
          fullUrl = match.fullTag;
        }
        elementsArray.push(
          <a
            href={fullUrl}
            target="_blank"
            rel="noreferrer"
          >
            {match.fullTag}
          </a>
        );
      }
    }

    if (index === matches.length - 1) {
      const endingText = originalText.substring(match.end);
      console.log({ endingText });
      elementsArray.push(endingText);
    }
  });

  return elementsArray;
};

export default makeElementsArrayFromMatches;
