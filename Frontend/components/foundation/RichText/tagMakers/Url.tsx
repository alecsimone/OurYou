import { CustomMatchObj } from '../types';

interface UrlProps {
  match: CustomMatchObj;
}

const Url = ({ match }: UrlProps): JSX.Element => {
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
      key={match.start}
    >
      {match.fullTag}
    </a>
  );
};

export default Url;
