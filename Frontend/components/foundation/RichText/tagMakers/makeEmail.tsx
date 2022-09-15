import { CustomMatchObj } from '../types';

const makeEmail = (match: CustomMatchObj) => (
  <a
    href={`mailto:${match.fullTag}`}
    target="_blank"
    rel="noreferrer"
  >
    {match.fullTag}
  </a>
);

export default makeEmail;
