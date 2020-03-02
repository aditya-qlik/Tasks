const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

function errorHandler(err) {
    console.log(err);
}

function userInfo(username, createArray) {
    fetch(`${userEndpoint}/${username}`)
        .then(response => response.json())
        .then(users => {
            userArray.push(users);
        })
        .catch(errorHandler);
    createArray(userArray);
}

function displayUserArray(user) {
    console.log(user);
}

function clickHandler() {
    const username = document.querySelector('#user').value;
    userInfo(username, displayUserArray);
}

document.querySelector('.call').addEventListener('click', clickHandler);
