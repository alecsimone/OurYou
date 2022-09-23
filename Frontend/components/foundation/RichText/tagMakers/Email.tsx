import { CustomMatchObj } from '../types';

interface EmailProps {
  match: CustomMatchObj;
}

const Email = ({ match }: EmailProps): JSX.Element => (
  <a
    href={`mailto:${match.fullTag}`}
    target="_blank"
    rel="noreferrer"
    key={match.start}
  >
    {match.fullTag}
  </a>
);

export default Email;
