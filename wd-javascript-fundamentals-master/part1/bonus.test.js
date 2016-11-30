window.onload = function() {
  mocha.setup('tdd');
  var assert = chai.assert;

  suite('caesarShiftInt', function() {
    test('throws an error if the number is less than 97', function() {
      assert.throws(caesarShiftInt.bind(null, 50), 'Error: integer too low');
      assert.throws(caesarShiftInt.bind(null, 90), 'Error: integer too low');
    });

    test('throws an error if the number is greater than 122', function() {
      assert.throws(caesarShiftInt.bind(null, 123), 'Error: integer too high');
      assert.throws(caesarShiftInt.bind(null, 149), 'Error: integer too high');
    });

    test('shifts the number 13 places, wrapping it back to 97 once it hits 122', function() {
      assert.strictEqual(caesarShiftInt(97),  110);
      assert.strictEqual(caesarShiftInt(98),  111);
      assert.strictEqual(caesarShiftInt(99),  112);
      assert.strictEqual(caesarShiftInt(100), 113);
      assert.strictEqual(caesarShiftInt(101), 114);
      assert.strictEqual(caesarShiftInt(102), 115);
      assert.strictEqual(caesarShiftInt(103), 116);
      assert.strictEqual(caesarShiftInt(104), 117);
      assert.strictEqual(caesarShiftInt(105), 118);
      assert.strictEqual(caesarShiftInt(106), 119);
      assert.strictEqual(caesarShiftInt(107), 120);
      assert.strictEqual(caesarShiftInt(108), 121);
      assert.strictEqual(caesarShiftInt(109), 122);
      assert.strictEqual(caesarShiftInt(110),  97);
      assert.strictEqual(caesarShiftInt(111),  98);
      assert.strictEqual(caesarShiftInt(112),  99);
      assert.strictEqual(caesarShiftInt(113), 100);
      assert.strictEqual(caesarShiftInt(114), 101);
      assert.strictEqual(caesarShiftInt(115), 102);
      assert.strictEqual(caesarShiftInt(116), 103);
      assert.strictEqual(caesarShiftInt(117), 104);
      assert.strictEqual(caesarShiftInt(118), 105);
      assert.strictEqual(caesarShiftInt(119), 106);
      assert.strictEqual(caesarShiftInt(120), 107);
      assert.strictEqual(caesarShiftInt(121), 108);
      assert.strictEqual(caesarShiftInt(122), 109);
    });
  });

  suite('caesarShiftChar', function() {
    test("doesn't shift a punctuation character", function() {
      assert.strictEqual(caesarShiftChar('.'), '.');
      assert.strictEqual(caesarShiftChar('`'), '`');
      assert.strictEqual(caesarShiftChar('{'), '{');
      assert.strictEqual(caesarShiftChar('|'), '|');
    });

    test('shift a single lowercase character', function() {
      assert.strictEqual(caesarShiftChar('a'), 'n');
      assert.strictEqual(caesarShiftChar('b'), 'o');
      assert.strictEqual(caesarShiftChar('c'), 'p');
      assert.strictEqual(caesarShiftChar('d'), 'q');
      assert.strictEqual(caesarShiftChar('e'), 'r');
      assert.strictEqual(caesarShiftChar('f'), 's');
      assert.strictEqual(caesarShiftChar('g'), 't');
      assert.strictEqual(caesarShiftChar('h'), 'u');
      assert.strictEqual(caesarShiftChar('i'), 'v');
      assert.strictEqual(caesarShiftChar('j'), 'w');
      assert.strictEqual(caesarShiftChar('k'), 'x');
      assert.strictEqual(caesarShiftChar('l'), 'y');
      assert.strictEqual(caesarShiftChar('m'), 'z');
      assert.strictEqual(caesarShiftChar('n'), 'a');
      assert.strictEqual(caesarShiftChar('o'), 'b');
      assert.strictEqual(caesarShiftChar('p'), 'c');
      assert.strictEqual(caesarShiftChar('q'), 'd');
      assert.strictEqual(caesarShiftChar('r'), 'e');
      assert.strictEqual(caesarShiftChar('s'), 'f');
      assert.strictEqual(caesarShiftChar('t'), 'g');
      assert.strictEqual(caesarShiftChar('u'), 'h');
      assert.strictEqual(caesarShiftChar('v'), 'i');
      assert.strictEqual(caesarShiftChar('w'), 'j');
      assert.strictEqual(caesarShiftChar('x'), 'k');
      assert.strictEqual(caesarShiftChar('y'), 'l');
      assert.strictEqual(caesarShiftChar('z'), 'm');
    });

    test('shifts a single uppercase character', function() {
      assert.strictEqual(caesarShiftChar('A'), 'n');
      assert.strictEqual(caesarShiftChar('B'), 'o');
      assert.strictEqual(caesarShiftChar('C'), 'p');
      assert.strictEqual(caesarShiftChar('D'), 'q');
      assert.strictEqual(caesarShiftChar('E'), 'r');
      assert.strictEqual(caesarShiftChar('F'), 's');
      assert.strictEqual(caesarShiftChar('G'), 't');
      assert.strictEqual(caesarShiftChar('H'), 'u');
      assert.strictEqual(caesarShiftChar('I'), 'v');
      assert.strictEqual(caesarShiftChar('J'), 'w');
      assert.strictEqual(caesarShiftChar('K'), 'x');
      assert.strictEqual(caesarShiftChar('L'), 'y');
      assert.strictEqual(caesarShiftChar('M'), 'z');
      assert.strictEqual(caesarShiftChar('N'), 'a');
      assert.strictEqual(caesarShiftChar('O'), 'b');
      assert.strictEqual(caesarShiftChar('P'), 'c');
      assert.strictEqual(caesarShiftChar('Q'), 'd');
      assert.strictEqual(caesarShiftChar('R'), 'e');
      assert.strictEqual(caesarShiftChar('S'), 'f');
      assert.strictEqual(caesarShiftChar('T'), 'g');
      assert.strictEqual(caesarShiftChar('U'), 'h');
      assert.strictEqual(caesarShiftChar('V'), 'i');
      assert.strictEqual(caesarShiftChar('W'), 'j');
      assert.strictEqual(caesarShiftChar('X'), 'k');
      assert.strictEqual(caesarShiftChar('Y'), 'l');
      assert.strictEqual(caesarShiftChar('Z'), 'm');
    });
  });

  suite('encodeMessage', function() {
    test('encodes a message', function() {
      assert.strictEqual(encodeMessage('Wow this is cool'), 'jbj guvf vf pbby');
      assert.strictEqual(encodeMessage('SUPER SECRET'), 'fhcre frperg');
      assert.strictEqual(encodeMessage('Hello, there!'), 'uryyb, gurer!');
    });
  });

  suite('decodeMessage', function() {
    test('decodes a message', function() {
      assert.strictEqual(decodeMessage('jbj guvf vf pbby'), 'wow this is cool');
      assert.strictEqual(decodeMessage('fhcre frperg'), 'super secret');
      assert.strictEqual(decodeMessage('uryyb, gurer!'), 'hello, there!');
    });
  });

  mocha.run();
};
