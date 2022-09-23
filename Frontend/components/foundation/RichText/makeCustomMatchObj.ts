import { CustomMatchObj, TagName } from './types';

const makeCustomMatchObj = (match: RegExpExecArray): CustomMatchObj => {
  // We need to figure out what kind of match this is. We're going to do that by checking to see which properties of the "groups" object in the match are not null
  const groupNames = Object.keys(match.groups!);
  const capturedGroups = groupNames.filter((groupName) => {
    if (match.groups == null) return false;
    return match.groups[groupName] != null;
  });

  // Then we'll check that against this list of tags to see which tag we're on. There will also be a "textContent" group for each tag, and possibly some other helpful named groups, so we need to clarify.
  const [thisMatchTag] = capturedGroups.filter((group) =>
    [
      'bars',
      'code',
      'pounds',
      'quote',
      'slashes',
      'stars',
      'rawStyle',
      'summarizedText',
      'summary',
      'url',
      'twitterMention',
      'email',
    ].includes(group)
  );

  // We can then get the textContent by looking for the non-null group with 'TextContent' in its name
  const [textContentGroupName] = capturedGroups.filter((group) =>
    group.includes('TextContent')
  );

  // And we'll pull out any other non-null named capture groups to stick in the extraGroups property
  const extraGroupNames = capturedGroups.filter(
    (groupName) =>
      groupName !== thisMatchTag && groupName !== textContentGroupName
  );
  const extraGroups: { [key: string]: any } = {};
  extraGroupNames.forEach((name) => {
    if (match.groups && match.groups[name] != null) {
      extraGroups[name] = match.groups[name];
    }
  });

  // Finally, we make a CustomMatchObj that contains the data about the match that we'll need to turn it into a tag.
  const matchObj: CustomMatchObj = {
    start: match.index,
    end: match.index + match.groups![thisMatchTag].length,
    content: match.groups![textContentGroupName],
    fullTag: match.groups![thisMatchTag],
    tag: thisMatchTag as TagName,
    extraGroups,
  };

  return matchObj;
};

export default makeCustomMatchObj;
