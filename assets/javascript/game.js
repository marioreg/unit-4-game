
//Define variables

var wins =0;
var losses =0;
var red = 0;
var blue = 0;
var yellow = 0;;
var purple = 0;
var matchNumber=0;
var userMatch = 0;
$('#wins').text("Wins: " + wins);
$('#losses').text("losses: " +losses);

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
        userMatch = 0;
        $("#total-score").text(userMatch);

        //function that generates a random number when user clicks on the red crystal and saves it to a variable
        //it also adds the vaule to the current score
        $("#crystal1").click(function redCrystal(){
        red = Math.ceil(Math.random()*12);
        userMatch = userMatch + red;
        $("#total-score").text(userMatch);
         console.log("The red crystal has a vaule of " + red);
        
        });
    //function that generates a random number when user clicks on the blue crystal and saves it to a variable
    //it also adds the vaule to the current score

    $("#crystal2").click(function blueCrystal(){
        blue = Math.ceil(Math.random()*12);
        userMatch = userMatch + blue;
        $("#total-score").text(userMatch);
        console.log("The blue crystal has a vaule of " + blue);
        });

    //function that generates a random number when user clicks on the yellow crystal and saves it to a variable
    //it also adds the vaule to the current score

    $("#crystal3").click(function yellowCrystal(){
        yellow = Math.ceil(Math.random()*12);
        userMatch = userMatch + yellow;
        $("#total-score").text(userMatch);
        console.log("The yellow crystal has a vaule of " + yellow);
        });

    //function that generates a random number when user clicks on the purple crystal and saves it to a variable
    //it also adds the vaule to the current score
    $("#crystal4").click(function purpleCrystal(){
       
        purple = Math.ceil(Math.random()*12);
        userMatch = userMatch + purple;
        $("#total-score").text(userMatch);
        console.log("The purple crystal has a vaule of " + purple);
        
        });

 

  
    }


    
























});