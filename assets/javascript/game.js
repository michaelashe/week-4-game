$(document).ready(function() {

var CrystalCollector = confirm("Play Collector?");

var minNumber = 19;
var maxNumber = 120;
var playerScore = 0;
var wins = 0;
var losses = 0;
var crystalArray = []
var blueCrystal = [];
var brownCrystal = [];
var pureCrystal = [];
var purpleCrystal = [];

function reset() {
	var minNumber = 19;
	var maxNumber = 120;
	playerScore = 0;
	var crystalArray = []
	var blueCrystal = [];
	var brownCrystal = [];
	var pureCrystal = [];
	var purpleCrystal = [];
	var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
		document.querySelector("#random").innerHTML = randomNumber;
		console.log(randomNumber);
	var crystalArray = Array.from({length: 4}, () => Math.floor(Math.random() * (12 - 1 + 1) + 1));
		console.log(crystalArray);
};

//Random number generator with value between 19 and 120//
var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
	document.querySelector("#random").innerHTML = randomNumber;
	console.log(randomNumber);

//All crystals generate random value for round being played//
var crystalArray = Array.from({length: 4}, () => Math.floor(Math.random() * (12 - 1 + 1) + 1));
	console.log(crystalArray);

$("#blue").on("click", function() {
	blueCrystal = crystalArray[0];
	$("#score").text(playerScore += blueCrystal);
	console.log(blueCrystal);
	checkScore();
	
});

$("#brown").on("click", function() {
	brownCrystal = crystalArray[1];
	$("#score").text(playerScore += brownCrystal);
	console.log(brownCrystal);
	checkScore();
	
});

$("#pure").on("click", function() {
	pureCrystal = crystalArray[2];
	$("#score").text(playerScore += pureCrystal);
	console.log(pureCrystal);
	checkScore();
	
});

$("#purple").on("click", function() {
	purpleCrystal = crystalArray[3];
	$("#score").text(playerScore += purpleCrystal);
	console.log(purpleCrystal);
	checkScore();
	
});

function checkScore() {
	if (playerScore == randomNumber) {
		alert("You WON!!");
		wins ++;
		$("#wins").text(wins);
		// reset();
		
		
	}if (playerScore > randomNumber) {
		alert("You LOST!!");
		losses ++;
		$("#losses").text(losses);
		//reset()
	};
};
});