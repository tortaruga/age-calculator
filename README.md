# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

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
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

-  [solution](https://www.frontendmentor.io/solutions/age-calculator-PvuK3YPec9)
-  [live site](https://tortaruga.github.io/age-calculator/)

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- Mobile-first workflow
- Javascript


### What I learned

1.

```
function validateForm() {
    let isValid = true; 
    
    if (!isDayValid()) { 
        isValid = false; 
    } 
    
    if (!isMonthValid()) {  
        isValid = false; 
    } 
    
    if (!isYearValid()) { 
        isValid = false; 
    } 
    
    return isValid;
}
```

at first i had written the function like this: 
```
function validateForm() {
    
    if (!isDayValid() || !isMonthValid() || !isYearValid()) { 
        return false
    } 
    
    return true;
}
```

this doesnt work though, because if the first operand is evaluated as true (in this case if isDayValid is false) everything else gets ignored and the functions returns false, without evaluating the month and year.

2.
difference between variable++ and ++variable:

start++ returns the variable first and then it increments:
```
let start = 2;
console.log(start++) // output: 2;
console.log(start) // output: 3;
```

++start increments first, then returns:
```
let start = 2;
console.log(++start) // output: 3;
```

this is why if in the function to animate the count up we incrememnt using start++ the final number being displayed is one less that the one it should be

### Useful resources

- [counter animation tutorial](https://www.geeksforgeeks.org/how-to-make-animated-counter-using-javascript/) 

## Author

- Frontend Mentor - [@tortaruga](https://www.frontendmentor.io/profile/tortaruga)
