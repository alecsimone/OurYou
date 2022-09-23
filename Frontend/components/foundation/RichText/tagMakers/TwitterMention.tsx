import { CustomMatchObj } from '../types';

interface TwitterMentionProps {
  match: CustomMatchObj;
}

const TwitterMention = ({ match }: TwitterMentionProps): JSX.Element => {
  if (match.extraGroups == null || match.extraGroups.username == null) {
    if (match.fullTag == null) {
      return <span>[Mention Error]</span>;
    }
    return <span>match.fullTag</span>;
  }
  return (
    <a
      href={`https://twitter.com/${match.extraGroups.username}`}
      target="_blank"
      rel="noreferrer"
      key={match.start}
    >
      @{match.extraGroups.username}
    </a>
  );
};

export default TwitterMention;
