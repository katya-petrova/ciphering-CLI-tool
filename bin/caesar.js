
function caesarROT8(str, cipherType) {
  let result = "";
  let shift;
  let encode;
  const splittedType = cipherType[0].split('');

  if (splittedType[0] == "C" || splittedType[0] == "R") {
    shift = splittedType[0] == "C" ? 1 : 8;
    encode = splittedType[1] == '1' ? 1 : 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lower = alphabet.replace(/\s/g, "").toLowerCase().split("");
    let upper = alphabet.replace(/\s/g, "").toUpperCase().split("");
    result += Array.from(str)
      .map((v) => {
        if (
          lower.indexOf(v.toLowerCase()) === -1 ||
          upper.indexOf(v.toUpperCase()) === -1
        ) {
          return v;
        }
        if (encode === 1) {

          const lowerCharCode =
            (lower.indexOf(v.toLowerCase()) + shift) % alphabet.length;
          const lowerCipheredChar = lower[lowerCharCode];

          const upperCharCode =
            (upper.indexOf(v.toUpperCase()) + shift) % alphabet.length;
          const upperCipheredChar = upper[upperCharCode];

          return lower.indexOf(v) !== -1 ? lowerCipheredChar : upperCipheredChar;
        } else if (encode === 0) {
          let lowerCharCode =
            (lower.indexOf(v.toLowerCase()) - shift) % alphabet.length;
          lowerCharCode =
            lowerCharCode < 0
              ? lowerCharCode + alphabet.length
              : lowerCharCode;
          const lowerCipheredChar = lower[lowerCharCode];

          let upperCharCode =
            (upper.indexOf(v.toUpperCase()) - shift) % alphabet.length;
          upperCharCode =
            upperCharCode < 0
              ? upperCharCode + alphabet.length
              : upperCharCode;
          const upperCipheredChar = upper[upperCharCode];

          return lower.indexOf(v) !== -1 ? lowerCipheredChar : upperCipheredChar;
        }
      })
      .join("");
  }

  if (cipherType[0] == "A") {
    let res = "";
    let len = str.length;
    let i = -1;
    let charCode;

    while (++i < len) {
      charCode = str.charCodeAt(i);

      if (charCode >= 97 && charCode <= 122) {
        res += String.fromCharCode(charCode + (122 - charCode - (charCode - 97)));
        continue;
      }

      if (charCode >= 65 && code <= 90) {
        res += String.fromCharCode(charCode + (90 - charCode - (charCode - 65)));
        continue;
      }

      res += str[i];
    }

    result += res;
  }

  cipherType = cipherType.slice(1);
  str = result;
  return cipherType.length === 0 ? result : caesarROT8(result, cipherType);
}

module.exports = caesarROT8;
