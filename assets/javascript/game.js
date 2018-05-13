
//Define variables
var userMatch = 0;
var wins = 0;
var losses = 0;



var red = 0;
var blue = 0;
var yellow = 0;;
var purple = 0;
var matchNumber=0;

var temp =0;


$(document).ready(function(){


    numberToMatch();
    newGame();
    
   


// Function that generates random number that the user will match

function numberToMatch(){

    matchNumber = Math.floor(Math.random()*101 + 19);
    $("#number-to-match").text(matchNumber);
    console.log("The value the user needs to match is: " + matchNumber);
    
    }
    
   
    function newGame(){
        $('#wins').text("Wins: " + wins);
        $('#losses').text("losses: " + losses);

        userMatch = 0;
        $("#total-score").text(userMatch);

      //function that generates a random number when user clicks on the red crystal and saves it to a variable
      //it also adds the vaule to the current score
        $("#crystal1").click(function redCrystal(){
            
        temp = Math.ceil(Math.random()*12);
        if (red === 0){
            red = temp;
            userMatch = userMatch + red;
            $("#total-score").text(userMatch);
             console.log("The red crystal has a vaule of " + red);

        } else {
        userMatch = userMatch + red;
        $("#total-score").text(userMatch);
         console.log("The red crystals has a vaule of " + red);
        }
        winLose();
        });
        
    //function that generates a random number when user clicks on the blue crystal and saves it to a variable
    //it also adds the vaule to the current score

        $("#crystal2").click(function blueCrystal(){
            
        temp = Math.ceil(Math.random()*12);
        if (blue === 0){
            blue = temp;
            userMatch = userMatch + blue;
            $("#total-score").text(userMatch);
            console.log("The blue crystal has a vaule of " + blue);

        } else {
        userMatch = userMatch + blue;
        $("#total-score").text(userMatch);
        console.log("The blue crystals has a vaule of " + blue);
        }
        winLose();
        });
        
    //function that generates a random number when user clicks on the yellow crystal and saves it to a variable
    //it also adds the vaule to the current score

        $("#crystal3").click(function yellowCrystal(){
            
        temp = Math.ceil(Math.random()*12);
        if (yellow === 0) {
            yellow= temp;
            userMatch = userMatch + yellow;
            $("#total-score").text(userMatch);
            console.log("The yellow crystal has a vaule of " + yellow);
        } else {
        userMatch = userMatch + yellow;
        $("#total-score").text(userMatch);
        console.log("The yellow crystals has a vaule of " + yellow);
        }
        winLose();
        });
        
    //function that generates a random number when user clicks on the purple crystal and saves it to a variable
    //it also adds the vaule to the current score
        $("#crystal4").click(function purpleCrystal(){
       
        temp = Math.ceil(Math.random()*12);
        if (purple=== 0){
        purple = temp;
        userMatch = userMatch + purple;
        $("#total-score").text(userMatch);
        console.log("The purple crystals has a vaule of " + purple);

        } else {
        userMatch = userMatch + purple;
        $("#total-score").text(userMatch);
        console.log("The purple crystals has a vaule of " + purple);
        }
        winLose();
        });
        
        
    }

    function winLose(){

        if (userMatch === matchNumber){

            alert("You win!");
            wins++;
            temp = 0;
            red = 0;
            blue = 0;
            yellow = 0;
            purple = 0;
            numberToMatch();
            newGame();
        } 

        if (userMatch > matchNumber) {
            alert("You lose!");
            losses++;            
            temp = 0;
            red = 0;
            blue = 0;
            yellow = 0;
            purple = 0;
            numberToMatch();
            newGame();
            
        }
        
    }


});