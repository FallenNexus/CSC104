//the array that controls the fuctions that make the start and stop buttons called in the html
var arrInterval = new Array();

//starts countdown on click
/*function startButtonClick(){
    document.getElementById("btnStart").disabled = true;
   document.getElementById("btnStop").disabled = false;
    var countdownElem = document.getElementById("countdown");
runTimer(countdownElem);}

//stops countdown on click
function stopButtonClick(){
   document.getElementById("btnStart").disabled = false;
   document.getElementById("btnStop").disabled = true;
   
    for (counter = 0; counter < 11; counter++){
        clearTimeout(arrInterval[counter]);
    }

}*/

//this function asks for a first and last name, and badge number
//the name needs to be less than 20 characters and the badge number needs to be 3 characters or less
function GetUserInput(){
    var FullName = " ";
    var UserNumber = 0;
    do{
        var FirstName = prompt("Please enter your first name (under 20 characters)");
        var LastName = prompt("Please enter your last name (under 20 characters");
        FullName = FirstName + " " + LastName;
        if (FullName.length > 40){
            alert("Please enter a shorter name. Legnth was: " + FullName.length);}
        }
while(FullName.length > 20);

do{
    UserNumber = prompt("Please enter your unique user number (3 digits max): ");
    if (UserNumber > 999){alert("Please enter a user number with 3 digits or fewer.");
    }
}

while(UserNumber > 999);

    return FullName + " " + UserNumber;
}

 //this is the new countdown fucntion
/*function runTimer(countdownElem){
//the countdown from the week two assignment
var currTime = 50; //the number that shows up in the area above
var timeout = 0; //the delay once the page is loaded before the set timeout starts
var timeoutIncrement = 5000; //time in milliseconds
/*adding the loop below; the loop type is a for loop. It can commonly be refered to with the letter i. counter++ just means counter + 1

for(var counter=0; counter < 11; counter++){

    //how to make the thing stop so the stop button actually works

    arrInterval[counter] = setTimeout(function(){
        if(currTime == 0){
            alert("Blastoff!"); //alert that pops up once countdown hits zero
            countdownElem.innerHTML = currTime;
        }
        else if (currTime <25){
            countdownElem.innerHTML = "Warning! Less than half way to launch, time left = " + currTime;
        }
        else{
            countdownElem.innerHTML = currTime;
        }
    currTime = currTime - 5; //decreases the countdown by 5
    }, timeout);
    timeout = timeout + timeoutIncrement; //sets the new count down to start at the decreased value
    }
   
    //no timeout = timeout + timeoutIncrement since there is no further subtractions
}*/