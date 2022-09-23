import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as simpleStories from './RichTextSimple.stories';
import {
  barsTexts,
  blockQuoteTexts,
  codeBlockTexts,
  emailTexts,
  noMatchText,
  poundsTexts,
  rawStyleTexts,
  starsTexts,
  summaryTexts,
  twitterTexts,
  urlTexts,
} from './storyTestHelpers';

const {
  NoMatches,
  Stars,
  Bars,
  Pounds,
  RawStyle,
  Code,
  BlockQuote,
  Summary,
  TwitterMention,
  Email,
  URL,
} = composeStories(simpleStories);

describe('RichText', () => {
  it('Renders plain text properly', () => {
    render(<NoMatches />);

    const plainText = screen.getByText(noMatchText);
    expect(plainText).toBeInTheDocument();
  });

  it('Renders bold text properly', () => {
    render(<Stars />);

    const boldText = screen.getByText(starsTexts.boldText);
    expect(boldText).toBeInTheDocument();

    const plainText = screen.getByText(starsTexts.plainText);
    expect(plainText).toBeInTheDocument();

    const spans = document.querySelectorAll('span');
    expect(spans).toHaveLength(1);

    const [boldTextRaw] = spans;
    expect(boldTextRaw.textContent).toBe(starsTexts.boldText);
    const boldTextStyle = window.getComputedStyle(boldTextRaw);
    expect(boldTextStyle.fontWeight).toBe('bold');
  });

  it('Renders underlined text properly', () => {
    render(<Bars />);

    const underlinedText = screen.getByText(barsTexts.underlinedText);
    expect(underlinedText).toBeInTheDocument();

    const plainText = screen.getByText(barsTexts.plainText);
    expect(plainText).toBeInTheDocument();

    const spans = document.querySelectorAll('span');
    expect(spans).toHaveLength(1);

    const [underlinedTextRaw] = spans;
    expect(underlinedTextRaw.textContent).toBe(barsTexts.underlinedText);
    const underlinedTextStyle = window.getComputedStyle(underlinedTextRaw);
    expect(underlinedTextStyle.textDecoration).toBe('underline');
  });

  it('Renders headers properly', () => {
    render(<Pounds />);

    const headerText = screen.getByText(poundsTexts.headerText);
    expect(headerText).toBeInTheDocument();

    const plainText = screen.getByText(poundsTexts.plainText);
    expect(plainText).toBeInTheDocument();

    const spans = document.querySelectorAll('span');
    expect(spans).toHaveLength(1);

    const [headerTextRaw] = spans;
    expect(headerTextRaw.textContent).toBe(poundsTexts.headerText);
    const headerTextStyle = window.getComputedStyle(headerTextRaw);
    expect(headerTextStyle.fontWeight).toBe('700');
    expect(headerTextStyle.fontSize).toBe('2em');
  });

  it('Renders manually styled text properly', () => {
    render(<RawStyle />);

    const rawStyleText = screen.getByText(rawStyleTexts.styledText);
    expect(rawStyleText).toBeInTheDocument();

    const plainText = screen.getByText(rawStyleTexts.plainText);
    expect(plainText).toBeInTheDocument();

    const spans = document.querySelectorAll('span');
    expect(spans).toHaveLength(1);

    const [rawStyleTextRaw] = spans;
    expect(rawStyleTextRaw.textContent).toBe(rawStyleTexts.styledText);
    const rawStyleTextStyle = window.getComputedStyle(rawStyleTextRaw);
    expect(rawStyleTextStyle.color).toBe('green');
    expect(rawStyleTextStyle.fontWeight).toBe('bold');
  });

  it('Renders code blocks properly', () => {
    render(<Code />);

    // For some reason searching for the text "console" finds the code block itself, but these other two tests seem to work
    const logText = screen.getByText('log');
    expect(logText).toBeInTheDocument();
    expect(logText).toHaveClass('token');

    const text = screen.getByText("'hello world!'");
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('token');

    const codeBlocks = document.querySelectorAll('code');
    expect(codeBlocks).toHaveLength(1);

    const [codeBlock] = codeBlocks;
    expect(codeBlock.textContent).toBe(codeBlockTexts.code);
  });

  it('Renders BlockQuotes properly', () => {
    render(<BlockQuote />);

    const quoteText = screen.getByText(blockQuoteTexts.quoteText);
    expect(quoteText).toBeInTheDocument();

    const plainText = screen.getByText(
      new RegExp(`${blockQuoteTexts.startPlainText}`, 'im')
    );
    expect(plainText).toBeInTheDocument();

    const blockQuote = document.querySelectorAll('blockquote');
    expect(blockQuote).toHaveLength(1);
  });

  it('Renders Summaries properly', () => {
    render(<Summary />);

    const summaryText = screen.getByText(summaryTexts.summaryText);
    expect(summaryText).toBeInTheDocument();

    const summarizedText = screen.getByText(summaryTexts.summarizedText);
    expect(summarizedText).toBeInTheDocument();

    const plainText = screen.getByText(
      new RegExp(summaryTexts.startPlainText, 'im')
    );
    expect(plainText).toBeInTheDocument();

    const details = document.querySelectorAll('details');
    expect(details).toHaveLength(1);

    const summary = document.querySelectorAll('summary');
    expect(summary).toHaveLength(1);
  });

  it('Renders Twitter Mentions properly', () => {
    render(<TwitterMention />);

    const mentionText = screen.getByText(new RegExp(twitterTexts.name));
    expect(mentionText).toBeInTheDocument();

    const mentionLink = mentionText.closest('a');
    expect(mentionLink).toHaveAttribute(
      'href',
      `https://twitter.com/${twitterTexts.name}`
    );

    const plainTextStart = screen.getByText(
      new RegExp(twitterTexts.startPlainText)
    );
    expect(plainTextStart).toBeInTheDocument();

    const plainTextEnd = screen.getByText(
      new RegExp(twitterTexts.endPlainText)
    );
    expect(plainTextEnd).toBeInTheDocument();
  });

  it('Renders email links properly', () => {
    render(<Email />);

    const emailText = screen.getByText(new RegExp(emailTexts.email));
    expect(emailText).toBeInTheDocument();

    const emailLink = emailText.closest('a');
    expect(emailLink).toHaveAttribute('href', `mailto:${emailTexts.email}`);

    const plainTextStart = screen.getByText(
      new RegExp(emailTexts.startPlainText)
    );
    expect(plainTextStart).toBeInTheDocument();

    const plainTextEnd = screen.getByText(new RegExp(emailTexts.endPlainText));
    expect(plainTextEnd).toBeInTheDocument();
  });

  it('Renders urls properly', () => {
    render(<URL />);

    const urlText = screen.getByText(new RegExp(urlTexts.url));
    expect(urlText).toBeInTheDocument();

    const link = urlText.closest('a');
    expect(link).toHaveAttribute('href', urlTexts.url);

    const plainTextStart = screen.getByText(
      new RegExp(urlTexts.startPlainText)
    );
    expect(plainTextStart).toBeInTheDocument();

    const plainTextEnd = screen.getByText(new RegExp(urlTexts.endPlainText));
    expect(plainTextEnd).toBeInTheDocument();
  });
});
