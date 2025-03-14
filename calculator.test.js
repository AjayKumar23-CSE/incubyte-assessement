const { add } = require('./calculator');

test('supports new line as a separator', () => {
    expect(add("1\n2,3")).toBe(6);
});

