let abusive_words = ['Shit', 'Damn', 'Bitch', 'Bastard', 'Bugger'];

const str1 = 'Be it Apple’s phones, laptops, watches or desktops – Damn Apple marketers truly operate like mind readers of their loyal customers. They’ve managed to have impressive longevity with their products’ success – and customers still don’t seem to get tired of buying them. Why? Apple has made product feedback a major priority.'
const str2 = 'Uber is widely known for how much it emphasizes that its drivers be given ratings. In case the drivers are constantly getting rated poorly – they’ll get in trouble with the car sharing service.  '
const str3 = 'One of our favorite companies that uses customer feedback is Starbucks. The company successfully uses technology to engage with customers, hence adding value to their experience. Starbucks has launched many successful campaigns, and introduced new items on the menu,'
const str4 = 'Hyatt is well-known for delivering great Bitch type customer experiences. The hotel chain has always stayed connected with what their users want. In fact, they’ve built their entire brand influenced'
const str5 = 'The brand decided a long time ago that customer feedback had to be a priority. They teamed up with global retailer VF Corp, and collected customer feedback from around 20,000 buyers in 8 different countries'


var btn = document.querySelector('#op-submit');
var myid = document.querySelector("#op-user_id");
var email = document.querySelector("#op-user_email");

var chk1= new Boolean(chk1);
var chk2= new Boolean(chk2);
var chk3= new Boolean(chk3);
var chk4= new Boolean(chk4);
var chk5= new Boolean(chk5);

 /*function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        var results= re.test(email);

        if(results.value == false){
            alert('Invalid email');
        }
    
    }
    */
    

btn.addEventListener('click', suv2);
function suv2(e) {
    e.preventDefault();

    if (myid.value === "1") {
            for (let i = 0; i <= 5; i++) {
            if (str1.includes(abusive_words[i])) {
                chk1= true;
                }
        }
        if(chk1==true)
        alert('Entered OPinion have abusive words');
        else
        alert('Entered Opinion does not have abusive words');

        }
    
    
        else if (myid.value === "2") {
            for (let i = 0; i <= 5; i++) {
                if (str2.includes(abusive_words[i])) {
                    chk2= true;
                    }
            }
            if(chk2==true)
            alert('Entered OPinion have abusive words');
            else
            alert('Entered Opinion does not have abusive words');
    
            }
        
        else if (myid.value === "3") {
            for (let i = 0; i <= 5; i++) {
                if (str3.includes(abusive_words[i])) {
                    chk3= true;
                    }
            }
            if(chk3==true)
            alert('Entered OPinion have abusive words');
            else
            alert('Entered Opinion does not have abusive words');
    
            }
        else if (myid.value === "4") {
            for (let i = 0; i <= 5; i++) {
                if (str4.includes(abusive_words[i])) {
                    chk4= true;
                    }
            }
            if(chk4==true)
            alert('Entered OPinion have abusive words');
            else
            alert('Entered Opinion does not have abusive words');
    
            }
        else if (myid.value === "5") {
            for (let i = 0; i <= 5; i++) {
                if (str5.includes(abusive_words[i])) {
                    chk5= true;
                    }
            }
            if(chk5==true)
            alert('Entered OPinion have abusive words');
            else
            alert('Entered Opinion does not have abusive words');
    
            }
        }