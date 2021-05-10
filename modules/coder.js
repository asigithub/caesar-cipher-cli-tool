const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * Encrypt/decrypt a data.
 *
 * @param {string} data - a data to encrypt or to decrypt
 * @param {number} shift - shift.
 * @param {string} mode - encrypt or to decrypt mode
 */
const coder = (data, shift, mode = 'encode') => {
  if (mode !== 'encode') {
    shift *= -1;
  } else {
    shift *= 1;
  }

  return data.split('').map(character => {
    const lowerCaseCharacter = character.toLowerCase();

    const index = alphabet.indexOf(lowerCaseCharacter);
    if (index >= 0) {
      const isLowerCase = character === lowerCaseCharacter;
      let shiftedIndex = (index + shift) % alphabet.length;
      if (shiftedIndex < 0) {
        shiftedIndex += alphabet.length;
      }
      let outCharacter = alphabet[shiftedIndex];
      return (!isLowerCase) ? outCharacter.toUpperCase() : outCharacter;
    } else {
      return character;
    }
  }).join('');
};

export default coder;