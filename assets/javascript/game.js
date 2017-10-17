var CrystalCollector = confirm("Play Collector?");

var minNumber = 19;
var maxNumber = 120;

var playerScore = [];
var crystalArray = []
var blueCrystal = [];
var brownCrystal = [];
var pureCrystal = [];
var purpleCrystal = [];


//Random number generator with value between 19 and 120//
var randomNumber = [Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)];
	document.querySelector("#random").innerHTML = randomNumber;
	console.log(randomNumber);

//All crystals generate random value for round being played//
var crystalArray = Array.from({length: 4}, () => Math.floor(Math.random() * (12 - 1 + 1) + 1));
	console.log(crystalArray);

