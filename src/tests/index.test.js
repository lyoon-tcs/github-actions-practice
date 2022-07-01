const autoPackageTestFunction = require('@lyoon-tcs/auto-package-test');

describe('Auto Package Test function:', () => {
  test('should output name passed into argument', () => {
    expect(autoPackageTestFunction('Lawrence')).toMatch(/lawrence/i);
  });
});
