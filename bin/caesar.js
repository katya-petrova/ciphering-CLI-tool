const {
  LETTERS_COUNT,
  UPPERCASE_CHARCODE_START,
  UPPERCASE_CHARCODE_END,
  LOWERCASE_CHARCODE_START,
  LOWERCASE_CHARCODE_END,
} = require("./constants");

function caesarROT8(str, cipherType, action) {
  let result = "";

  const shift = cipherType === "C" ? 1 : 8;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (currentChar.match(/[a-z]/i)) {
      let charCodeNumber = str.charCodeAt(i);

      if (
        charCodeNumber >= UPPERCASE_CHARCODE_START &&
        charCodeNumber <= UPPERCASE_CHARCODE_END
      ) {
        currentChar = String.fromCharCode(
          ((charCodeNumber - UPPERCASE_CHARCODE_START + shift) %
            LETTERS_COUNT) +
            UPPERCASE_CHARCODE_START
        );
      } else if (
        charCodeNumber >= LOWERCASE_CHARCODE_START &&
        charCodeNumber <= LOWERCASE_CHARCODE_END
      ) {
        currentChar = String.fromCharCode(
          ((charCodeNumber - LOWERCASE_CHARCODE_START + shift) %
            LETTERS_COUNT) +
            LOWERCASE_CHARCODE_START
        );
      }
    }

    result += currentChar;
  }

  return result;
}

console.log(caesarROT8("ZbC !!!", "C"));

module.exports = { caesarROT8 };
