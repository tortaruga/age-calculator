const form = document.querySelector('.age-calculator-form');
const daysResult = document.querySelector('.days-value');
const monthsResult = document.querySelector('.months-value');
const yearsResult = document.querySelector('.years-value');

const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');

const labels = document.querySelectorAll('label'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // remove previous error messages if present before validating again
    resetErrors();

    if (validateForm()) {
        getResult();  
    } else {
        handleError(); 
    }
})

function validateForm() {
    let isValid = true; 
    
    // if any of the inputs is not valid validateForm() returns false
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

function isDayValid() {
    // if empty, return false (invalid)
    if (isEmpty(dayInput.value, errorDay)) {
        return false;
    }

    // check whether the day number is valid according to month input
    const maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // if input year is a leap year, add one day to february
    if ((yearInput.value % 4 === 0 && yearInput.value % 100 !== 0) || 
        (yearInput.value % 400 === 0)) {
        maxDays[1] = 29;
    }
    // if negative or exceeding number of days in input month, return false
    // (and display error message)
    if (dayInput.value < 1 || dayInput.value > maxDays[monthInput.value - 1]) {
        invalid(errorDay, 'day');
        return false;
    }

    // if all good return true
    return true;
}


function isMonthValid() {
    // if empty return false
    if (isEmpty(monthInput.value, errorMonth)) {
        return false;
    }

    // if month outside 1-12 range return false (and display error message)
    if (monthInput.value <= 0 || monthInput.value > 12) {
      invalid(errorMonth, 'month');
      return false;
    }

    return true;
}

function isYearValid() {
    // if empty return false
    if (isEmpty(yearInput.value, errorYear)) {
        return false;
    }

    // if future year return false (and display error message)
    if (yearInput.value > new Date().getFullYear()) {
        errorYear.textContent = 'Must be in the past';
        return false; 
    } 

    return true;
}


function isEmpty(value, element) {
    if (value === '') {
        emptyField(element);
        return true
    }
    return false
}

function emptyField(element) {
    element.textContent = 'This field is required';
}

function invalid(element, word) {
    element.textContent = `Must be a valid ${word}`;
}

function resetErrors() {
    // remove error styling
    dayInput.classList.remove('err');
    monthInput.classList.remove('err');
    yearInput.classList.remove('err'); 
    labels.forEach(label => label.classList.remove('err'));

    // remove error messages
    resetMessages(errorDay);
    resetMessages(errorMonth);
    resetMessages(errorYear);
}

function resetMessages(element) {
   element.textContent = '';
}


function handleError() {
    // update styling for invalid inputs
    dayInput.classList.add('err');
    monthInput.classList.add('err');
    yearInput.classList.add('err'); 
    labels.forEach(label => label.classList.add('err'))
}


function getResult() {
    const today = new Date();

    // calculate years of age
    let ageYears = today.getFullYear() - yearInput.value; 

    // calculate months of age (+1 because months returned by .getMonth() are 0 indexed)
    let ageMonths = today.getMonth() + 1 - monthInput.value;
    // if birthday month had not passed yet or if it's birthday month but birthday day has not passed adjust years and months 
    // (remove one year and ad 12 to the month) 
    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() - dayInput.value < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    // calculate days of age
    let ageDays = today.getDate() - dayInput.value; 
    
    if (ageDays < 0) { 
        // if result is negative subtract one month and add the number of last month's days to daysAge
        ageMonths = ageMonths === 0 ? 11 : ageMonths--; 
        if (ageMonths === 11) {
            ageYears--;
        }
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }
 
    // display the results
    yearsResult.textContent = ageYears;
    monthsResult.textContent = ageMonths;
    daysResult.textContent = ageDays;
}

// 20 dec 2000
