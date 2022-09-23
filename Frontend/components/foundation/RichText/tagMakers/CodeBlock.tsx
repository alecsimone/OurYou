import { useEffect } from 'react';
import Prism from 'prismjs';
import StyledCodeBlock from '@styles/extendableElements/StyledCodeBlock';
import { CustomMatchObj } from '../types';

const jstsExtension = {
  punctuation: /[,.;]+/,
  keyword: /if|else|return|async|await|import|export|default/,
  null: /null/,
  squareBrackets: /[[\]]+/,
  curlyBraces: /[{}]/,
  parens: /[()]/,
  declarations: /const|let|var|alert|confirm|interface|type|number|string/,
};
Prism.languages['custom-js'] = Prism.languages.extend('js', jstsExtension);
// Prism.languages['custom-ts'] = Prism.languages.extend('ts', jstsExtension);

Prism.languages['custom-css'] = Prism.languages.extend('css', {
  number: { pattern: /[0-9]+[.0-9]*/, greedy: true },
  interpolations: {
    pattern: /(\$){.+?}/,
    greedy: true,
    lookbehind: true,
    inside: {
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true,
      },
      curlyBraces: /[{}]/,
      parens: /[()]/,
      number: { pattern: /[0-9]+[.0-9]*/, greedy: true },
      props: /props/,
    },
  },
  unit: {
    pattern: /([0-9]+)(px|rem|em|%|deg)/,
    lookbehind: true,
    greedy: true,
  },
  element: {
    pattern:
      /(div|article|input|textarea|a(?=[ .]+)|p(?=[ .]+)|header|footer|h1|h2|h3|h4|h5|h6|main|nav|section|blockquote|li(?=[ .]+)|ul(?=[ .]+)|ol(?=[ .]+)|span|strong|img|video|svg|button|fieldset|form(?=[ .]+)|label|optgroup|option|select)/m,
  },
  selector: /[.:]{1}[a-z]{1}[a-zA-Z0-9.\-_]* /m,
  calc: /calc/,
  parens: /[()]/,
  punctuation: /[;:,]/,
  function: {
    pattern: /(^|[^-a-z0-9])(?!calc)[-a-z0-9]+(?=\()/i,
    lookbehind: true,
    inside: {
      parens: /[()]/,
    },
  },
  stringValue: /[ -]*[a-z;-]+/,
  operator: /[+\-*/$&]/,
});

interface CodeBlockProps {
  match: CustomMatchObj;
}

const CodeBlock = ({ match }: CodeBlockProps): JSX.Element => {
  let inputLang = match?.extraGroups?.codelang;
  if (inputLang === 'js') {
    inputLang = 'custom-js';
    // Note that we removed the custom-ts one because it was throwing errors in tests that I couldn't figure out
  } else if (inputLang === 'css') {
    inputLang = 'custom-css';
  }

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <StyledCodeBlock key={match.start}>
      <code className={`language-${inputLang}`}>{match.content.trim()}</code>
    </StyledCodeBlock>
  );
};

export default CodeBlock;
