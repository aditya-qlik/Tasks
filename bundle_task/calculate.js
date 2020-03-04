import { checkNumber1, checkNumber2 } from './validation.js';
import add from './addition.js';
import subtraction from './subtraction.js';
import multiplication from './multiplication.js';
import division from './division.js';
import modulus from './modulus';
import { displayResult } from './util.js';
import { operation } from './elements.js';

function calculate() {
        const num1 = checkNumber1();
        const num2 = checkNumber2();
        const operator = operation.value;
        // console.log(num1, num2);
        let printOut;
        switch (operator) {
                case '+':
                        printOut = `The sum of ${num1} and ${num2} is ${add(num1, num2)}`;
                        break;
                case '-':
                        printOut = `The difference of ${num1} and ${num2} is ${subtraction(num1, num2)}`;
                        break;
                case '*':
                        printOut = `The product of ${num1} and ${num2} is ${multiplication(num1, num2)}`;
                        break;
                case '/':
                        printOut = `The quotient of ${num1} and ${num2} is ${division(num1, num2)}`;
                        break;
                case '%':
                        printOut = ` The modulus of ${num1} and ${num2} is ${modulus(num2, num1)}`;
                        break;
                default:
                        printOut = `Invalid operator`;
        }
        displayResult(printOut);
}
export default calculate;
