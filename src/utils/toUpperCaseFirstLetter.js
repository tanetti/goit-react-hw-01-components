export const toUpperCaseFirstLetter = string => {
  if (typeof string !== 'string') return string;

  let convertedString = string.split('');
  convertedString[0] = convertedString[0].toUpperCase();

  return convertedString.join('');
};
