const stringToObject = (string: string, splitSearch: string) => {
  const splitRegex = new RegExp(`[${splitSearch}]`, 'gi');
  const splitString = string.split(splitRegex);
  const createdObject: { [key: string]: string } = {};
  splitString.forEach((stringPiece, index) => {
    if (index % 2 === 1 || splitString[index + 1] == null) {
      // Actually we only want to do this once for each pair, and we don't want to do it if there isn't a matching tag
      return;
    }
    // We're making an object with the first items in each pair as its properties and the second as their values
    createdObject[splitString[index].trim()] = splitString[index + 1].trim();
  });
  return createdObject;
};
export default stringToObject;
