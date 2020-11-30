function fizzBuzz(n) {
  if (n % 5 === 0 && n % 3 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz'
  }
}

module.exports = fizzBuzz;