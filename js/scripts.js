// BLACKJACK
// Malina Tran

// - - - - - - - - - - - - - - - - - 
// THE UNIVERSE
// - - - - - - - - - - - - - - - - - 

// The Player
var playerHand = [];
var playerTotal = 0;
var $bankroll = 0;

// // The Dealer
var dealerHand = [];
var dealerTotal = 0;

// The Deck of Cards
var deckOfCards = [
  { name: 'Ace', value : 1, suit: 'clubs' },
  { name: '2', value : 2, suit: 'clubs' },
  { name: '3', value: 3, suit: 'clubs' },
  { name: '4', value: 4 , suit: 'clubs' },
  { name: '5', value: 5, suit: 'clubs' },
  { name: '6', value: 6, suit: 'clubs' },
  { name: '7', value: 7, suit: 'clubs' },
  { name: '8', value: 8, suit: 'clubs' },
  { name: '9', value: 9, suit: 'clubs' },
  { name: '10', value: 10, suit: 'clubs' },
  { name: 'Jack', value: 10, suit: 'clubs' },
  { name: 'Queen', value: 10, suit: 'clubs' },
  { name: 'King', value: 10, suit: 'clubs' },
  { name: 'Ace', value : 1, suit: 'diamonds' },
  { name: '2', value : 2, suit: 'diamonds' },
  { name: '3', value: 3, suit: 'diamonds' },
  { name: '4', value: 4 , suit: 'diamonds' },
  { name: '5', value: 5, suit: 'diamonds' },
  { name: '6', value: 6, suit: 'diamonds' },
  { name: '7', value: 7, suit: 'diamonds' },
  { name: '8', value: 8, suit: 'diamonds' },
  { name: '9', value: 9, suit: 'diamonds' },
  { name: '10', value: 10, suit: 'diamonds' },
  { name: 'Jack', value: 10, suit: 'diamonds' },
  { name: 'Queen', value: 10, suit: 'diamonds' },
  { name: 'King', value: 10, suit: 'diamonds' },
  { name: 'Ace', value : 1, suit: 'hearts' },
  { name: '2', value : 2, suit: 'hearts' },
  { name: '3', value: 3, suit: 'hearts' },
  { name: '4', value: 4 , suit: 'hearts' },
  { name: '5', value: 5, suit: 'hearts' },
  { name: '6', value: 6, suit: 'hearts' },
  { name: '7', value: 7, suit: 'hearts' },
  { name: '8', value: 8, suit: 'hearts' },
  { name: '9', value: 9, suit: 'hearts' },
  { name: '10', value: 10, suit: 'hearts' },
  { name: 'Jack', value: 10, suit: 'hearts' },
  { name: 'Queen', value: 10, suit: 'hearts' },
  { name: 'King', value: 10, suit: 'hearts' },
  { name: 'Ace', value : 1, suit: 'spades' },
  { name: '2', value : 2, suit: 'spades' },
  { name: '3', value: 3, suit: 'spades' },
  { name: '4', value: 4 , suit: 'spades' },
  { name: '5', value: 5, suit: 'spades' },
  { name: '6', value: 6, suit: 'spades' },
  { name: '7', value: 7, suit: 'spades' },
  { name: '8', value: 8, suit: 'spades' },
  { name: '9', value: 9, suit: 'spades' },
  { name: '10', value: 10, suit: 'spades' },
  { name: 'Jack', value: 10, suit: 'spades' },
  { name: 'Queen', value: 10, suit: 'spades' },
  { name: 'King', value: 10, suit: 'spades' }
];

var getCard = function() {
  var randNum = Math.floor(Math.random() * 51);
  var card = deckOfCards.splice(randNum, 1);
  return card;
};


// - - - - - - - - - - - - - - - - - 
// THE GAME
// - - - - - - - - - - - - - - - - - 
// 1. Place bet (function)
var $message = $('#message');
var makeBet = function() {
  $message.html('Welcome! How much money would you like to bet?');
};

var $message = $('#message');
var $bankrollmessage = $('#bankrollmessage');
var $submit = $('#submit');
var $input = $('input');
var updateBankroll = function() {
  $message.html('');
  var $bankroll = $input.val();
  $bankrollmessage.html('Your bankroll: $' + $bankroll);
  $submit.hide();
  $input.hide();
  dealToPlayer();
};

var checkForAce = function(card1, card2) {
  // var cardSum = parseInt(card1.value) + parseInt(card2.value);
  // if (card1.name === 'Ace' || card2.name === 'Ace') {
  //   if (cardSum < 21 && cardSum <= 10) {
  //     return (cardSum + 10); // choosing 11 as value for Ace
  //   } else if (cardSum > 21) {
  //     return cardSum;
  //   } else if (cardSum === 21) {
  //     return cardSum;
  //   }
  // }
};

// 2. 2 cards randomly dealt to player
var $playerhand = $('#playerhand');
var dealToPlayer = function() {
  playerHand.push(getCard());
  playerHand.push(getCard());
  playerTotal = parseInt(playerHand[0][0].value) + parseInt(playerHand[1][0].value);
  console.log(playerHand);
  console.log(playerTotal);
  $playerhand.show().html('Card 1: ' + playerHand[0][0].name + " " +playerHand[0][0].suit + ' Card 2: ' + playerHand[1][0].name + " " + playerHand[1][0].suit);
  // checkForAce(playerCard1, playerCard2);
  // console.log(playerTotal);
  // console.log(playerHand);
  dealToDealer();
};

// 3. 2 cards randomly dealt to dealer (1 card is revealed)
var dealToDealer = function() {
  // dealerHand.push(getCard());
  // dealerHand.push(getCard());
  // var dealerCard1 = parseInt(dealerHand[0].value);
  // var dealerCard2 = parseInt(dealerHand[1].value);
  // var dealerTotal = dealerCard1 + dealerCard2;
  // checkForAce(dealerCard1, dealerCard2);
  // console.log(dealerTotal);
  // console.log(dealerHand);
  // hitOrStay();
};

// 4. Hit or stay? (function)
var hitOrStay = function() {
  // if (playerTotal < 21) {
  //   $message.html('Do you want to hit or stay?');
  //   playerTotal += playerHand.push(getCard());
  // } else {
  //   checkDealersHand();
  // }
};

// 7. Dealer's turn: if less than 17, get another card
var checkDealersHand = function() {

};

// 8. Determine winner (function)
// 8a. If player === 21 && dealer === 21, tie
// 8b. If player < 21 && player > dealer, player wins
// 8c. If dealer < 21 && dealer < player, dealer wins
// 8d. If player > 21, bust & dealer wins
// 8e. if dealer > 21, bust & player wins
var determineWinner = function() {

};

// - - - - - - - - - - - - - - - - - 
// WINDOW.ONLOAD
// - - - - - - - - - - - - - - - - - 
$(function() {
// 0. start.onclick
// 0a. Divs representing playerHand, playerBankroll, and dealerHand will appear
// 0b. Hide start button
// 0c. Show reset button
// 0d. Show input
// 0e. Show submit button
  var $start = $('#start').show();
  var $input = $('input').hide();
  var $reset = $('#reset');
  var $submit = $('#submit');
  var $input = $('input');
  $start.click(function(event) {
    $start.hide();
    $start.hide();
    $reset.show();
    $submit.show();
    $input.show();
    makeBet();
  });

  var $submit = $('#submit');
  var $bankroll = $('#bankroll');
  $submit.click(function(event) {
    updateBankroll();
  });

  var $hit = $('#hit');
  $hit.click(function(event) {
    hitOrStay();
  });

  var $stay = $('#stay');
  $stay.click(function(event) {
    hitOrStay();
  });


// 1. Hit.onclick
// 1a. Pop 
// 2. Stay.onclick
// 2a. 

});