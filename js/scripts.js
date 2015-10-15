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

var makeBet = function($message, $start, $input, $reset, $submit) {
  $message.html('Welcome! How much money would you like to bet?');
  $start.hide();
  $input.show();
  $reset.show();
  $submit.show();
};

var startGame = function($bankroll, $bankrollmessage, $message, $input, $submit) {
  var $bankroll = $input.val();
  $bankrollmessage.html('Your bankroll: $' + $bankroll);
  $message.html('Press enter to deal cards.');
  $input.hide();
  $submit.hide();
};

var checkPlayerAce = function(playerHand, $displayTotal) {
  for (var i = 0; i < playerHand.length; i++) {
    if (playerHand[i][0].name === 'Ace') {
      if (playerTotal < 21 && playerTotal <= 10) {
        playerTotal += 10 // changing value of Ace from 1 to 11
        $displayTotal.html(playerTotal);
        console.log('ACE!');
      } 
      return playerTotal;
    }
  }
};

// 2. 2 cards randomly dealt to player
var dealToPlayer = function($message, $message2, $hit, $stay, $playerCard, $dealerCard, $displayTotal) {
  $message.html('Your cards below: (click hit or stay)');
  $message2.html('Dealer\'s cards:');
  $hit.show();
  $stay.show();
  playerHand.push(getCard());
  playerHand.push(getCard());
  console.log(playerHand);
  playerTotal = parseInt(playerHand[0][0].value) + parseInt(playerHand[1][0].value);
  $displayTotal.html(playerTotal);
  console.log(playerTotal);
  $playerCard.show().html(playerHand[0][0].name + ' ' + playerHand[0][0].suit + ' ' + playerHand[1][0].name + ' ' + playerHand[1][0].suit);
  checkPlayerAce(playerHand, $displayTotal);
  dealToDealer($dealerCard);
};

var checkDealerAce = function(dealerHand) {
  for (var i = 0; i < playerHand.length; i++) {
    if (dealerHand[i][0].name === 'Ace') {
      if (dealerTotal < 21 && dealerTotal <= 10) {
        dealerTotal += 10 // changing value of Ace from 1 to 11
        console.log('ACE!');
      } 
      return dealerTotal;
    }
  }
};

// 3. 2 cards randomly dealt to dealer (1 card is revealed)
var dealToDealer = function($dealerCard) {
  dealerHand.push(getCard());
  dealerHand.push(getCard());
  console.log(dealerHand);
  dealerTotal = parseInt(dealerHand[0][0].value) + parseInt(dealerHand[1][0].value);
  console.log(dealerTotal);
  $dealerCard.show().html(dealerHand[0][0].name + ' ' + dealerHand[0][0].suit + ' ' + dealerHand[1][0].name + ' ' + dealerHand[1][0].suit);
  checkDealerAce(dealerHand);
  checkDealersHand();
};

// 4. Hit or stay? (function)
var hit = function() {
  playerHand.push(getCard());
};

var stay = function() {
  checkDealersHand();
};

// 7. Dealer's turn: if less than 17, get another card
var checkDealersHand = function() {
  while (dealerTotal < 17) {
    dealerHand.push(getCard());
  }
  return dealerHand;
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
  var $start = $('#start').show();
  var $input = $('input').hide();
  var $reset = $('#reset');
  var $submit = $('#submit');
  var $message = $('#message');
  $start.click(function(event) {
    makeBet($message, $start, $input, $reset, $submit);
  });

  var $bankroll = $('#bankroll');
  var $bankrollmessage = $('#bankrollmessage');
  $submit.click(function(event) {
    startGame($bankroll, $bankrollmessage, $message, $input, $submit);
  });

  var $message2 = $('#message2');
  var $hit = $('#hit');
  var $stay = $('#stay');
  var $playerCard = $('#playerCard');
  var $dealerCard = $('#dealerCard');
  var $displayTotal = $('#displayTotal');
  $(document).keypress(function(event) {
    if (event.keyCode == 13) {
      dealToPlayer($message, $message2, $hit, $stay, $playerCard, $dealerCard, $displayTotal);
    }
  });
  
  $hit.click(function(event) {
    hit();
  });

  $stay.click(function(event) {
    stay();
  });

});