const sum = require('../');

describe('Sum function:', () => {
  test('Arguments 1 and 3 should output 4', () => expect(sum(1, 3)).toBe(4));
});
