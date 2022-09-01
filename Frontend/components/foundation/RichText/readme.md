# [Rich Text](RichText.tsx)

**Handles displaying marked up text, using our custom markup syntax, as fully-featured rich text.**

## [Regexes](regexes.ts)

We use the following regex search strings to check for any instances of our custom syntax:

### Style Tags

#### Raw Style Tag

```js
(?<style><style="(?<styleObjectRaw>.+)">(?<styleTextContent>.+)<\/style>)
```

The style tags are meant to function like regular HTML tags, where the author can provide an object of css properties that will be applied to the text block as an inline style.

#### Code Block

```js
(?<code><code lang='(?<codelang>[^']+)'>(?<codeTextContent>.+?)(<\/code>|)<\/code>)
```

This tag is also designed to function like an html tag, where the author can provide a 'lang' property to specify which language they would like to enable syntax highlighting for.

#### Stars (Bold)

```js
(?<stars>\*\*(?<starsTextContent>[^*]_(?:\*[^_]+)\*)\*\*)
```

Surrounding text with two stars will render it in bold.

#### Bars (Underline)

```js
(?<bars>**(?<barsTextContent>[^_]_(?:\_[^_]+)\_)**)
```

Surrounding text with two underscores will render it with an underline

#### Pounds (Header)

```js
(?<pounds>##(?<poundsTextContent>[^#]_(?:#[^#]+)_)##)
```

Surrounding text with two pound signs will render it as a header.

#### Slashes (Italics)

```js
(?<slashes>\/\/(?<slashesTextContent>((?:(?!\/\/|https:|http:|ftp)|https:\/\/|http:\/\/|ftp:\/\/).)\*)\/\/)
```

Surrounding text with two forward slashes will render it in italics. We add a special exception for common protocols so that they don't trigger this tag.

#### Block Quote

```js
(?<quote><(?<quoteTextContent>".+")(?<!lang="[a-z]+")>)
```

Surrounding text with <" and "> will render it as a block quote

#### Summary

```js
(?<summary>>>(?<summarizedText>(?!._>>).+)<<(\((?<summaryText>(?!._>>).+)\))?)
```

This one has two parts. First, we have the text to be summarized, which is surrounded by double angle brackets, ie: >>Text to be summarized<<. Then we have the summary of that text, which is surrounded by parentheses. So the whole format is: `>>Text to be summarized<<(Summary text)`

### URL Matchers

#### Bracket Links

```js
\[[^()]+\]\(\S+\)
```

Matches a markdown-style bracket link, like so `[text to display](url)`

#### Protocol Match

```js
new RegExp(
  `(?:http[s]?:\\/\\/|ftp:\\/\\/|mailto:[-a-z0-9:?.=/_@]+)${urlAcceptableCharacters}*`,
  'gim'
);
```

Matches links by checking for anything within a set of predefined acceptable characters that follows any of the standard protocols

#### Top Level Domain Match

```js
new RegExp(
  `(${urlAcceptableCharacters}+)\\.(?:${topLevelDomains})(?:(?=\\s|[,.;]|$)|\\/${urlAcceptableCharacters}*)`,
  'gim'
);
```

Matches links by checking for anything within a set of predefined acceptable characters that precedes and/or follows any of the standard top level domains

#### Localhost Match

```js
new RegExp(`(?:localhost:)${urlAcceptableCharacters}*`, 'gim');
```

Matches links to localhost

### Text Replacements

#### Twitter Mentions

```js
new RegExp(
  `(?<= )@(?:(?<username>\\w+)(?!\\w*\\.(?:${topLevelDomains})))`,
  'gim'
);
```

Matches twitter mentions by finding text after an @ symbol, making sure to avoid anything with a top-level domain in it, as that is probably an email

#### Emails

```js
new RegExp(`[\\w.!#$%&'*+-/=?^_\`{|}~]+@\\w+\\.(?:${topLevelDomains})`, 'gim');
```

#### Subreddits

```js
\/r\/(\w+)[/-a-z?=]
```

Matches anything of the format `/r/subredditname`

## Implementation

The process of parsing raw text into Rich Text is as follows:
