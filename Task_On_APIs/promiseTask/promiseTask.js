const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

function userDataPromise(userData) {
    userData.then(response => userArray.push(response));
    console.log(userArray);
}

function handleError(err) {
    console.log(err);
}

function fetchUserInfo(username) {
    const fetchPromise = fetch(`${userEndpoint}/${username}`);
    fetchPromise
        .then(response1 => {
            const userData = response1.json();
            console.log(userData);
            userDataPromise(userData);
        })
        .catch(handleError);
}

function clickHandler() {
    const username = document.querySelector('#name').value;
    fetchUserInfo(username);
}
document.querySelector('#submit').addEventListener('click', clickHandler);
