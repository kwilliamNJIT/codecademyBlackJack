// Make your card constructor again here, but make sure to use private
// variables!
var Card = function(s, n) {
	var suit = s;
  	var number = n;
  
  	this.getSuit = function() {
    	return suit;  
  	};
  
  	this.getNumber = function() {
    	return number;  
  	};
  
  	this.getValue = function() {
      
      	if (number >= 11) {
          	return 10;
      	} else if (number === 1) {
          	return 11;
      	} else {
          	return number;
      	}
  	};
};

var Hand = function() {
    this.card1 = deal();
    this.card2 = deal();
    
    this.score = function() {
      	return this.card1.getValue() + this.card2.getValue();  
    };
};

// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function() {
  	var s = Math.floor(Math.random() * 4 + 1);
  	var num = Math.floor(Math.random() * 13 +1);
  
  	return new Card(s,num);
};

// examples of the deal function in action
function runGame() {
	var card1 = deal();
	var card2 = deal();

	var myHand = new Hand(); 
	var yourHand = new Hand();

	document.getElementById("myScore").innerHTML= "I scored a <span>" + myHand.score() + "</span>";
	document.getElementById("yourScore").innerHTML= "You scored a <span>" + yourHand.score() + "</span>";

	if(yourHand.score() > myHand.score()) 
    	document.getElementById("result").innerHTML= "YOU WIN!!!"; 
	else if(yourHand.score() < myHand.score()) 
    	document.getElementById("result").innerHTML= "I WIN!!!"; 
	else 
		document.getElementById("result").innerHTML= "We TIED!!!";

}