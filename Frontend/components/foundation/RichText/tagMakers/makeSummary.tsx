import RichText from '../RichText';
import { CustomMatchObj } from '../types';

const makeSummary = (match: CustomMatchObj) => (
  <details>
    <summary>{match.extraGroups!.summaryText}</summary>
    <RichText text={match.extraGroups!.summarizedText} />
  </details>
);

export default makeSummary;
