const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

async function userInfoArray(userInfo) {
    const userData = await userInfo;
    userArray.push(userData);
    console.log(userArray);
}

async function fetchUserData(){
    const username = document.querySelector('#name').value;
    const response = await fetch(`${userEndpoint}/${username}`);
    if (response.status !== 200){
        handleError(response.statusText);
    } else {
        const data = await response.json();
        console.log(data);
        userInfoArray(data);
    }
}
function handleError(err) {
    console.log("Theres no user with that username")
    console.log(err);
    return;
}
document.querySelector('#submit').addEventListener('click',fetchUserData);
