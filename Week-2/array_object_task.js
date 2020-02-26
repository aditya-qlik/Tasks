const userFirstName = document.querySelector(' #fname ');
const userLastName = document.querySelector(' #lname ');
const userDateOfBirth = document.querySelector(' #dob ');
const submit = document.querySelector(' #sub ');
const inputForm = document.querySelector(' #userInfo ');
const users = [];
/*
* creating Object of User Information
*/
function createUserObject(){
    return {
        firstName: userFirstName.value,
        lastName: userLastName.value,
        dateOfBirth: userDateOfBirth.value,
    };
}
/* 
 * pushing User Object to the array as an object 
 */
function addUser() {
    users.push(createUserObject());
    console.table(users);
    userInfo.reset();
}

submit.addEventListener('click', addUser);
