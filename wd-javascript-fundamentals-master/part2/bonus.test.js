window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('bigSum', function() {
    test('adds a bunch of numbers as parameters', function() {
      assert.strictEqual(bigSum(1, 2, 3, 4), 10);
      assert.strictEqual(bigSum(1, -1, 2, -3), -1);
      assert.strictEqual(bigSum(), 0);
    });
  });

  suite('pluck', function() {
    test('grabs the values from an array of object for a specific key', function() {
      var stooges = [
        { name: 'moe', age: 40 },
        { name: 'larry', age: 50 },
        { name: 'curly', age: 60 }
      ];

      assert.deepEqual(pluck([], 'foo'), []);
      assert.deepEqual(pluck(stooges, 'name'), ['moe', 'larry', 'curly']);
    });
  });

  suite('pick', function() {
    test('picks an array of property names from an object', function() {
      var stooge = { name: 'moe', age: 50, userid: 'moe1' };

      assert.deepEqual(pick([], []), {});
      assert.deepEqual(pick(stooge, ['name', 'age']), { name: 'moe', age: 50 });
    });
  });

  suite('merge', function() {
    test('merges two sorted arrays', function() {
      assert.deepEqual(merge([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
      assert.deepEqual(merge([1, 3, 5], [1, 2]), [1, 1, 2, 3, 5]);
      assert.deepEqual(merge([], [1, 2]), [1, 2]);
      assert.deepEqual(merge([1, 2], []), [1, 2]);
      assert.deepEqual(merge([], []), []);
    });
  });

  suite('unique', function() {
    test('returns an array with only unique values', function() {
      assert.sameMembers(unique([]), []);
      assert.sameMembers(unique(['a', 'b', 'a', 'c']), ['a', 'b', 'c']);
      assert.sameMembers(unique(['a', 'b', 'c']), ['a', 'b', 'c']);
    });
  });

  mocha.run();
}
