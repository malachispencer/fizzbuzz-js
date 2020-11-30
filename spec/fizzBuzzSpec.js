const fizzBuzz = require('../src/fizzBuzz.js');

describe('fizzBuzz', () => {
  it('returns FizzBuzz if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('returns Fizz if number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz if number is divisible by 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz')
  });

  it('returns the number if not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1)
  });
});