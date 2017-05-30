//Document ready function
//$(document).ready(function() {}


//Global variables

var numWins = 0;
var numLosses = 0;


//timer
	var timer = 0;

//Trivia questions, possible answers, correct answer and correct/incorrect gifs.


	var question1 = {
		actualQuestion:"What is Rick's last name?",
		answer1:"Williams",
		answer2:"Sanchez",
		answer3:"Mortimer",
		answer4:"Ricky",
		correctAnswer:answer2
	
	};

	var question2 = {
		actualQuestion: "What fast food item that is no longer available is Rick trying to bring back?",
		answer1: "Angry Whopper",
		answer2: "Wendy's salad bar",
		answer3: "McRib",
		answer4: "McDonald's Mulan SzeChuan sauce",
		correctAnswer: answer4
		
	};

	var question3 = {
		actualQuestion: "How does the family find out that Mr. Poopy Butthole isn't a parasite?",
		answer1: "Beth shoots him.",
		answer2: "They get an xray of him.",
		answer3: "Rick remembers where he is from.",
		answer4: "He pulls out his passport.",
		correctAnswer: answer1
	
	};

	var question4 = {
		actualQuestion: "The original title of the show was called...?", 
		answer1: "Travelling through the Multiverse",
		answer2: "Gramps and Shorty",
		answer3: "The Real Animated Aventures Of Doc And Mharti",
		answer4: "Multidimensional Adventures",
		correctAnswer: answer3

	};

	var question5 = {
		actualQuestion: "What other show does the coffee cup, notepad and pencil come from when they fly in through a portal?",
		answer1: "Ren and Stimpy",
		answer2: "He-man and the Masters of the Universe",
		answer3: "Courage the Cowardly Dog",
		answer4: "Gravity Falls",
		correctAnswer: answer4

	};

	var question6 = {
		actualQuestion: "How does Morty's game of Roy end?",
		answer1: "He falls off a ladder in a carpet store and dies.",
		answer2: "He gets the highest score and wins a prize.",
		answer3: "Rick jumps into the game and wins it for him.",
		answer4: "He shoots a goverment official and gets condemned to death.",
		correctAnswer: answer1
	
	};	

	var question7 = {
		actualQuestion: "The electricity in Rick's car is generated by ...?",
		answer1: "a battery purchased in an interplanetary store.",
		answer2: "solar power",
		answer3: "Rick jumps into the game and wins it for him.",
		answer4: "a microverse created by Rick.",
		correctAnswer: answer4
	
	};

	var question8 = {
		actualQuestion: "What song is playing when Rick and Arthricia go on a killing rampage during a purge?",
		answer1: "Shake it Off by Taylor Swift",
		answer2: "Harder, Better, Faster Stronger by Daft Punk",
		answer3: "I Feel Good by James Brown",
		answer4: "Feels Good by Tony! Toni! Toné!",
		correctAnswer: answer4
	
	};

	var question9 = {
		actualQuestion: "What dimension does Rick claim to be from?",
		answer1: "A-42",
		answer2: "C-137",
		answer3: "C-157",
		answer4: "The Squanch dimension",
		correctAnswer: answer2

	};

	var question10 = {
		actualQuestion: "What is the name of Morty's crush in Rick Potion Number 9?", 
		answer1: "Jennifer",
		answer2: "Amber",
		answer3: "Mark",
		answer4: "Jessica",
		correctAnswer: answer4
	
	};

//Functions
//___________________________________________________________________

//Hides question section until start button is clicked
$("#questionSection").hide();

//Shows question section and timer when start button is clicked
$("#startButton").click(function(){
    $("#questionSection").show();
});

//Populates question and possible answers into question section for a 10 second interval

	$("#question").html(question1.actualQuestion);
	$("#answer1").html(question1.answer1);
	$("#answer2").html(question1.answer2);
	$("#answer3").html(question1.answer3);
	$("#answer4").html(question1.answer4);





//When start button is clicked, the first question with possible answers will populate


