//inputs
var userNameInput = document.getElementById('nameInput');
var userEmailInput = document.getElementById('emailInput');
var userPassInput = document.getElementById('passInput');
//btns
var signupBtn = document.getElementById('signupBtn');
//array
var userslist = [];
//alerts
var message = document.getElementById('message');

if (localStorage.getItem('users') != null) {
    userslist = JSON.parse(localStorage.getItem('users'));
}
console.log(userslist);

function signUP() {
    var user = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPassInput.value
    }
    if (isEmpty() == true) {

        errorMessage()

    }
    else {
       if( checkEmail()== true){
        checkEmailMessage()
       }
       else{
        userslist.push(user);
        localStorage.setItem('users', JSON.stringify(userslist));
        clearForm();
        appearMessage();
       }
    }


}
function appearMessage() {

    message.classList.remove('d-none');
    message.innerHTML = 'sucess';
    message.style.color = 'green';

}
function errorMessage() {

    message.classList.remove('d-none');
    message.innerHTML = 'all inputs required';
    message.style.color = 'red';
}
function checkEmailMessage(){
    message.classList.remove('d-none');
    message.innerHTML = 'Email already exist';
    message.style.color = 'red';
}


function clearForm() {
    userNameInput.value = '';
    userEmailInput.value = '';
    userPassInput.value = '';
}

function isEmpty() {
    if (userNameInput.value == '' || userEmailInput.value == '' || userPassInput.value == '')

        return true;
    else
        return false;
}

function checkEmail() {

    for (var i = 0; i < userslist.length; i++) {
        if (userslist[i].email == userEmailInput.value)
            return true;
        else
            return false;

    }
}

signupBtn.addEventListener('click', signUP);