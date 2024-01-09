var welcomeMassage=document.getElementById('welcomeMassage');
var logoutBtn=document.getElementById('logoutBtn')

if(localStorage.getItem('username')!=null){
    welcomeMassage.innerHTML=`welcom   ${localStorage.getItem('username')}`

}

function logOut(){
    window.location.href='../signup.html';
    localStorage.removeItem('username');
}
logoutBtn.addEventListener('click',logOut);