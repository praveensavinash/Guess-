// generation of random value

// count of attempts
// until hit
  
// function for the number sent by the user




var y = Math.floor(Math.random() * 10 + 1);
playername=localStorage.getItem("player_name")
var guess=1;
function submit(){

var x = document.getElementById("guessFeild").value;

if(x == y)
{
    alert("CONGRATUALATIONS!!!"+playername+"  YOU GUESSED IT RIGHT IN "
           + guess + " GUESS ");
     guess=1;
}

else if(x > y)

{
    guess++;
    alert("OPPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}

}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
