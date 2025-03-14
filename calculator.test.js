const { add } = require('./calculator');

test('returns sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
});

