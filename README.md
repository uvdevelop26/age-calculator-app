# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![desktop screen](./design/Screenshot%20desktop%20Frontend%20Mentor%20Age%20calculator%20app.png)


### Links

- Solution URL: [GitHub](https://github.com/uvdevelop26/age-calculator-app)
- Live Site URL: [GitHub Pages](https://uvdevelop26.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
const currentDate = new Date();

//this produces a result in miliseconds 
const dateResult = currentDate - new Date(year, month - 1, day);

//convert the miliseconds to normal date
let ageDate = new Date(dateResult);

//obtein the results
let pyear = ageDate.getUTCFullYear() - 1970;
let pmonth = ageDate.getUTCMonth();
let pday = ageDate.getUTCDate() - 1;

```
## Author

- Frontend Mentor - [@uvdevelop26](https://www.frontendmentor.io/profile/uvdevelop26)
- Linkedin - [Ubaldo Villalba](https://www.linkedin.com/in/ubaldo-villalba-6727a021a/)

