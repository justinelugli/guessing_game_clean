	var wins = 0;
	var losses = 0;

	
		
function myFunction() { 
    var number = Math.floor((Math.random() *10) +1);
	var guess = Number(prompt("Guess a number between 1 and 10"));
	console.log("guess", guess);
	console.log("type of guess", typeof(guess))
	if (guess === number) {
		alert("Good Job! You win! The number is" + " " + number);
		wins += 1;
		
	}

	else if (guess !== number) { 
		
		alert("You Lose! the correct answer is" + " " + number);
		losses += 1;
		
	};
	console.log("losses", losses);
	console.log("wins", wins);


var el = document.getElementById('wins');
el.innerHTML = wins;

var el2 = document.getElementById('losses');
el2.innerHTML = losses;
	}