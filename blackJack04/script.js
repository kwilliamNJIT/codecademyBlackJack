// Our deal function will return a random card
var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};

// Deal out our first hand
var card1 = deal();
var card2 = deal();

// This function takes a card as a parameter and returns the value
// of that card
var getValue = function(card) {
  // if its a face card, number should be set to 10        
    if (card % 13 > 10 || card % 13 == 0) {
        return 10;
    }
  // What if it's an ace?
    else if (card % 13 == 1) {
        return 11;
    }
  // Otherwise, we just want its number value
  else {
      return card % 13;
  }
}
        
// Score the hand
function score(card1, card2) {
  return getValue(card1) + getValue(card2);
}


// Added if conditional to test for a score of 21 for blackjack
if (score(card1, card2) == 21) {
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score(card1, card2) + " BLACKJACK!!!");    
} 
else {
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score(card1, card2));    
}