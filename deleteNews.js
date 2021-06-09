function login() 
{

    var email = document.getElementById("name");
    var password = document.getElementById("email");
    let userid=['1','2','3','4','5'];
    let newsid=['1','2','3','4','5'];
    for(var i=0;i<5;i++)
    {
        if (email.value == userid[i] && password.value == newsid[i]) {
            alert("News Deleted");
            break;
            // window.location.href = "./home.html";
        }
        else {
            alert("INVALID USER ID OR NEWS ID");
            break;
        }
    }
}