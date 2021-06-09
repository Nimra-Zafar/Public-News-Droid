/*var id_admin=donameecument.querySelector("#company");
var password_admin=document.querySelector('#namee');
var btn = document.querySelector('#submit');
btn.addEventListener('click', suv1);
//alert("welcome");
function suv1(e) {
    if (id_admin.value === "LT123" && password_admin.value === "xyz123456" ) 
    {
        SVGFEDropShadowElement("SUCESSFULLY LOGIN").then(function(){window.location.href="main.html";});
    }
    else
    {
        HTMLTableRowElement("INVALID ADMIN ID OR PASSWORD");
    }


}*/
function login(){
    var email = document.getElementById("company").value;
    var password = document.getElementById("namee").value;

    if(email === "lt123" && password === "xyz123456"){
        swal("Success!", "Click OK to Proceed", "success").then(function(){window.location.href = "/SEC IMPLEMENTATION/main.html";});
    }
    else{
        swal("Error!", "Invalid Credentials! Account not found.", "error");
    }
}