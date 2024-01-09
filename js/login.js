//inputs
var emailLoginInput = document.getElementById('emailLoginInput');
var passwordLoginInput = document.getElementById('passwordLoginInput');

//array
var userslist = [];
//alert
var alert = document.getElementById('alertMassage');
//btn
var loginBtn=document.getElementById('loginBtn');

 // get from local storage
if (localStorage.getItem('users') != null) {
    userslist = JSON.parse(localStorage.getItem('users'))
}

function usersData() {
    var data = {
        email: emailLoginInput.value,
        password: passwordLoginInput.value,
    }
    if (isEmpty() == true) {
        inputsRequired()
    }
    else {
        if(checkEmail()==true){
            window.location.href='../home.html'
        }
        else{
            emailMessage()
            clearForm()
        }
    }
}
function clearForm() {
    emailLoginInput.value = '';
    passwordLoginInput.value = '';
}

function isEmpty() {
    if (emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}

 function inputsRequired(){
    alert.classList.remove('d-none');
    alert.innerHTML = 'all inputs required'
    alert.style.color = 'red'
 }

function checkEmail() {
    for (var i = 0; i < userslist.length; i++) {
        if (userslist[i].email == emailLoginInput.value && userslist[i].password == passwordLoginInput.value){
            localStorage.setItem('username',userslist[i].name)
            return true;
        } 
    }
}
function emailMessage() {
    
    alert.classList.remove('d-none');
    alert.innerHTML = 'this account not exist'
    alert.style.color = 'red'
}

//event
loginBtn.addEventListener('click',usersData)
