const logArrayButton = document.querySelector('#logArray');
const logArrayContentButton = document.querySelector('#arrayContent');
const arrayCheckButton = document.querySelector('#arrayCheck');
const dualDivisibleNumbers = [];
const numbers = Array.from(
        {
            length: 101,
        },
        (_item, index) => index
);
function logArray() {
        console.log(numbers); 
}
function logArrayContents() {
        numbers.forEach(content => console.log(content));
}
function checkDivisibilityBy3and5(number){
        return number % 3 === 0 && number % 5 === 0;
}
function checkDivisibilityBy3(number) {
        return number % 3 === 0;
}
function checkDivisibilityBy5(number) {
        return number % 5 === 0;
}
function checkArray(arrayToCheck){
        for (number of arrayToCheck) {
                if(checkDivisibilityBy3and5(number)){
                        console.log('Fizz Buzz');
                        dualDivisibleNumbers.push(number);
                } else if(checkDivisibilityBy5(number)){
                        console.log('Buzz');
                } else if(checkDivisibilityBy3(number)){
                        console.log('Fizz');
                } else{
                        console.log(number);
                }
        }
        console.log(dualDivisibleNumbers)
}
logArrayButton.addEventListener('click', logArray);
logArrayContentButton.addEventListener('click', logArrayContents);
arrayCheckButton.addEventListener('click',() => checkArray(numbers));