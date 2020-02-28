const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// const fetchData = document.querySelector('.call');

// console.log(fetchData);
async function fetchInformation(){
    const information = await fetch(`${usersEndpoint}`);
    return information;
}
function createArray(value){
    const userArray = value;   
    console.log(userArray);
    return userArray;
}
function findUser(data){
    const userName = document.querySelector('.user');
    const result = data.filter(element => element.login === userName)
    console.log(result);
}
function handleClick(){
    findUser(createArray(fetchInformation()));
}
document.querySelector('.call').addEventListener('click',handleClick)