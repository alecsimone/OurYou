import { CustomMatchObj } from '../types';

const makeUrl = (match: CustomMatchObj) => {
  let fullUrl: string;
  if (!match.fullTag!.includes('://') && !match.fullTag!.includes('mailto')) {
    fullUrl = `https://${match.fullTag}`;
  } else {
    fullUrl = match.fullTag!;
  }
  return (
    <a
      href={fullUrl}
      target="_blank"
      rel="noreferrer"
    >
      {match.fullTag}
    </a>
  );
};

export default makeUrl;
