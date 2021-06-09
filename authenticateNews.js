let abusive_words = ['Shit', 'Damn', 'Bitch', 'Bastard', 'Bugger'];

const str1 = 'The Cable  News Network is a multinational news-based pay television channel headquartered in Atlanta. It is owned by CNN Worldwide, a unit of the WarnerMedia News & Sports division of AT&Ts WarnerMedia. It was founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable news channel.'
const str2 = 'Some residents in Italy are not onboard with cruise ships returning to Venice. NBC News’ Claudio Lavanga spoke with one environmental activist who said issues include “environmental damage” and the risk of accidents. '
const str3 = 'Castillo overtook right-wing rival Keiko Fujimori, taking the lead in the official tally on the back of a late surge of rural votes'
const str4 = 'Bastard Lawmakers, vets groups are pushing the Biden admin to evacuate Afghans who worked for the U.S. The Taliban have killed many Afghans who helped the U.S'
const str5 = 'The Bitch  daughter of imprisoned former president Shit Alberto Fujimori was ahead late Sunday as polls closed in the contested runoff election against leftist candidate Pedro Castillo'


var btn = document.querySelector('#submit');
var myid = document.querySelector("#user_id");
var email1= document.querySelector("#user_email");

var chk1= new Boolean(chk1);
var chk2= new Boolean(chk2);
var chk3= new Boolean(chk3);
var chk4= new Boolean(chk4);
var chk5= new Boolean(chk5);

 /*
function validateEmail() 
{
    
    var re = /\S+@\S+\.\S+/;
    var results= re.test(email1);

    if(results.value == false){
        confirm('Invalid email');
    }

}*/

btn.addEventListener('click', suv1);
function suv1(e) {
    e.preventDefault();
   

    if (myid.value === "1") {
            for (let i = 0; i <= 5; i++) {
            if (str1.includes(abusive_words[i])) {
                chk1= true;
                }
        }
        if(chk1==true)
        alert('Entered news have abusive words');
        else
        alert('Entered news is valid');

        }
    
    
        else if (myid.value === "2") {
            for (let i = 0; i <= 5; i++) {
                if (str2.includes(abusive_words[i])) {
                    chk2= true;
                    }
            }
            if(chk2==true)
        alert('Entered news have abusive words');
            else
           alert('Entered news is valid');
    
            }
        
        else if (myid.value === "3") {
            for (let i = 0; i <= 5; i++) {
                if (str3.includes(abusive_words[i])) {
                    chk3= true;
                    }
            }
            if(chk3==true)
            alert('Entered news have abusive words');
            else
            alert('Entered news is valid');
    
            }
        else if (myid.value === "4") {
            for (let i = 0; i <= 5; i++) {
                if (str4.includes(abusive_words[i])) {
                    chk4= true;
                    }
            }
            if(chk4==true)
            alert('Entered news have abusive words');
            else
            alert('Entered news is valid');
    
            }
        else if (myid.value === "5") {
            for (let i = 0; i <= 5; i++) {
                if (str5.includes(abusive_words[i])) {
                    chk5= true;
                    }
            }
            if(chk5==true)
           alert('Entered news have abusive words');
            else
            alert('Entered news is valid');
    
            }
        }