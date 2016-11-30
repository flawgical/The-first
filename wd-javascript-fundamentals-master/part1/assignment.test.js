window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('sum', function() {
    test('adds two numbers', function() {
      assert.strictEqual(sum(5, 2), 7);
      assert.strictEqual(sum(-4, 8), 4);
      assert.strictEqual(sum(-6, -3), -9);
    });
  });

  suite('product', function() {
    test('multiplies two numbers', function() {
      assert.strictEqual(product(5, 2), 10);
      assert.strictEqual(product(-4, 8), -32);
      assert.strictEqual(product(-6, -3), 18);
    });
  });

  suite('sumAndProduct', function() {
    test('adds the first two numbers and multiplies that sum by the third', function() {
      assert.strictEqual(sumAndProduct(4, 4, 4), 32);
      assert.strictEqual(sumAndProduct(2, -3, 7), -7);
      assert.strictEqual(sumAndProduct(-9, 8, -5), 5);
    });
  });

  suite('roundUp', function() {
    test('rounds the number up to the nearest integer', function() {
      assert.strictEqual(roundUp(2.1), 3);
      assert.strictEqual(roundUp(4.7), 5);
      assert.strictEqual(roundUp(6.0), 6);
    });
  });

  suite('toFahrenheit', function() {
    test('converts the Celsius to Fahrenheit rounded to the nearest integer', function() {
      assert.strictEqual(toFahrenheit(30), 86);
      assert.strictEqual(toFahrenheit(31), 88);
      assert.strictEqual(toFahrenheit(-5), 23);
    });
  });

  suite('areaOfCircle', function() {
    test('calculates the area of a ciricle', function() {
      assert.approximately(areaOfCircle(10), 314.1592653589793, 0.01);
      assert.approximately(areaOfCircle(20), 1256.6370614359173, 0.01);
    });
  });

  suite('areaOfRing', function() {
    test('calculates the the area of a circulur ring', function() {
      assert.approximately(areaOfRing(10, 5), 235.61944901923448, 0.01);
      assert.approximately(areaOfRing(20, 17), 348.716784548467, 0.01);
    });
  });

  suite('greet', function() {
    test('greets a person by their full name', function() {
      assert.strictEqual(greet('Bart', 'Simpson'), 'Hello, Bart Simpson!');
      assert.strictEqual(greet('Mona', 'Lisa'), 'Hello, Mona Lisa!');
    });
  });

  suite('toSentence', function() {
    test('converts the words to a sentence with an oxford comma', function() {
      assert.strictEqual(toSentence('Red', 'Green', 'Blue', true), 'Red, Green, and Blue.');
      assert.strictEqual(toSentence('Apples', 'Oranges', 'Bananas', true), 'Apples, Oranges, and Bananas.');
    });

    test('converts the words to a sentence with no oxford comma', function() {
      assert.strictEqual(toSentence('Red', 'Green', 'Blue', false), 'Red, Green and Blue.');
      assert.strictEqual(toSentence('Apples', 'Oranges', 'Bananas', false), 'Apples, Oranges and Bananas.');
    });
  });

  suite('toRoman', function() {
    test('returns null if the number is less than 1', function() {
      assert.strictEqual(toRoman(0), null);
      assert.strictEqual(toRoman(-1), null);
    });

    test('returns null if the number is greater than 10', function() {
      assert.strictEqual(toRoman(11), null);
      assert.strictEqual(toRoman(12), null);
    });

    test('conversts the number to a roman numeral string', function() {
      assert.strictEqual(toRoman(1), 'I');
      assert.strictEqual(toRoman(2), 'II');
      assert.strictEqual(toRoman(3), 'III');
      assert.strictEqual(toRoman(4), 'IV');
      assert.strictEqual(toRoman(5), 'V');
      assert.strictEqual(toRoman(6), 'VI');
      assert.strictEqual(toRoman(7), 'VII');
      assert.strictEqual(toRoman(8), 'VIII');
      assert.strictEqual(toRoman(9), 'IX');
      assert.strictEqual(toRoman(10), 'X');
    });
  });

  suite('toDolla', function() {
    test('converts the number to dollar currency string', function() {
      assert.strictEqual(toDolla(10), '$10.00');
      assert.strictEqual(toDolla(45.2), '$45.20');
    });
  });

  suite('percentage', function() {
    test('calculates the percentage of the first number divided by the second', function() {
      assert.strictEqual(percentage(1, 5), '20.0%');
      assert.strictEqual(percentage(1, 3), '33.3%');
    });
  });

  suite('isStrictlyEqual', function() {
    test('returns true if the values and types are equal', function() {
      assert.strictEqual(isStrictlyEqual(-1, -1), true);
      assert.strictEqual(isStrictlyEqual('foo', 'foo'), true);
      assert.strictEqual(isStrictlyEqual(null, null), true);
      assert.strictEqual(isStrictlyEqual(undefined, undefined), true);
      assert.strictEqual(isStrictlyEqual(true, true), true);
      assert.strictEqual(isStrictlyEqual(false, false), true);
    });

    test('returns false if the values are equal but types are not', function() {
      assert.strictEqual(isStrictlyEqual(-1, '-1'), false);
      assert.strictEqual(isStrictlyEqual(true, 'true'), false);
      assert.strictEqual(isStrictlyEqual(undefined, 'undefined'), false);
    });

    test('returns false if the values are not equal', function() {
      assert.strictEqual(isStrictlyEqual(1, 2), false);
      assert.strictEqual(isStrictlyEqual(true, false), false);
    });
  });

  suite('isLooselyEqual', function() {
    test('returns true if the values are equal even if the types are not', function() {
      assert.strictEqual(isLooselyEqual(-1, '-1'), true);
      assert.strictEqual(isLooselyEqual(false, 0), true);
    });

    test('returns false if the values are not equal', function() {
      assert.strictEqual(isLooselyEqual(1, '2'), false);
      assert.strictEqual(isLooselyEqual('true', false), false);
    });
  });

  suite('remainder', function() {
    test('calculates the remainder of the first number divided by the second', function() {
      assert.strictEqual(remainder(100, 25), 0);
      assert.strictEqual(remainder(100, 30), 10);
    });
  });

  suite('isEven', function() {
    test('returns true if the number is even', function() {
      assert.strictEqual(isEven(10), true);
      assert.strictEqual(isEven(14), true);
    });

    test('returns false if the number is not even', function() {
      assert.strictEqual(isEven(11), false);
      assert.strictEqual(isEven(15), false);
    });
  });

  suite('isOdd', function() {
    test('returns true if the number is odd', function() {
      assert.strictEqual(isOdd(11), true);
      assert.strictEqual(isOdd(15), true);
    });

    test('returns false if the number is not odd', function() {
      assert.strictEqual(isOdd(10), false);
      assert.strictEqual(isOdd(14), false);
    });
  });

  suite('isVowel', function() {
    test('returns true if the letter is a vowel', function() {
      assert.strictEqual(isVowel('a'), true);
      assert.strictEqual(isVowel('e'), true);
      assert.strictEqual(isVowel('i'), true);
      assert.strictEqual(isVowel('o'), true);
      assert.strictEqual(isVowel('u'), true);
    });

    test('returns false if the letter is not a vowel', function() {
      assert.strictEqual(isVowel('z'), false);
      assert.strictEqual(isVowel('b'), false);
      assert.strictEqual(isVowel('d'), false);
      assert.strictEqual(isVowel('y'), false);
    });
  });

  suite('largestOfThree', function() {
    test('returns the largest argument by value', function() {
      assert.strictEqual(largestOfThree(9, 6, 3), 9);
      assert.strictEqual(largestOfThree(0, 7, 4), 7);
      assert.strictEqual(largestOfThree(1, 2, 5), 5);
    });
  });

  suite('longestOfThree', function() {
    test('returns the longest argument by length', function() {
      assert.strictEqual(longestOfThree('eight', 'two', 'five'), 'eight');
      assert.strictEqual(longestOfThree('zero', 'seven', 'four'), 'seven');
      assert.strictEqual(longestOfThree('nine', 'six', 'three'), 'three');
    });
  });

  suite('iceCreamPosition', function() {
    test('returns "not at all" if the ice cream flavor is cardamom', function() {
      assert.strictEqual(iceCreamPosition('warm', 'cardamom'), 'not at all');
      assert.strictEqual(iceCreamPosition('cold', 'cardamom'), 'not at all');
    });

    test('returns "on the side" if the pie temperature is warm', function() {
      assert.strictEqual(iceCreamPosition('warm', 'vanilla'), 'on the side');
      assert.strictEqual(iceCreamPosition('warm', 'chocolate'), 'on the side');
    });

    test('returns "on top" if the pie temperature is cold', function() {
      assert.strictEqual(iceCreamPosition('cold', 'vanilla'), 'on top');
      assert.strictEqual(iceCreamPosition('cold', 'chocolate'), 'on top');
    });

    test('returns "up to you" if the pie temperature is neither warm or cold', function() {
      assert.strictEqual(iceCreamPosition('luke warm', 'vanilla'), 'up to you');
      assert.strictEqual(iceCreamPosition('ice cold', 'chocolate'), 'up to you');
    });
  });

  suite('isLeapYear', function() {
    test('returns true if the number is a leap year, otherwise it does not', function() {
      assert.strictEqual(isLeapYear(1904), true);
      assert.strictEqual(isLeapYear(1912), true);
      assert.strictEqual(isLeapYear(1928), true);
      assert.strictEqual(isLeapYear(1936), true);
      assert.strictEqual(isLeapYear(1940), true);
      assert.strictEqual(isLeapYear(1956), true);
      assert.strictEqual(isLeapYear(1964), true);
      assert.strictEqual(isLeapYear(1972), true);
      assert.strictEqual(isLeapYear(1980), true);
      assert.strictEqual(isLeapYear(1996), true);
      assert.strictEqual(isLeapYear(2000), true);
    });

    test('returns false if the number is not a leap year', function() {
      assert.strictEqual(isLeapYear(1900), false);
      assert.strictEqual(isLeapYear(1901), false);
      assert.strictEqual(isLeapYear(2001), false);
    });
  });

  suite('shout', function() {
    test('converts the argument to uppercase letter', function() {
      assert.strictEqual(shout('whoo hoo'), 'WHOO HOO');
      assert.strictEqual(shout('sOmeTHing'), 'SOMETHING');
    });
  });

  suite('whisper', function() {
    test("converts the arguemnt to lowercase letters prefixed by 'shhh...'", function() {
      assert.strictEqual(whisper('bAnanA peEl'), 'shhh... banana peel');
      assert.strictEqual(whisper('Tracy Morgan'), 'shhh... tracy morgan');
    });
  });

  suite('stopAt', function() {
    test('returns the first argument up to the last argument', function() {
      assert.strictEqual(stopAt('check this out now', 'out'), 'check this');
      assert.strictEqual(stopAt('turn on the TV', 'the'), 'turn on');
    });
  });

  suite('capitalize', function() {
    test('returns the message with the first letter capitalized', function() {
      assert.strictEqual(capitalize('secret bitcoin mine'), 'Secret bitcoin mine');
      assert.strictEqual(capitalize('british football'), 'British football');
    });
  });

  suite('leftPad5', function() {
    test('returns the argument with padded by spaces if its length is less than 5', function() {
      assert.strictEqual(leftPad5('a'), '    a');
      assert.strictEqual(leftPad5('go'), '   go');
      assert.strictEqual(leftPad5('dog'), '  dog');
      assert.strictEqual(leftPad5('tree'), ' tree');
    });

    test('returns the argument if its length is 5 or more characters', function() {
      assert.strictEqual(leftPad5('socks'), 'socks');
      assert.strictEqual(leftPad5('drawer'), 'drawer');
    });
  });

  suite('superPicky', function() {
    test("returns 'Thanks! Got it.' if given a string", function() {
      assert.strictEqual(superPicky('hello'), 'Thanks! Got it.');
      assert.strictEqual(superPicky('there'), 'Thanks! Got it.');
    });

    test('returns an error message if given anything other than a string', function() {
      assert.strictEqual(superPicky(1), 'I wanted a string, but all I got was a stinking number');
      assert.strictEqual(superPicky(Math.random()), 'I wanted a string, but all I got was a stinking number');
      assert.strictEqual(superPicky(true), 'I wanted a string, but all I got was a stinking boolean');
      assert.strictEqual(superPicky(false), 'I wanted a string, but all I got was a stinking boolean');
      assert.strictEqual(superPicky(function() {}), 'I wanted a string, but all I got was a stinking function');
      assert.strictEqual(superPicky({}), 'I wanted a string, but all I got was a stinking object');
      assert.strictEqual(superPicky([]), 'I wanted a string, but all I got was a stinking object');
    });
  });

  suite('calculateTaxRate', function() {
    test('returns a warning if the status is incorrect', function() {
      assert.strictEqual(calculateTaxRate(100, 'separate'), 'Better call an accountant');
      assert.strictEqual(calculateTaxRate(100, 'head of household'), 'Better call an accountant');
    });

    test('returns a warning if the amount is over 74,900', function() {
      assert.strictEqual(calculateTaxRate(74901, 'single'), 'Better call an accountant');
      assert.strictEqual(calculateTaxRate(100000, 'joint'), 'Better call an accountant');
    });

    test('returns the correct tax rate for a single filer', function() {
      assert.strictEqual(calculateTaxRate(1, 'single'), '10%');
      assert.strictEqual(calculateTaxRate(100, 'single'), '10%');
      assert.strictEqual(calculateTaxRate(9225, 'single'), '10%');
      assert.strictEqual(calculateTaxRate(9226, 'single'), '15%');
      assert.strictEqual(calculateTaxRate(15000, 'single'), '15%');
      assert.strictEqual(calculateTaxRate(37450, 'single'), '15%');
    });

    test('returns the correct tax rate for a joint filer', function() {
      assert.strictEqual(calculateTaxRate(1, 'joint'), '10%');
      assert.strictEqual(calculateTaxRate(100, 'joint'), '10%');
      assert.strictEqual(calculateTaxRate(18450, 'joint'), '10%');
      assert.strictEqual(calculateTaxRate(18451, 'joint'), '15%');
      assert.strictEqual(calculateTaxRate(25000, 'joint'), '15%');
      assert.strictEqual(calculateTaxRate(74900, 'joint'), '15%');
    });
  });

  mocha.run();
};
