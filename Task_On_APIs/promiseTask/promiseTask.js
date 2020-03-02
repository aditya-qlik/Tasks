const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

function fetchUserInfo(username){
    const fetchpromise = fetch(`${userEndpoint}/${username}`);
    fetchpromise.then(response1 =>{
        const userData = response1.json();
        console.log(userData);
        userDataPromise(userData)
        // userData.then(response2 => {
        //    userArray.push(response2);
        //    console.log(userArray);
        // });
    });
}
function userDataPromise(userData){
    userData.then(
        response => userArray.push(response)

    )
    console.log(userArray)
}
function handleError(err){
    console.log(err);
}
function clickHandler(){
    const username = document.querySelector('#name').value;
    fetchUserInfo(username);
}
document.querySelector('#submit').addEventListener('click',clickHandler)