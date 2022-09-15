import { CustomMatchObj } from '../types';

const makeTwitterMention = (match: CustomMatchObj) => {
  if (match.extraGroups == null || match.extraGroups.username == null) {
    if (match.fullTag == null) {
      return '[Mention Error]';
    }
    return match.fullTag;
  }
  return (
    <a
      href={`https://twitter.com/${match.extraGroups.username}`}
      target="_blank"
      rel="noreferrer"
    >
      @{match.extraGroups.username}
    </a>
  );
};

export default makeTwitterMention;
