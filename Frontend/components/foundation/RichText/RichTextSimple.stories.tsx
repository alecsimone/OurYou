/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RichText from './RichText';
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

export default {
  title: 'Rich Text/Simple',
  component: RichText,
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => (
  <RichText {...args} />
);

export const NoMatches = Template.bind({});
NoMatches.args = {
  text: noMatchText,
};

export const Stars = Template.bind({});
Stars.args = {
  text: `**${starsTexts.boldText}** ${starsTexts.plainText}`,
};

export const Bars = Template.bind({});
Bars.args = {
  text: `__${barsTexts.underlinedText}__ ${barsTexts.plainText}`,
};

export const Pounds = Template.bind({});
Pounds.args = {
  text: `##${poundsTexts.headerText}## ${poundsTexts.plainText}`,
};

export const RawStyle = Template.bind({});
RawStyle.args = {
  text: `<style="color: green; fontWeight: bold">${rawStyleTexts.styledText}</style> ${rawStyleTexts.plainText}`,
};

export const Code = Template.bind({});
Code.args = {
  text: `${codeBlockTexts.plainText} <code lang='js'>${codeBlockTexts.code}</code>`,
};

export const BlockQuote = Template.bind({});
BlockQuote.args = {
  text: `${blockQuoteTexts.startPlainText} <"${blockQuoteTexts.quoteText}"> ${blockQuoteTexts.endPlainText}`,
};

export const Summary = Template.bind({});
Summary.args = {
  text: `${summaryTexts.startPlainText} >>${summaryTexts.summarizedText}<<(${summaryTexts.summaryText}) ${summaryTexts.endPlainText}`,
};

export const TwitterMention = Template.bind({});
TwitterMention.args = {
  text: `${twitterTexts.startPlainText} @${twitterTexts.name} ${twitterTexts.endPlainText}`,
};

export const Email = Template.bind({});
Email.args = {
  text: `${emailTexts.startPlainText} ${emailTexts.email} ${emailTexts.endPlainText}`,
};

export const URL = Template.bind({});
URL.args = {
  text: `${urlTexts.startPlainText} ${urlTexts.url} ${urlTexts.endPlainText}`,
};
