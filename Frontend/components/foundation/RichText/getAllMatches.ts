const getAllMatches = (text: string, regex: RegExp) => {
  // We're going to do a custom matchAll that allows us to manually increment the lastIndex of the regex so that we can catch overlapping and nested matches

  // First we need an array to hold all the matches we find
  const matches = [];

  // Then we need to duplicate the regex so we can modify its lastIndex property
  const modifiableRegex = new RegExp(regex);

  // Now we'll define a match variable into which we can put each match that we find
  let match;

  // We need a do while loop so that we can avoid assigning the match inside a while statement, see here: https://stackoverflow.com/questions/31776624/better-solution-to-regex-exec-assignment-in-while-loop
  do {
    match = modifiableRegex.exec(text);
    if (match) {
      // If we find a match, we push it into our matches array
      matches.push(match);
      // And then adjust our modifiableRegex's lastIndex to the character after our current match. However, if the match is a link or an email, we need to move to the end of it or else it will just match again starting on the next character
      if (match?.groups?.email != null || match?.groups?.url != null) {
        modifiableRegex.lastIndex = match.index + match.length;
      } else {
        modifiableRegex.lastIndex = match.index + 1;
      }
    }
  } while (match);

  return matches;
};

export default getAllMatches;
