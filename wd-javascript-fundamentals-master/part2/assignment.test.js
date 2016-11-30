window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('sum', function() {
    test('adds a bunch of numbers', function() {
      assert.strictEqual(sum([]), 0);
      assert.strictEqual(sum([1, 2, 3, 4]), 10);
      assert.strictEqual(sum([1, -1, 2, -3]), -1);
    });
  });

  suite('product', function() {
    test('multiplies bunch of numbers', function() {
      assert.strictEqual(product([]), 1);
      assert.strictEqual(product([1, 2, 3, 4]), 24);
      assert.strictEqual(product([1, 2, 3, 4, 0]), 0);
    });
  });

  suite('concatenate', function() {
    test('concatenates an array of strings', function() {
      assert.strictEqual(concatenate([]), '');
      assert.strictEqual(concatenate(['Hello', 'world', 'Seattle']), 'HelloworldSeattle');
    });
  });

  suite('repeat', function() {
    test('repeats a string multiple times', function() {
      assert.strictEqual(repeat('hi', 4), 'hihihihi');
      assert.strictEqual(repeat('ken', 3), 'kenkenken');
      assert.strictEqual(repeat('hello', 1), 'hello');
    });
  });

  suite('filterPassingGrades', function() {
    test('filters all passing grades', function() {
      assert.deepEqual(filterPassingGrades([]), []);
      assert.deepEqual(filterPassingGrades([100, 45, 90, 60]), [100, 90]);
      assert.deepEqual(filterPassingGrades([100, 45, 70]), [100, 70]);
      assert.deepEqual(filterPassingGrades([0, 45, 40]), []);
    });
  });

  suite('replace', function() {
    test('replaces values in an array with another', function() {
      assert.deepEqual(replace([1, 3, 2, 1, 3], 1, 4), [4, 3, 2, 4, 3]);
      assert.deepEqual(replace([], 1, 4), []);
      assert.deepEqual(replace([1, 3, 2, 1, 3], 4, 1), [1, 3, 2, 1, 3]);
    });
  });

  suite('flatten', function() {
    test('flattens an array of arrays', function() {
      assert.deepEqual(flatten([]), []);
      assert.deepEqual(flatten([[1], [2], [3], [4]]), [1, 2, 3, 4]);
      assert.deepEqual(flatten([[1], [2, 3], [4]]), [1, 2, 3, 4]);
      assert.deepEqual(flatten([[1], [2], [3, [[4]]]]), [1, 2, 3, [[4]]]);
    });
  });

  suite('max', function() {
    test('calculates the max number in an array', function() {
      assert.strictEqual(max([1, 2, 3, 4, 3]), 4);
      assert.strictEqual(max([1, 2, 3, -4, 3]), 3);
      assert.strictEqual(max([]), -Infinity);
    });
  });

  suite('min', function() {
    test('calculates the min number in an array', function() {
      assert.strictEqual(min([1, 2, 3, 4, 3]), 1);
      assert.strictEqual(min([1, 2, 3, -4, 3]), -4);
      assert.strictEqual(min([]), Infinity);
    });
  });

  suite('mean', function() {
    test('calculates the mean of an array', function() {
      assert.strictEqual(mean([1, 2, 3, 4, 5]), 3);
      assert.strictEqual(mean([1, 2, 3, -4, 3]), 1);
      assert.strictEqual(mean([]), null);
    });
  });

  suite('median', function() {
    test('calculates the median of an array', function() {
      assert.strictEqual(median([1, 1, 2, 3, 4, 5, 6]), 3);
      assert.strictEqual(median([1, 1, 2, 3, 4, 5]), 2.5);
      assert.strictEqual(median([1, 6, 5, 3, 4, 2, 1]), 3);
      assert.strictEqual(median([]), null);
    });
  });

  suite('contains', function() {
    test('checks if a string is in the array', function() {
      assert.strictEqual(contains(['Ryan', 'Ken', 'Ian'], 'Ken'), true);
      assert.strictEqual(contains([], 'Ken'), false);
      assert.strictEqual(contains(['Ryan', 'Ken', 'Ian', 'Lionel'], 'Adam'), false);
    });
  });

  suite('distance', function() {
    test('returns the distance between two points', function() {
      assert.approximately(distance({x: 0, y: 3}, {x: 0, y: 0}), 3, 0.01);
      assert.approximately(distance({x: -1, y: 1}, {x: 0, y: 0}), Math.sqrt(2), 0.01);
    });
  });

  suite('combine', function() {
    test('returns the combination of key-value pairs from two objects', function() {
      assert.deepEqual(combine({a: 1}, {}), {a: 1});
      assert.deepEqual(combine({}, {b: 2}), {b: 2});
      assert.deepEqual(combine({a: 1}, {b: 2}), {a: 1, b: 2});
      assert.deepEqual(combine({a: 1}, {a: 2}), {a: 2});
      assert.deepEqual(combine({}, {}), {});
    })
  });

  suite('invert', function() {
    test('returns a new object where the keys and values are inverted', function() {
      assert.deepEqual(invert({a: 1}), {'1': 'a'});
      assert.deepEqual(invert({a: 1, b: 2}), {'1': 'a', '2': 'b'});
      assert.deepEqual(invert({}), {});
    });
  });

  suite('values', function() {
    test('returns values of an object', function() {
      assert.deepEqual(values({}), []);
      assert.deepEqual(values({a: 1, b: 'foo'}), [1, 'foo']);
      assert.deepEqual(values({b: 'foo'}), ['foo']);
    });
  });

  suite('toPairs', function() {
    test('returns a new array where each element is a key-value pair array', function() {
      assert.deepEqual(toPairs({a: 1}), [['a', 1]]);
      assert.deepEqual(toPairs({a: 1, b: 2}), [['a', 1], ['b', 2]]);
      assert.deepEqual(toPairs({}), []);
    });
  });

  suite('fromPairs', function() {
    test('returns a new object where each key-value pair is an element in an array', function() {
      assert.deepEqual(fromPairs([['a', 1]]), {a: 1});
      assert.deepEqual(fromPairs([['a', 1], ['b', 2]]), {a: 1, b: 2});
      assert.deepEqual(fromPairs([]), {});
    });
  });

  mocha.run();
};
