const users = []; // Array with all user objects
/*
* creating Object of User Information
*/
function createUserObject(fName,lName,userDOB){
    return {
        firstName: fName,
        lastName: lName,
        dateOfBirth: userDOB,
    };
}
/* 
 * pushing User Object to the array as an object 
 */
function addUser() {
    const userFirstName = document.querySelector(' #fname ').value;
    const userLastName = document.querySelector(' #lname ').value;
    const userDateOfBirth = document.querySelector(' #dob ').value;
    const inputForm = document.querySelector(' #userInfo ');
    users.push(createUserObject(userFirstName, userLastName, userDateOfBirth));
    console.table(users);
    inputForm.reset();
}

document.querySelector(' #sub ').addEventListener('click', addUser);
