// TWENTY ONE
// Malina Tran
// Oct 19, 2015
// Objective: one-player game of Blackjack with user playing against a dealer (computer). First to 21, or closest to 21 without going over, wins.

// * * * * * * * * * * * * * * * * * 
// THE UNIVERSE  * * * * * * * * * * 
// * * * * * * * * * * * * * * * * * 

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

// Produces new card for player or dealer
var getCard = function() {
  var randNum = Math.floor(Math.random() * 51);
  var card = deckOfCards.splice(randNum, 1);
  return card;
};

// * * * * * * * * * * * * * * * * * 
// THE GAME  * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * 

// (1)  Wager bet and show relevant buttons - line 97
// (2)  Post bet amount & official start of game - line 106
// (3b) Check Ace in player's hand - line 115
// (3a) Player is dealt cards - line 133
// (4b) Check Ace in dealer's hand - line 156
// (4a) Dealer is dealt cards - line 174
// (5)  If player hits, receives card - line 200
// (6)  If dealer's sum is less than 17, receives card - line 211
// (7)  Compare sums of player and dealer's hands - line 225
// (8)  Reset entire game – line 250

// (1) Wager bet and show relevant buttons
var makeBet = function($message1, $start, $input, $reset, $submit) {
  $message1.html('Welcome! How much money would you like to bet?');
  $start.hide();
  $input.show();
  $reset.show();
  $submit.show();
};

// (2) Post bet amount & official start of game
var startGame = function($bankroll, $bankrollmessage, $message1, $input, $submit) {
  var $bankroll = $input.val();
  $bankrollmessage.html('Your bankroll: $' + $bankroll);
  $message1.html('Press enter to deal cards.');
  $input.hide();
  $submit.hide();
};

// (3b) Check Ace in player's hand
var checkPlayerAce = function($displayPlayerTotal) {
  for (var i = 0; i < playerHand.length; i++) {
    if (playerHand[i][0]['name'] === 'Ace') {
      // If sum of cards < 21, change value of Ace from 1 to 11
      if (playerTotal < 21 && playerTotal <= 10) { 
        playerTotal += 10;
        $displayPlayerTotal.html(playerTotal);
      // If sum of card > 21, change value of Ace from 11 to 1
      } else if (playerTotal > 21 && playerHand.length >= 3) {
        dealerTotal -= 10;
      }
      return playerTotal; // is this necessary?
    }
  }
};

// (3a) Player is dealt cards
var dealToPlayer = function($message1, $message2, $hit, $stay, $playerContainer, $displayPlayerTotal) {
  $message1.html('Your cards: (click hit or stay)');
  $hit.show();
  $stay.show();
  // Get dealt two cards
  playerHand.push(getCard());
  playerHand.push(getCard());
  for (var i = 0; i < playerHand.length; i++) {
    // (a) Create div for each card in player's hand
    var $div = $('<div>').addClass('player');
    $div.html(playerHand[i][0]['name'] + ' ' + playerHand[i][0]['suit']);
    $playerContainer.prepend($div);
    // (b) Sum up the value in player's hand
    playerTotal += parseInt(playerHand[i][0].value);
    $displayPlayerTotal.html(playerTotal);
    // (c) Check if there's an Ace
    if (playerHand[i][0]['name'] === 'Ace') {
      checkPlayerAce($displayPlayerTotal);
    }
  }
};

// (4b) Check Ace in dealer's hand
var checkDealerAce = function($displayDealerTotal) {
  for (var i = 0; i < dealerHand.length; i++) {
    if (dealerHand[i][0]['name'] === 'Ace') {
      // If sum of cards < 21, change value of Ace from 1 to 11
      if (dealerTotal < 21 && dealerTotal <= 10) {
        dealerTotal += 10;
        $displayDealerTotal.html(dealerTotal);
        console.log('DEALER ACE!');
      // If sum of card > 21, change value of Ace from 11 to 1
      } else if (dealerTotal > 21 && dealerHand.length >= 3) {
        dealerTotal -= 10;
      }
      return dealerTotal; // is this necessary?
    }
  }
};

// (4a) Dealer is dealt cards
var dealToDealer = function($message2, $dealerContainer, $displayDealerTotal) {
  $message2.html('Dealer\'s cards:');
  // Get dealt two cards
  dealerHand.push(getCard());
  dealerHand.push(getCard());
  for (var i = 0; i < dealerHand.length; i++) {
    // (a) Create div for each card in dealer's hand
    var $div = $('<div>').addClass('dealer');
    $div.html(dealerHand[i][0]['name'] + ' ' + dealerHand[i][0]['suit']);
    $dealerContainer.prepend($div);
    // (b) Sum up the value in dealer's hand
    dealerTotal += parseInt(dealerHand[i][0].value);
    $displayDealerTotal.html(dealerTotal);
    // (c) Check if there's an Ace
    if (dealerHand[i][0]['name'] === 'Ace') {
      checkDealerAce($displayDealerTotal);
    }
  }

};

// (5) If player hits, receives card
var receiveCard = function($playerContainer, $displayPlayerTotal, $message1) {
  playerHand.unshift(getCard());
  checkPlayerAce($displayPlayerTotal);
  var $div = $('<div>').addClass('player');
  $div.html(playerHand[0][0]['name'] + ' ' + playerHand[0][0]['suit']);
  $playerContainer.append($div);
  playerTotal += parseInt(playerHand[0][0].value);
  $displayPlayerTotal.html(playerTotal);
};

// (6) If dealer's sum is less than 17, receives card
var checkDealersHand = function($dealerContainer, $displayDealerTotal, $message1) {
  if (dealerTotal <= 16) {
    while (dealerTotal <= 16) {
    dealerHand.unshift(getCard());
    checkDealerAce($displayDealerTotal);
    var $div = $('<div>').addClass('dealer');
    $div.html(dealerHand[0][0]['name'] + ' ' + dealerHand[0][0]['suit']);
    $dealerContainer.append($div);
    dealerTotal += parseInt(dealerHand[0][0].value);
    $displayDealerTotal.html(dealerTotal);
    }
    determineWinner($message1);
  } else {
    determineWinner($message1);
  }
};

// (7) Compare sums of player and dealer's hands
var determineWinner = function($message1) {
  if (playerTotal === 21 && dealerTotal === 21) {
    $message1.html('A very unlikely tie, but a tie indeed.');
  } else if (dealerTotal === 21) {
    $message1.html('Dealer wins');
  } else if (playerTotal === 21) {
    $message1.html('Player wins');
  } else if (playerTotal !== 21 && dealerTotal !== 21 && playerTotal === dealerTotal) {
    $message1.html('Tie!');
  } else if (playerTotal > 21 && dealerTotal < 21) {
    $message1.html('Player busted, dealer wins');
  } else if (dealerTotal > 21 && playerTotal < 21) {
    $message1.html('Dealer busted, player wins');
  } else if (playerTotal < 21 && dealerTotal < 21) {
    if (dealerTotal > playerTotal) {
      $message1.html('Dealer wins');
    } else if (playerTotal > dealerTotal) {
      $message1.html('Player wins');
    } 
  }
};

// (8) Reset entire gam
var resetGame = function($start, $reset, $hit, $stay, $message1, $message2, $input, $bankrollmessage, $displayPlayerTotal, $displayDealerTotal, $bankroll, $playerContainer, $dealerContainer) {
  $start.show();
  $reset.hide();
  $hit.hide();
  $stay.hide();
  $message1.html('');
  $message2.html('');
  $input.val('');
  $bankrollmessage.html('');
  $displayPlayerTotal.html('');
  $displayDealerTotal.html('');
  playerHand = [];
  dealerHand = [];
  playerTotal = 0;
  dealerTotal = 0;
  $bankroll = 0;
  $('.player').remove();
  $('.dealer').remove();
  makeBet();
};

// * * * * * * * * * * * * * * * * * 
// WINDOW.ONLOAD * * * * * * * * * * 
// * * * * * * * * * * * * * * * * * 

$(function() {
  var $start = $('#start').show();
  var $input = $('input').hide();
  var $reset = $('#reset');
  var $submit = $('#submit');
  var $message1 = $('#message1');
  $start.click(function(event) {
    makeBet($message1, $start, $input, $reset, $submit);
  });

  var $bankroll = $('#bankroll');
  var $bankrollmessage = $('#bankrollmessage');
  $submit.click(function(event) {
    startGame($bankroll, $bankrollmessage, $message1, $input, $submit);
  });

  var $message2 = $('#message2');
  var $hit = $('#hit');
  var $stay = $('#stay');
  var $playerContainer = $('#playerContainer');
  var $dealerContainer = $('#dealerContainer');
  var $displayPlayerTotal = $('#displayPlayerTotal');
  var $displayDealerTotal = $('#displayDealerTotal');
  $(document).keypress(function(event) {
    if (event.keyCode == 13) {
      dealToPlayer($message1, $message2, $hit, $stay, $playerContainer, $displayPlayerTotal);
      if (playerTotal === 21 || playerTotal > 21) {
        determineWinner($message1);
      } 
      dealToDealer($message2, $dealerContainer, $displayDealerTotal);
    }
  });
  
  $hit.click(function(event) {
    receiveCard($playerContainer, $displayPlayerTotal, $message1);
    if (playerTotal === 21 || playerTotal > 21) {
      determineWinner($message1);
    } 
  });

  $stay.click(function(event) {
    console.log("Hello");
    checkDealersHand($dealerContainer, $displayDealerTotal, $message1);
    determineWinner($message1); 
  });

  $reset.click(function(event) {
    resetGame($start, $reset, $hit, $stay, $message1, $message2, $input, $bankrollmessage, $displayPlayerTotal, $displayDealerTotal, $bankroll, $playerContainer, $dealerContainer);
  });

});