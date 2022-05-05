function isHSL(baseColor: string) {
  const hslCheck = baseColor.substring(0, 3);
  if (hslCheck.toLowerCase() === 'hsl') {
    return true;
  }
  return false;
}

function countCommas(string: string) {
  return (string.match(/,/g) || []).length;
}

function getNthPositionOfSubstring(string: string, subString: string, n: number) {
  return string.split(subString, n).join(subString).length;
}

function replaceNthValue(string: string, replacementValue: string|number, n: number) {
  const commaCount = countCommas(string);
  if (commaCount === 2 && n === 4) {
    const firstParenIndex = string.indexOf('(');
    const startingString = string.substring(
      firstParenIndex,
      string.length - 1,
    );
    return `hsla${startingString}, ${replacementValue})`;
  }

  const startingComma = getNthPositionOfSubstring(string, ',', n - 1);
  const startingString = string.substring(0, startingComma + 1);

  if (commaCount < n) {
    const endingString = n === 4 ? ')' : '%)';
    return `${startingString} ${replacementValue}${endingString}`;
  }

  const endingComma = getNthPositionOfSubstring(string, ',', n);
  const endingString = string.substring(endingComma);

  return `${startingString} ${replacementValue}%${endingString}`;
}

type ModifyColorFunction = (
  baseColor: string,
  level: number
) => string;

const setSaturation: ModifyColorFunction = (baseColor, level) => {
  if (isHSL(baseColor)) {
    return replaceNthValue(baseColor, level, 2);
  }
  return baseColor;
};
export { setSaturation };

const setLightness: ModifyColorFunction = (baseColor, level) => {
  if (isHSL(baseColor)) {
    return replaceNthValue(baseColor, level, 3);
  }
  return baseColor;
};
export { setLightness };

const setAlpha: ModifyColorFunction = (baseColor, level) => {
  if (isHSL(baseColor)) {
    return replaceNthValue(baseColor, level, 4);
  }
  return baseColor;
};
export { setAlpha };
