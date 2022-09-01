const urlAcceptableCharacters = '[-a-z0-9%&?=.,;|$()@_~:<>!*/^+#@]';
const topLevelDomains =
  'com|org|net|tv|gg|us|uk|co\\.uk|edu|gov|mil|biz|info|mobi|ly|tech|xyz|ca|cn|fr|au|in|de|jp|ru|br|es|se|ch|nl|int|jobs|name|tel|email|codes|pizza|am|fm|cx|gs|ms|al';

const urlParts = {
  bracketLink: /\[[^()]+\]\(\S+\)/gim,
  protocolMatch: new RegExp(
    `(?:http[s]?:\\/\\/|ftp:\\/\\/|mailto:[-a-z0-9:?.=/_@]+)${urlAcceptableCharacters}*`,
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

const regexes = {
  // * Style Tags
  rawStyle:
    /(?<style><style="(?<styleObjectRaw>.+)">(?<styleTextContent>.+)<\/style>)/gis,
  code: /(?<code><code lang='(?<codelang>[^']+)'>(?<codeTextContent>.+?)(<\/code>|)<\/code>)/gis,
  stars: /(?<stars>\*\*(?<starsTextContent>[^*]*(?:\*[^*]+)*)\*\*)/gis,
  bars: /(?<bars>__(?<barsTextContent>[^_]*(?:_[^_]+)*)__)/gis,
  pounds: /(?<pounds>##(?<poundsTextContent>[^#]*(?:#[^#]+)*)##)/gis,
  slashes:
    /(?<slashes>\/\/(?<slashesTextContent>((?:(?!\/\/|https:|http:|ftp)|https:\/\/|http:\/\/|ftp:\/\/).)*)\/\/)/gis,
  quote: /(?<quote><(?<quoteTextContent>".+")(?<!lang="[a-z]+")>)/gis,
  summary:
    /(?<summary>>>(?<summarizedText>(?!.*>>).+)<<(\((?<summaryText>(?!.*>>).+)\))?)/gis,

  // * URL Matches
  urlFinder: new RegExp(
    `${urlParts.bracketLink.source}|${urlParts.protocolMatch.source}|${urlParts.tldMatch.source}|${urlParts.localhostMatch.source}`,
    'gim'
  ),

  // * Text Replacements
  twitterMention: new RegExp(
    `(?<= )@(?:(?<username>\\w+)(?!\\w*\\.(?:${topLevelDomains})))`,
    'gim' // Match an @ followed by at least one word character, not followed by any top level domains (which would suggest it's an email)
  ),
  email: new RegExp(
    `[\\w.!#$%&'*+-/=?^_\`{|}~]+@\\w+\\.(?:${topLevelDomains})`,
    'gim'
  ),
  reddit: /\/r\/(\w+)[/-a-z?=]*/gim,
};

const { urlFinder } = regexes;
export { urlFinder };

export default regexes;
