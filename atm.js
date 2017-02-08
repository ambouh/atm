$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
    var amount;
    $('#checking').on('click', function(e) {
         var selected = $(e.target),
             deposit = $('.deposit'),
             input,
             checkingBal = $('#checking .balance');
            amount = parseInt(checkingBal.html().match(/\d+$/)[0]);

         if (selected.is(deposit)){
             input = $('input').val();
             amount += parseInt(input);
             console.log(amount);
             checkingBal.html("$ " + amount);
         }




     });
});
