/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
function modulus(valueOfNum2, valueOfNum1 = 0) {
        console.log(valueOfNum2)
        if (valueOfNum2 === 0 || isNaN(valueOfNum2)) {
                console.error(`2nd Number can't be 0`);
                return `<strong style="color:red;">ERROR!!!! 2nd Number can't be 0</strong>`;
        } else {
                return valueOfNum1 % valueOfNum2;
        }
}
export default modulus;
