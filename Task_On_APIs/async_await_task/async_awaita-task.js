const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

function handleError(err) {
    console.log('Theres no user with that username');
    console.log(err);
}
/*
* Create array of the searched users
*/
async function userInfoArray(userInfo) {
    console.log(userInfo)
    const userData = await userInfo;
    userArray.push(userData);
    console.log(userArray);
}
/*
*To check for errors in the response
*/
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
/*
* fetch the api 
*/
async function fetchUserData() {
    const username = document.querySelector('#name').value;
    const response = await fetch(`${userEndpoint}/${username}`).catch(handleError);
    checkResponse(response);
}

document.querySelector('#submit').addEventListener('click', fetchUserData);
