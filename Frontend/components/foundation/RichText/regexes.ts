/* eslint-disable prefer-regex-literals */
// * We're using strings inside the RegExp constructor because that allows the named capture groups to be preserved when we combine the regexes into superMatcher even in node based environments. (At least I think that's what's happening. Only that method seems to preserve the named capture groups in Storybook)

const urlAcceptableCharacters = '[-a-z0-9%&?=.,;|$()_~:<>!*/^+#]';
const topLevelDomains =
  'com|org|net|tv|gg|us|uk|co\\.uk|edu|gov|mil|biz|info|mobi|ly|tech|xyz|ca|cn|fr|au|in|de|jp|ru|br|es|se|ch|nl|int|jobs|name|tel|email|codes|pizza|am|fm|cx|gs|ms|al';

const urlParts = {
  bracketLink: /\[[^()]+\]\(\S+\)/gim,
  protocolMatch: new RegExp(
    `(?:http[s]?:\\/\\/|ftp:\\/\\/|mailto:[-a-z0-9:?.=/_@]+).*(?:${topLevelDomains})${urlAcceptableCharacters}*`,
    'gim'
  ),
  tldMatch: new RegExp(
    `(${urlAcceptableCharacters}+)\\.(?:${topLevelDomains})(?:(?=\\s|[,.;]|$)|\\/${urlAcceptableCharacters}*)`,
    'gim'
  ),
  localhostMatch: new RegExp(
    `(?:localhost:)${urlAcceptableCharacters}*`,
    'gim'
  ),
};

// ! NOTE: If you want to add a tag to this list, you must add its name to the array inside makeCustomMatchObj.ts and to the TagName type in types.d.ts, and if it has a named capture group specifically for its text content, that name must include 'TextContent'

const regexes = {
  // * Style Tags
  rawStyle: new RegExp(
    '(?<rawStyle><style="(?<styleObjectRaw>.+)">(?<styleTextContent>.+)<\\/style>)',
    'gis'
  ),
  code: new RegExp(
    "(?<code><code lang='(?<codelang>[^']+)'>(?<codeTextContent>.+?)(<\\/code>|)<\\/code>)",
    'gis'
  ),
  stars: new RegExp(
    '(?<stars>\\*\\*(?<starsTextContent>[^*]*(?:\\*[^*]+)*)\\*\\*)',
    'gis'
  ),
  bars: new RegExp('(?<bars>__(?<barsTextContent>[^_]*(?:_[^_]+)*)__)', 'gis'),
  pounds: new RegExp(
    '(?<pounds>##(?<poundsTextContent>[^#]*(?:#[^#]+)*)##)',
    'gis'
  ),
  slashes: new RegExp(
    '(?<slashes>//(?<slashesTextContent>((?:(?!//|https:|http:|ftp)|https://|http://|ftp://).)*)//)',
    'gis'
  ),
  quote: new RegExp(
    '(?<quote><"(?<quoteTextContent>.+)"(?<!lang="[a-z]+")>)',
    'gis'
  ),
  summary: new RegExp(
    '(?<summary>>>(?<summarizedText>(?!.*>>).+)<<(\\((?<summaryText>(?!.*>>).+)\\))?)',
    'gis'
  ),

  // * URL Matches
  urlFinder: new RegExp(
    `(?<url>${urlParts.bracketLink.source}|${urlParts.protocolMatch.source}|${urlParts.tldMatch.source}|${urlParts.localhostMatch.source})`,
    'gim'
  ),

  // * Text Replacements
  twitterMention: new RegExp(
    `(?<= )(?<twitterMention>@(?<username>\\w+)(?!\\w*\\.(?:${topLevelDomains})))`,
    'gim' // Match an @ followed by at least one word character, not followed by any top level domains (which would suggest it's an email)
  ),
  email: new RegExp(
    `(?<email>[\\w.!#$%&'*+-/=?^_\`{|}~]+@\\w+\\.(?:${topLevelDomains}))`,
    'gim'
  ),
  reddit: new RegExp('\\/r\\/(\\w+)[/-a-z?=]*', 'gim'),
};

const { urlFinder } = regexes;
export { urlFinder };

const keys = Object.keys(regexes) as (keyof typeof regexes)[];
const superMatcherSource = keys.map((key) => regexes[key].source).join('|');
const superMatcher = new RegExp(superMatcherSource, 'gims');
export { superMatcher };

export default regexes;
