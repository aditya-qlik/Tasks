/* eslint-disable no-console */
function division(valueOfNum1 = 0, valueOfNum2 = 1) {
        console.log(valueOfNum2)
        if (valueOfNum2 === 0) {
                console.error(`2nd Number can't be 0`);
                return `<strong style="color:red;">ERROR!!!! 2nd Number can't be 0</strong>`;
        } else {
                return valueOfNum1 / valueOfNum2;
        }
}
export default division;
