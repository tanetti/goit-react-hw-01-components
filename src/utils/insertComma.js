export const insertComma = number => {
  if (typeof number !== 'number' || number < 1000) return number;

  let convertedNumber = String(number).split('');

  convertedNumber.splice(-3, 0, ',');

  if (convertedNumber.length > 7) convertedNumber.splice(-7, 0, ',');

  return convertedNumber.join('');
};
