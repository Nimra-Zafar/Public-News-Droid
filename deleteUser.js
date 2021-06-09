let users = ['1', '2', '3', '4', '5'];
let username = ['Noor', 'Nimra', 'Ramsha', 'Shameen', 'Malika'];

var btn = document.querySelector('#submit');
var name1 = document.querySelector("#namee");
var company1 = document.querySelector("#company");
// var name1 = document.querySelector("#namee");
console.log(name1);
btn.addEventListener('click', suv1);
function suv1(e) {
    e.preventDefault();
    for (let i = 0; i <= 5; i++) {
    if (name1.value == username[i] && company1.value == users[i]) {
        name1.remove();
        company1.remove();
        alert("User Account deleted");
        break;
    }
    else 
    alert("User Account does not exist");
    break;
} 
}