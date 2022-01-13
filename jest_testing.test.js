
const regex_test_function = require('./jest_testing');

test('regex -> /shoaib/gi is present or not in regular_text', () => {
    expect(regex_test_function('Shoaib', 'gi', 'Hello, I am Shoaib Akhtar')).toBe(true);
});