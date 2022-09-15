import { CustomMatchObj } from '../types';

const makeCodeBlock = (match: CustomMatchObj) => (
  <pre>
    <code className={`language-${match?.extraGroups?.codeLang}`}>
      {match.content.trim()}
    </code>
  </pre>
);

export default makeCodeBlock;
