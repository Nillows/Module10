// jest.index.js

const { Circle, Triangle, Square } = require('../lib/shapes'); 

// Test for rendering a blue triangle
test('Rendering a blue triangle', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual(
    '<polygon points="150,50 50,150 250,150" fill="blue" />'
  );
});

// Test for rendering a red circle
test('Rendering a red circle', () => {
  const shape = new Circle();
  shape.setColor('red');
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="red" />'
  );
});

// Test for rendering a green square
test('Rendering a green square', () => {
  const shape = new Square();
  shape.setColor('green');
  expect(shape.render()).toEqual(
    '<rect x="100" y="50" width="100" height="100" fill="green" />'
  );
});
