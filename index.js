const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// This function returns a set of questions based on the user's preferences for optional sections.
function getQuestions() {
    let questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like to create?',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for your shape:',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for your text:',
        }
    ];
    return questions;
}

// This function generates the README content based on the user's answers.
function generateSVG(answers) {
    let shape;

    // Instantiate the appropriate shape class based on the user's input
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
        default:
            shape = new Shape(); // A generic shape with no render output
    }

    // Generate SVG content for the shape and the text
    let svgContent = shape.render();
    svgContent += `<text x="150" y="125" font-size="55" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;

    // Wrap everything in SVG tags
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
}

// Using inquirer to prompt the user and generate SVG
inquirer.prompt(getQuestions()).then((answers) => {
    const svgContent = generateSVG(answers);
    fs.writeFile('logo.svg', svgContent, (err) =>
        err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
});