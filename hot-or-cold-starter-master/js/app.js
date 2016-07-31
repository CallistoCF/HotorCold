
$(document).ready(function(){
	var guesses = 0;
	var goal = Math.floor((Math.random() * 100) + 1);
	console.log("Starting target is " + goal);
	$("#count").text(parseInt(guesses));
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("a.new").click(function(){
  		newgame();
  	});

  	$("input#guessButton").click(function() {
  		var a = parseInt($("#userGuess").val());
  		if (a > 0 && a < 100)
  		{
			console.log("you guessed " + $("#userGuess").val());
  			$("#guessList").append("<li>" + $("#userGuess").val() + "</li>");
  			guesses++;
  			hotorcold(a, goal, guesses);
  			$("#count").text(parseInt(guesses));
  			event.preventDefault();
  		}
  		else{
  			console.log("invalid entry");
  			alert("Hey now, number is between 0 and 100");
  		}
  		
  		
  	})

});

function newgame(){
	var guesses = 0;
	$("#count").text(parseInt(guesses));
	goal = Math.floor((Math.random() * 100) + 1);
	console.log("New target is " + goal);
}

function hotorcold(num, goal, guesses){
	var d = 0;
	console.log("hot or cold running!");
	var str = "";
	d = Math.abs(num - goal);	
	if (d > 25){
		
		if (d > 50)
		{
			str = "Super Duper";
		}
		if (d >= 25 && d <= 50)
		{
			str = "Very ";
		}
		$("#feedback").text(str + " Cold!");
		event.preventDefault();
				}
	if (d <= 25)
	{
		if (d < 24 && d>10)
		{
			str = "Kinda Sorta ";
		}
		if (d <= 10)
		{
			str = "Very Very";
		}
		if (d < 5 && d!=0)
		{
			str = "Super Duper";
		}
		$("#feedback").text(str + " Hot!");
		event.preventDefault();
	}
	if (num == goal || d == 0)
	{
		$("#feedback").text("You Win!");
		alert("Congratulations, you win!  \n It only took you " + guesses + " guesses to do so!");
	}
	console.log("D is " + d);
	event.preventDefault();
}

