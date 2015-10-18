// TWENTY ONE
// Malina Tran
// Oct 19, 2015
// Objective: one-player game of Blackjack with user playing against a dealer (computer). First to 21, or closest to 21 without going over, wins.

// * * * * * * * * * * * * * * * * * 
// THE UNIVERSE  * * * * * * * * * * 
// * * * * * * * * * * * * * * * * * 
var pressEnter = true;
var bankroll = 1000;

// The Player
var playerHand = [];
var playerTotal = 0;

// // The Dealer
var dealerHand = [];
var dealerTotal = 0;

// The Deck of Cards
var deckOfCards = [
  { name: 'A', value: 11, suit: '&clubs;' },
  { name: '2', value: 2, suit: '&clubs;' },
  { name: '3', value: 3, suit: '&clubs;' },
  { name: '4', value: 4, suit: '&clubs;' },
  { name: '5', value: 5, suit: '&clubs;' },
  { name: '6', value: 6, suit: '&clubs;' },
  { name: '7', value: 7, suit: '&clubs;' },
  { name: '8', value: 8, suit: '&clubs;' },
  { name: '9', value: 9, suit: '&clubs;' },
  { name: '10', value: 10, suit: '&clubs;' },
  { name: 'J', value: 10, suit: '&clubs;' },
  { name: 'Q', value: 10, suit: '&clubs;' },
  { name: 'K', value: 10, suit: '&clubs;' },
  { name: 'A', value: 11, suit: '&diams;' },
  { name: '2', value: 2, suit: '&diams;' },
  { name: '3', value: 3, suit: '&diams;' },
  { name: '4', value: 4, suit: '&diams;' },
  { name: '5', value: 5, suit: '&diams;' },
  { name: '6', value: 6, suit: '&diams;' },
  { name: '7', value: 7, suit: '&diams;' },
  { name: '8', value: 8, suit: '&diams;' },
  { name: '9', value: 9, suit: '&diams;' },
  { name: '10', value: 10, suit: '&diams;' },
  { name: 'J', value: 10, suit: '&diams;' },
  { name: 'Q', value: 10, suit: '&diams;' },
  { name: 'K', value: 10, suit: '&diams;' },
  { name: 'A', value: 11, suit: '&hearts;' },
  { name: '2', value: 2, suit: '&hearts;' },
  { name: '3', value: 3, suit: '&hearts;' },
  { name: '4', value: 4 , suit: '&hearts;' },
  { name: '5', value: 5, suit: '&hearts;' },
  { name: '6', value: 6, suit: '&hearts;' },
  { name: '7', value: 7, suit: '&hearts;' },
  { name: '8', value: 8, suit: '&hearts;' },
  { name: '9', value: 9, suit: '&hearts;' },
  { name: '10', value: 10, suit: '&hearts;' },
  { name: 'J', value: 10, suit: '&hearts;' },
  { name: 'Q', value: 10, suit: '&hearts;' },
  { name: 'K', value: 10, suit: '&hearts;' },
  { name: 'A', value: 11, suit: '&spades;' },
  { name: '2', value: 2, suit: '&spades;' },
  { name: '3', value: 3, suit: '&spades;' },
  { name: '4', value: 4 , suit: '&spades;' },
  { name: '5', value: 5, suit: '&spades;' },
  { name: '6', value: 6, suit: '&spades;' },
  { name: '7', value: 7, suit: '&spades;' },
  { name: '8', value: 8, suit: '&spades;' },
  { name: '9', value: 9, suit: '&spades;' },
  { name: '10', value: 10, suit: '&spades;' },
  { name: 'J', value: 10, suit: '&spades;' },
  { name: 'Q', value: 10, suit: '&spades;' },
  { name: 'K', value: 10, suit: '&spades;' }
];

// Produces new card for player or dealer
var getCard = function() {
  var randNum = Math.floor(Math.random() * deckOfCards.length);
  var card = deckOfCards.splice(randNum, 1);
  return card[0];
};

// * * * * * * * * * * * * * * * * * 
// THE GAME  * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * 

// (1)  Wager bet and show relevant buttons - line 100
// (2)  Post bet amount & official start of game - line 108
// (3b) Check Ace in player's hand - line 117
// (3a) Player is dealt cards - line 131
// (4b) Check Ace in dealer's hand - line 158
// (4a) Dealer is dealt cards - line 171
// (5)  If player hits, receives card - line 196
// (6)  If dealer's sum is less than 17, receives card - line 208
// (7)  Compare sums of player and dealer's hands - line 226
// (8)  If player wins – line 262
// (9)  If dealer wins – line 269
// (10)  Reset entire game – line 276

// (1) Wager bet and show relevant buttons
var makeBet = function($message1, $start, $input, $reset, $submit) {
  $message1.html('YOU HAVE $' + bankroll + '. PLEASE ENTER YOUR WAGER:');
  $start.hide();
  $input.show();
  $reset.show();
  $submit.show();
};

// (2) Post bet amount & official start of game
var startGame = function($bankrollmessage, $bankrollmessage2, $message1, $amount, $submit, $input) {
  $bankrollmessage.html('WAGER: $' + $amount);
  $bankrollmessage2.html('BANKROLL: $' + bankroll);
  $message1.html('I\'M FEELING LUCKY.').append("<img id='dice' src='img/dice.png'>").append('<div id="enter">(PRESS ENTER)</div>');
  $input.hide();
  $submit.hide();
};

// (3b) Check Ace in player's hand
var checkPlayerAce = function($displayPlayerTotal) {
  for (var i = 0; i < playerHand.length; i++) {
    if (playerHand[i]['name'] === 'Ace') {
      if (playerTotal > 21) {
        dealerHand[i].value = 1;
        $displayPlayerTotal.html('YOUR CARDS: ' + playerTotal);
        playerTotal -= 10;
        return playerTotal;
      }
    }
  } 
};

// (3a) Player is dealt cards
var dealToPlayer = function($message1, $message2, $hit, $or, $stay, $playerContainer, $displayPlayerTotal) {
  pressEnter = false;
  // $play.show();
  $message1.html('CHOOSE ONE:');
  $hit.show();
  $or.show();
  $stay.show();
  // Get dealt two cards
  playerHand.push(getCard());
  playerHand.push(getCard());
  for (var i = 0; i < playerHand.length; i++) {
    // (a) Create div for each card in player's hand
    var $div = $('<div>').addClass('player');
    $div.html(playerHand[i]['name'] + ' ' + playerHand[i]['suit']);
    $playerContainer.append($div);
    // (b) Sum up the value in player's hand
    playerTotal += parseInt(playerHand[i].value);
    // (c) Check if there's an Ace
    if (playerHand[i]['name'] === 'Ace') {
      $displayPlayerTotal.html('YOUR CARDS: ' + playerTotal);
      checkPlayerAce($displayPlayerTotal);
    } else {
      $displayPlayerTotal.html('YOUR CARDS: ' + playerTotal);
    }
  }
};

// (4b) Check Ace in dealer's hand
var checkDealerAce = function() {
  for (var i = 0; i < dealerHand.length; i++) {
    if (dealerHand[i]['name'] === 'Ace') {
      if (dealerTotal > 21) {
        dealerHand[i].value = 1;
        dealerTotal -= 10;
        return dealerTotal;
      }
    }
  } 
};

// (4a) Dealer is dealt cards
var dealToDealer = function($message2, $dealerContainer) {
  $message2.html('DEALER\'S CARDS:');
  dealerHand.push(getCard());
  dealerHand.push(getCard());
  for (var i = 0; i < dealerHand.length; i++) {
    // (a) Create div for each card in dealer's hand
    var $div = $('<div>').addClass('dealer');
    $div.html(dealerHand[i]['name'] + ' ' + dealerHand[i]['suit']);
    $dealerContainer.append($div);
    // (b) Sum up the value in dealer's hand
    dealerTotal += parseInt(dealerHand[i].value);
  }
  // (c) Hide last card and add empty card
  $('.dealer:last-child').hide();
  $div = $("<div id='mystery'>").addClass('dealer');
  $dealerContainer.append($div);
  // (d) Check if there's an Ace
  for (var i = 0; i < dealerHand.length; i++) {
    if (dealerHand[i]['name'] === 'Ace') {
      checkDealerAce();
    }
  }
};

// (5) If player hits, receives card
var receiveCard = function($playerContainer, $displayPlayerTotal) {
  var newCard = getCard();
  playerHand.push(newCard);
  checkPlayerAce($displayPlayerTotal);
  var $div = $('<div>').addClass('player');
  $div.html(newCard['name'] + ' ' + newCard['suit']);
  $playerContainer.append($div);
  playerTotal += parseInt(newCard.value);
  $displayPlayerTotal.html('YOUR CARDS: ' + playerTotal);
};

// (6) If dealer's sum is less than 17, receives card
var checkDealersHand = function($hit, $or, $stay, $message2, $dealerContainer, $message1, $amount, $bankrollmessage, $bankrollmessage2) {
  $message2.html('DEALER\'S CARDS:');
  if (dealerTotal <= 16) {
    while (dealerTotal <= 16) {
      var newCard = getCard();
      dealerHand.push(newCard);
      checkDealerAce();
      var $div = $('<div>').addClass('dealer');
      $div.html(newCard['name'] + ' ' + newCard['suit']);
      $dealerContainer.append($div);
      dealerTotal += parseInt(newCard.value);
      }
      determineWinner($hit, $or, $stay, $message2, $message1, $amount, $bankrollmessage, $bankrollmessage2);
  } else {
    determineWinner($hit, $or, $stay, $message2, $message1, $amount, $bankrollmessage, $bankrollmessage2);
  }
};

// (7) Compare sums of player and dealer's hands
var determineWinner = function($hit, $or, $stay, $message2, $message1, $amount, $bankrollmessage, $bankrollmessage2) {
  $hit.hide();
  $or.hide();
  $stay.hide();
  $message2.html('DEALER\'S CARDS: ' + dealerTotal);
  $('.dealer:nth-child(3n)').show();
  $('.dealer:nth-child(4n').hide();
  if (playerTotal === 21 && dealerTotal === 21) {
    $message1.html('A VERY UNLIKELY TIE, BUT A TIE INDEED.');
  } else if (playerTotal === 21 && dealerTotal < 21) {
      $message1.html('VEGAS, HERE WE COME!');
      playerWins($amount, $bankrollmessage, $bankrollmessage2, $message2); 
  } else if (dealerTotal === 21 && playerTotal < 21) {
      $message1.html('MAYBE IN THE NEXT ROUND. . .');
      dealerWins($amount, $bankrollmessage, $bankrollmessage2, $message2); 
  } else if (playerTotal !== 21 && dealerTotal !== 21 && playerTotal === dealerTotal) {
      $message1.html('A TIE, UNLESS YOU PREFER A BOW. ');
      $message1.append("<img id='bow' src='img/bow.png'>");   
  } else if (playerTotal > 21 && dealerTotal < 21) {
      $message1.html('OOPS, YOU BUSTED.');
      dealerWins($amount, $bankrollmessage, $bankrollmessage2, $message2);  
  } else if (dealerTotal > 21 && playerTotal < 21) {
      $message1.html('. . . AND THE PRICE IS RIGHT!');
      playerWins($amount, $bankrollmessage, $bankrollmessage2, $message2);   
  } else if (playerTotal < 21 && dealerTotal < 21) {
    if (dealerTotal > playerTotal) {
        $message1.html('BETTER LUCK NEXT TIME.');
        dealerWins($amount, $bankrollmessage, $bankrollmessage2, $message2);   
    } else if (playerTotal > dealerTotal) {
        $message1.html('#WINNING');
        playerWins($amount, $bankrollmessage, $bankrollmessage2, $message2);
    } 
  }
};

// (8) If player wins
var playerWins = function($amount, $bankrollmessage, $bankrollmessage2, $message2) {
  bankroll = bankroll + $amount;
  $bankrollmessage2.html('BANKROLL: $' + bankroll);
  $bankrollmessage.html('WAGER: +$' + $amount).css("color", "#21C386");
  $message2.html('DEALER\'S CARDS: ' + dealerTotal);
  // $amount = 0;
};

// (9) If dealer wins
var dealerWins = function($amount, $bankrollmessage, $bankrollmessage2, $message2) {
  bankroll = bankroll - $amount;
  $bankrollmessage2.html('BANKROLL: $' + bankroll);
  $bankrollmessage.html('WAGER: -$' + $amount).css("color", "#FB6868");
  $message2.html('DEALER\'S CARDS: ' + dealerTotal);
  // $amount = 0;
};

// var playGame = function($reset, $play, $hit, $or, $stay, $message1, $message2, $input, $bankrollmessage, $displayPlayerTotal, $submit) {
//   $reset.hide();
//   $play.hide();
//   $hit.hide();
//   $or.hide();
//   $stay.hide();
//   $message1.html('');
//   $message2.html('');
//   $input.val('');
//   $bankrollmessage.html('YOU HAVE ' + bankroll + '. PLEASE ENTER YOUR WAGER:');
//   $displayPlayerTotal.html('');
//   playerHand = [];
//   dealerHand = [];
//   playerTotal = 0;
//   dealerTotal = 0;
//   $('.player').remove();
//   $('.dealer').remove();
//   pressEnter = true;
//   while (bankroll > 0) {
//     makeBet($message1, $start, $input, $reset, $submit);
//   }
// };

// (10) Reset entire game
var resetGame = function($start, $reset, $hit, $or, $stay, $message1, $message2, $input, $amount, $bankrollmessage, $bankrollmessage2, $displayPlayerTotal, $submit) {
  $start.show();
  $reset.hide();
  $hit.hide();
  $or.hide();
  $stay.hide();
  $message1.html('');
  $message2.html('');
  $input.val('');
  $amount = 0;
  bankroll = 1000;
  $bankrollmessage.html('');
  $bankrollmessage2.hide();
  $displayPlayerTotal.html('');
  playerHand = [];
  dealerHand = [];
  playerTotal = 0;
  dealerTotal = 0;
  $('.player').remove();
  $('.dealer').remove();
  pressEnter = true;
  makeBet($message1, $start, $input, $reset, $submit);
};

// * * * * * * * * * * * * * * * * * 
// WINDOW.ONLOAD * * * * * * * * * * 
// * * * * * * * * * * * * * * * * * 

$(function() {
  var $start = $('#start').show();
  var $input = $('#input').hide();
  var $reset = $('#reset');
  var $submit = $('#submit');
  var $message1 = $('#message1');
  $start.on('click', function(event) {
    makeBet($message1, $start, $input, $reset, $submit);
  });

  var $bankrollmessage = $('#bankrollmessage');
  $submit.on('click', function(event) {
    $amount = parseInt($('#input').val());
    $input = $('#input');
    if ($amount > 1000) {
      alert('You cannot wager more than you have.')
    } else if ($amount < 0) {
      alert('You must wager more than that...')
    } else {
      startGame($bankrollmessage, $message1, $amount, $submit, $input);
    }
  });

  var $bankrollmessage2 = $('#bankrollmessage2');
  $input.keypress(function(event) {
    event.stopPropagation();
    if (event.keyCode == 13 && pressEnter === true) {
      $amount = parseInt($('#input').val());
      $input = $('#input');
      startGame($bankrollmessage, $bankrollmessage2, $message1, $amount, $submit, $input);
    }
  });

  // var $play = $('#play').hide();
  var $message2 = $('#message2');
  var $hit = $('#hit');
  var $or = $('#or');
  var $stay = $('#stay');
  var $playerContainer = $('#playerContainer');
  var $dealerContainer = $('#dealerContainer');
  var $displayPlayerTotal = $('#displayPlayerTotal');
  $(document).keypress(function(event) {
    if (event.keyCode == 13 && pressEnter === true) {
      dealToPlayer($message1, $message2, $hit, $or, $stay, $playerContainer, $displayPlayerTotal);
      dealToDealer($message2, $dealerContainer);
    } 
  });

  $(document).on('keyup keypress', function(event) {
    var code = event.keyCode || e.which;
    if (pressEnter === false) {
      if (code === 13) {
        event.preventDefault();
        return false;
      }
    }
  });
  
  // $hit.hover (function(event) {
  //   $(this).css("border-top: 3px solid #E5FF67");
  // });

  $hit.on('click', function(event) {
    receiveCard($playerContainer, $displayPlayerTotal);
    if (playerTotal === 21 || playerTotal > 21) {
      determineWinner($hit, $or, $stay, $message2, $message1, $amount, $bankrollmessage, $bankrollmessage2);
    } 
  });

  // $stand.hover (function(event) {
  //   $(this).css("border-top: 3px solid #E5FF67");
  // });
  $stay.on('click', function(event) {
    checkDealersHand($hit, $or, $stay, $message2, $dealerContainer, $message1, $amount, $bankrollmessage, $bankrollmessage2);
    determineWinner($hit, $or, $stay, $message2, $message1, $amount, $bankrollmessage, $bankrollmessage2); 
    // playGame($start, $reset, $hit, $or, $stay, $message1, $message2, $input, $bankrollmessage, $displayPlayerTotal, $submit);
  });

  // $play.on('click', function(event) {
  //   playGame($start, $reset, $play, $hit, $or, $stay, $message1, $message2, $input, $bankrollmessage, $displayPlayerTotal, $submit);
  // })

  $reset.on('click', function(event) {
    resetGame($start, $reset, $hit, $or, $stay, $message1, $message2, $input, $amount, $bankrollmessage, $bankrollmessage2, $displayPlayerTotal, $submit);
  });

});