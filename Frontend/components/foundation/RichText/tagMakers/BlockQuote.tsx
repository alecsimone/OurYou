/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import {
  setAlpha,
  setSaturation,
} from '@styles/functions/modifyColorFunctions';
import RichText from '../RichText';
import { CustomMatchObj } from '../types';

const StyledBlockQuote = styled.blockquote`
  margin: 2rem 0;
  display: block;
  font-style: normal;
  background: ${(props) => setAlpha(setSaturation(props.theme.blue, 25), 0.1)};
  padding: 2rem;
  border-radius: 3px;
  border: 2px solid ${(props) => setAlpha(props.theme.coolGrey, 0.2)};
  border-left: 0.4rem solid ${(props) => setSaturation(props.theme.blue, 60)};
`;

interface BlockQuoteProps {
  match: CustomMatchObj;
}

const BlockQuote = ({ match }: BlockQuoteProps): JSX.Element => (
  <StyledBlockQuote key={match.start}>
    <RichText text={match.content} />
  </StyledBlockQuote>
);

export default BlockQuote;
