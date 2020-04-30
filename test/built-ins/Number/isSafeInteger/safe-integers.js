// Copyright (c) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.5
esid: sec-number.issafeinteger
description: >
  Return true if argument is a safe integer
info: |
  Number.isSafeInteger ( number )

  [...]
  3. Let integer be ToInteger(number).
  4. If integer is not equal to number, return false.
  5. If abs(integer) ≤ 2**53-1, return true.
  [...]
---*/

// Qt change: s/isInteger/isSafeInteger/g; see
// https://github.com/tc39/test262/issues/2605
assert.sameValue(Number.isSafeInteger(1), true, "1");
assert.sameValue(Number.isSafeInteger(-0), true, "-0");
assert.sameValue(Number.isSafeInteger(0), true, "0");
assert.sameValue(Number.isSafeInteger(-1), true, "-1");
assert.sameValue(Number.isSafeInteger(9007199254740991), true, "9007199254740991");
assert.sameValue(Number.isSafeInteger(-9007199254740991), true, "-9007199254740991");
