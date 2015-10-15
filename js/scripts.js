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

var checkPlayerAce = function($displayTotal) {
  for (var i = 0; i < playerHand.length; i++) {
    if (playerHand[i][0].name === 'Ace') {
      if (playerTotal < 21 && playerTotal <= 10) {
        playerTotal += 10; // changing value of Ace from 1 to 11
        $displayTotal.html(playerTotal);
        console.log('PLAYER ACE!');
      } 
      return playerTotal;
    }
  }
};

// 2. 2 cards randomly dealt to player
var dealToPlayer = function($message, $message2, $hit, $stay, $playerCard, $displayTotal) {
  $message.html('Your cards below: (click hit or stay)');
  $message2.html('Dealer\'s cards:');
  $hit.show();
  $stay.show();
  playerHand.push(getCard());
  playerHand.push(getCard());
  for (var i = 0; i < playerHand.length; i++) {
    playerTotal += parseInt(playerHand[i][0].value);
    if (playerHand[i][0].name === "Ace") {
      checkPlayerAce($displayTotal);
    }
  }
  $displayTotal.html(playerTotal);
  // for (var i = 0; i < playerHand.length; i++) {
  //   $playerCard.show();
  //   $playerCard.html(playerHand[i][0].name, playerHand[i][0].suit);
  // }
  $playerCard.show().html(playerHand[0][0].name + ' ' + playerHand[0][0].suit + ', ' + playerHand[1][0].name + ' ' + playerHand[1][0].suit);
  // dealToDealer($dealerCard, $displayTotal2);
};

var checkDealerAce = function($displayTotal2) {
  for (var i = 0; i < dealerHand.length; i++) {
    if (dealerHand[i][0].name === 'Ace') {
      if (dealerTotal < 21 && dealerTotal <= 10) {
        dealerTotal += 10; // changing value of Ace from 1 to 11
        $displayTotal2.html(dealerTotal);
        console.log('DEALER ACE!');
      } 
      return dealerTotal;
    }
  }
};

// 3. 2 cards randomly dealt to dealer (1 card is revealed)
var dealToDealer = function($dealerCard, $displayTotal2) {
  dealerHand.push(getCard());
  dealerHand.push(getCard());
  console.log(dealerHand);
  for (var i = 0; i < dealerHand.length; i++) {
    dealerTotal += parseInt(dealerHand[i][0].value);
    if (dealerHand[i][0].name === "Ace") {
      checkDealerAce($displayTotal2);
    }
  }
  $displayTotal2.html(dealerTotal);
  // for (var i = 0; i < dealerHand.length; i++) {
  //   $dealerCard.show();
  //   $dealerCard.html(dealerHand[i][0].name, dealerHand[i][0].suit);
  // }
  $dealerCard.show().text(dealerHand[0][0].name + ' ' + dealerHand[0][0].suit + ', ' + dealerHand[1][0].name + ' ' + dealerHand[1][0].suit);
  // checkDealersHand($dealerCard, $displayTotal2);
};

// 4. Hit or stay? (function)
var receiveCard = function($displayTotal, $playerCard) {
  playerHand.push(getCard());
  $playerCard.html(playerHand[0][0].name + ' ' + playerHand[0][0].suit + ', ' + playerHand[1][0].name + ' ' + playerHand[1][0].suit + ',' + playerHand[2][0].name + ' ' + player[2][0].suit);
  $displayTotal.html(playerTotal);
  // for (var i = 0; i < playerHand.length; i++) {
  //   $playerCard.html(playerHand[i][0].name, playerHand[i][0].suit);
  // }
};

// 7. Dealer's turn: if less than 17, get another card
var checkDealersHand = function($dealerCard, $displayTotal2, $message) {
  if (dealerTotal < 17) {
    dealerHand.push(getCard());
    $dealerCard.html(dealerHand[0][0].name + ' ' + dealerHand[0][0].suit + ', ' + dealerHand[1][0].name + ' ' + dealerHand[1][0].suit + ', ' + dealerHand[2][0].name + ' ' + dealerHand[2][0].suit);
  }
  $displayTotal2.html(dealerTotal);
  // for (var i = 0; i < dealerHand.length; i++) {
  //   $dealerCard.html(dealerHand[i][0].name, dealerHand[i][0].suit);
  // }
};

var determineWinner = function($message) {
  console.log('determining winner');
  if (playerTotal === 21 && dealerTotal === 21) {
    $message.html('A very unlikely tie, but a tie indeed.');
  } else if (dealerTotal === 21) {
    $message.html('Dealer wins');
  } else if (playerTotal === 21) {
    $message.html('Player wins');
  } else if (playerTotal !== 21 && dealerTotal !== 21 && playerTotal === dealerTotal) {
    $message.html('Tie!');
  } else if (playerTotal > 21 && dealerTotal < 21) {
    $message.html('Player busted, dealer wins');
  } else if (dealerTotal > 21 && playerTotal < 21) {
    $message.html('Dealer busted, player wins');
  } else {
    if (playerTotal > dealerTotal) {
      $message.html('Player wins');
    } else if (playerTotal < dealerTotal) {
      $message.html('Dealer wins');
    }
  }
  // reveal dealer's 2nd card
};

var reset = function() {

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
  var $displayTotal2 = $('#displayTotal2');
  $(document).keypress(function(event) {
    if (event.keyCode == 13) {
      dealToPlayer($message, $message2, $hit, $stay, $playerCard, $displayTotal);
      dealToDealer($dealerCard, $displayTotal2);
      checkDealersHand($dealerCard, $displayTotal2);
    }
  });
  
  $hit.click(function(event) {
    receiveCard($playerCard, $displayTotal);
  });

  $stay.click(function(event) {
    determineWinner($message);
  });

});