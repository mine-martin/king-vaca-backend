export const formatEmail = (email: string): string => {
  // remove trailing white spaces in email
  if (!email) return email;
  const trimmed = email.trim();

  if (!trimmed) return trimmed;
  // remove any other spaces
  const removedSpaces = trimmed.replace(/\s/g, '');

  if (!removedSpaces) return removedSpaces;

  // convert to lowercase
  return removedSpaces.toLowerCase();
};

export const removePlusInPhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) return '';

  // remove all non-digit characters
  const phoneWithoutNonDigits = phoneNumber.replace(/\D/g, '');
  return phoneWithoutNonDigits.replace(/^\+/, '');
};

export const appendPlusToPhoneNumber = (phoneNumber: string): string => {
  const phone = phoneNumber;

  if (!phoneNumber) return '';

  // remove all non-digit characters
  const phoneWithoutNonDigits = phone.replace(/\D/g, '');

  // check for leading plus
  if (phoneWithoutNonDigits[0] === '+') return phoneWithoutNonDigits;

  return `+${phoneWithoutNonDigits}`;
};

export const capitalize = (str: string): string => {
  if (!str) return str;
  return str
    .trim()
    .toLowerCase()
    .replace('_', ' ')
    .replace(/^\w/, (c) => c.toUpperCase());
};

export const getFullName = (firstName: string, lastName: string): string => {
  if (!firstName && !lastName) return '';

  const capitalizedFirstName = capitalize(firstName);
  const capitalizedLastName = capitalize(lastName);
  const fullName = `${capitalizedFirstName} ${capitalizedLastName}`;

  return fullName.trim();
};
