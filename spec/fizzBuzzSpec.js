const fizzBuzz = require('../src/fizzBuzz.js');
const fb = require('../src/fizzBuzz.js');

describe('fizzBuzz', () => {
  it('returns FizzBuzz if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  });
});