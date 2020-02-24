const logArrayButton = document.querySelector('#logArray');
const logArrayContentButton = document.querySelector('#arrayContent');
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
logArrayButton.addEventListener('click', logArray);
logArrayContentButton.addEventListener('click', logArrayContents);
