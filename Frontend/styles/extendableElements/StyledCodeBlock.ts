import styled from 'styled-components';

const StyledCodeBlock = styled.pre`
  border-radius: 3px;
  tab-size: 4;
  text-align: left;
  line-height: 1.5;
  word-spacing: normal;
  white-space: pre;
  word-break: normal;
  word-wrap: normal;
  color: hsla(210, 3%, 90%, 0.95);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  hyphens: none;

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation,
  .token.builtin {
    /* color: #E6DB74; */
  }

  .token.important,
  .token.atrule,
  .token.keyword,
  .token.element,
  .token.unit {
    color: #f92672;
  }

  .token.boolean,
  .token.number,
  .token.null {
    color: #ae81ff;
  }

  .token.selector,
  .token.class-name,
  .token.constant,
  .token.function {
    color: #a6e22e;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #f92672;
  }

  .token.squareBrackets,
  .token.property,
  .token.stringValue,
  .token.color,
  .token.calc,
  .token.declarations {
    color: #66d9ef;
  }

  .token.declarations {
    font-style: italic;
  }

  .token.parens {
    color: #e6b422;
  }

  .token.curlyBraces {
    color: #d1a05a;
  }

  .token.props {
    color: #fd971f;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.symbol {
    color: #f8c555;
  }

  .token.string {
    color: #e6db74;
  }

  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;

export default StyledCodeBlock;
