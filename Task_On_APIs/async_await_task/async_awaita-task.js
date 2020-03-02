const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

function handleError(err) {
    console.log('Theres no user with that username');
    console.log(err);
}

async function userInfoArray(userInfo) {
    console.log(userInfo)
    const userData = await userInfo;
    userArray.push(userData);
    console.log(userArray);
}
function checkResponse(response){
    // console.log(response);
    if (response.status !== 200) {
        handleError(response.statusText);
    } else {
        const data =  response.json();
        console.log(data);
        userInfoArray(data);
    }
}
async function fetchUserData() {
    const username = document.querySelector('#name').value;
    const response = await fetch(`${userEndpoint}/${username}`);
    checkResponse(response);
}

document.querySelector('#submit').addEventListener('click', fetchUserData);
