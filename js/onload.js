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
    startGame($bankrollmessage, $message1, $amount, $submit, $input);
  });


  $input.keypress(function(event) {
    event.stopPropagation();
    if (event.keyCode == 13 && pressEnter === true) {
      $amount = parseInt($('#input').val());
      $input = $('#input');
      startGame($bankrollmessage, $message1, $amount, $submit, $input);
    }
  });

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
      determineWinner($hit, $or, $stay, $message2, $message1, $amount, $bankrollmessage);
    } 
  });

  // $stand.hover (function(event) {
  //   $(this).css("border-top: 3px solid #E5FF67");
  // });

  $stay.on('click', function(event) {
    checkDealersHand($hit, $or, $stay, $message2, $dealerContainer, $message1, $amount, $bankrollmessage);
    determineWinner($hit, $or, $stay, $message2, $message1, $amount, $bankrollmessage); 
  });

  $reset.on('click', function(event) {
    resetGame($start, $reset, $hit, $or, $stay, $message1, $message2, $input, $amount, $bankrollmessage, $displayPlayerTotal, $submit);
  });

});