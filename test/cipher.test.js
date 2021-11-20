const cipher = require('../bin/caesar')

test('should return ciphered str1', () => {
    expect(cipher('a', ['C1'])).toBe('b');
  });

  test('should return ciphered str2', () => {
    expect(cipher('This is secret. Message about "" symbol!', ['C1', 'C1', 'R0', 'A'])).toEqual(
      'Myxn xn nbdobm. Tbnnfzb ferlm "" nhteru!'
    )
  })

  test('should cipher only latin alphabet symbols', () => {
    expect(cipher('Хелоу еврибади!!!', ['C1', 'C1', 'R0', 'A'])).toEqual(
      'Хелоу еврибади!!!'
    )
  })
