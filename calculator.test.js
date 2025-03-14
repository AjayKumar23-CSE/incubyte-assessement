const { add } = require('./calculator');

test('throws an error when negative numbers are used', () => {
    expect(() => add("1,-2,3")).toThrow("Negatives not allowed: -2");
});

