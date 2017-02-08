$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
    var amount,
        checkingBal = $('#checking .balance');

    $('#checking').on('click', function(e) {
         var selected = $(e.target),
             deposit = $('.deposit'),
             withdraw = $('.withdraw'),
             input;


        amount = parseInt(checkingBal.html().match(/\d+$/)[0]);
        input = parseInt($('input').val());
         if (selected.is(deposit)){
             amount += input;
             checkingBal.html("$ " + amount);
         }

         if (selected.is(withdraw) && amount >= input) {
             amount-=input;
             checkingBal.html("$ " + amount);
         } else if(selected.is(withdraw)) {
             checkingBal.addClass("zero");
         }




     });
});
