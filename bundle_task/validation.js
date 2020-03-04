/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import * as element from './elements.js';

export function checkNumber1() {
        const num1 = parseFloat(element.number1.value);
        const valueOfNumber1 = element.number1.value;
        if (valueOfNumber1 === '') {
                console.error(`Enter a NUMBER `);
                return undefined;
        }
        if (isNaN(num1)) {
                console.error(`Enter a NUMBER `);
                element.number1.value = '';
                return undefined;
        }
        return num1;
}

export function checkNumber2() {
        const num2 = parseFloat(element.number2.value);
        const valueOfNumber2 = element.number2.value;
        if (valueOfNumber2 === '') {
                console.error(`Enter a NUMBER `);
                return undefined;
        }
        if (isNaN(num2)) {
                console.error(`Enter a NUMBER`);
                element.number2.value = '';
                return undefined;
        }
        return num2;
}
