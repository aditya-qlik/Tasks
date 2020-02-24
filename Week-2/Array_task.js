const logArrayButton = document.querySelector('#logArray');
const arrayContentButton = document.querySelector('#arrayContent');

const numbers = Array.from(
        {
                length: 101,
        },
        (_item, index) => index
);

function logArray() {
        console.log(numbers);
}

function arrayContent(element) {
        console.log(element);
}

function logArrayContents(arrayToLog) {
        return function() {
                arrayToLog.forEach(arrayContent);
        };
}

logArrayButton.addEventListener('click', logArray);
arrayContentButton.addEventListener('click', logArrayContents(numbers));
