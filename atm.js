$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
    var amount = 0;
    $('#checking').on('click', function(e) {
         var selected = $(e.target),
             deposit = $('.deposit'),
             input;

         if (selected.is(deposit)){
             input = $('input').val();
             amount += parseInt(input);
             console.log(amount);
             $('#checking .balance').html("$ " + amount);
         }




     });
});
