# 02-Challenge-3

## Description

The purpose of this challenge was to deploy a webpage application with the ability to generate a password, based on criteria entered by the user.  This project features dynamic HTML and CSS that is updated using Javascript. The page also includes a responsive design interface for adaptation to mulitiple screen sizes.  

The acceptance criteria were as follows: 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

All acceptance criteria were met and the site functions as expected.

I learned the necessity of separating global code from inner functions. For instance, in one iteration, I moved the "var generateBtn" inside the "generatePassword()" function which caused problems synactically becuase we would need to call on that variable later to initiate user prompts. I also learned new functions and methods including parseInt and number.isNaN for relative use cases. Furthermore, I understand how important it is to account for contingencies in code as a failsafe in order to not only anticipate user behavior but minimize bugs. For instance, in the initial iteration, I used prompts instead of confirms which could introduce opportunities for the user to mistype (e.g.,spelling, case, and other errors). Finally, I understand how vital notation is as well as formatting code so that it is easy to read. As the coding projects become more complex, it is critical to be able to reference and update code each step of the way.
## Usage

The html, css, and js files can be used to view the company website with web accessibility considerations applied. A link to the mockup is accessible from the repository file list. 
![Password Generator Mockup](./assets/images/03-javascript-homework-demo.png)

## Credits

The project was completed with help from the course materials and organization elements discussed with the Bootcamp tutor, Erik Hirsch.

## License

MIT License

Copyright (c) [2023] [Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.