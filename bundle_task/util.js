/* eslint-disable no-console */
import { number1, number2 } from './elements.js';

export function displayResult(toBeDisplayed) {
        document.querySelector('#displayResult').innerHTML = toBeDisplayed;
        // console.log(toBeDisplayed);
}
export function clear() {
        console.clear();
        number1.value = '';
        number2.value = '';
        document.querySelector('#displayResult').innerHTML = '';
}
