import * as element from './elements.js';
import { checkNumber1, checkNumber2 } from './validation.js';
import calculate from './calculate.js';
import { clear } from './util.js';

element.number1.addEventListener('blur', checkNumber1);
element.number2.addEventListener('blur', checkNumber2);

element.submit.addEventListener('click', calculate);

document.querySelector('#clean').addEventListener('click', clear);
