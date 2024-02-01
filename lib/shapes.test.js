const { Circle, Triangle, Square } = require('./shapes');

// Test for Circle with red color
test('Circle render with red color', () => {
  const shape = new Circle('red');
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

// Test for Triangle with blue color
test('Triangle render with blue color', () => {
  const shape = new Triangle('blue');
  expect(shape.render()).toEqual('<polygon points="150,50 50,150 250,150" fill="blue" />');
});

// Test for Square with yellow color
test('Square render with yellow color', () => {
  const shape = new Square('yellow');
  expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="yellow" />');
});
