function login() 
{
    var email = document.getElementById("company");
    var password = document.getElementById("namee");

    if (email.value == "lt" && password.value == "xyz") {
        alert("Logged In");
        window.location.href = "./home.html";
    }
    else {
        alert("INVALID ADMIN ID OR PASSWORD");
    }
}