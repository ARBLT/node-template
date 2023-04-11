const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello world!");
});


test('outputs the correct string length', () => {
  expect(hello().length).toBe(12);
});

test('outputs the correct spaces', () => {
  expect(hello().indexOf(" ")).toBe(5);
});