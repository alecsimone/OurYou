import styled from 'styled-components';
import { setAlpha, setLightness } from '@styles/functions/modifyColorFunctions';
import ArrowIcon from '@icons/Arrow';
import FunctionalIcon from '@icons/FunctionalIcon';
// eslint-disable-next-line import/no-cycle
import RichText from '../RichText';
import { CustomMatchObj } from '../types';

const StyledSummary = styled.details`
  border-radius: 3px;
  padding: 0;
  border: 1px solid ${(props) => props.theme.coolGrey};
  &[open] {
    background: ${(props) => setAlpha(props.theme.coolGrey, 0.1)};
    summary {
      border-bottom: 1px solid ${(props) => props.theme.coolGrey};
      svg {
        transform: rotate(0);
      }
    }
    .summarizedText {
      padding: 0 1rem;
    }
  }
  summary {
    cursor: pointer;
    padding: 0 1rem;
    list-style-type: none;
    display: flex;
    align-items: center;
    &::marker {
      display: none;
    }
    &::-webkit-details-marker {
      display: none;
    }
    svg {
      height: 0.8em;
      margin-right: 0.5rem;
      transform: rotate(-90deg);
      rect {
        fill: ${(props) => setLightness(props.theme.white, 60)};
      }
    }
  }
`;

interface SummaryProps {
  match: CustomMatchObj;
}

const Summary = ({ match }: SummaryProps): JSX.Element => (
  <StyledSummary key={match.start}>
    <summary>
      <FunctionalIcon iconName="expand">
        <ArrowIcon />
      </FunctionalIcon>
      {match.extraGroups!.summaryText}
    </summary>
    <div className="summarizedText">
      <RichText text={match.extraGroups!.summarizedText} />
    </div>
  </StyledSummary>
);

export default Summary;
