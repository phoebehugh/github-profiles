$(document).ready(function() { // makes available and safe to be rendered

  $('.gitprofile').on('submit', function(e) { // when someone enters their name, it executes the function

    e.preventDefault(); //event.preventDefault

    var url = 'https://api.github.com/users/' + $('input.username').val(); // makes url equal to the user api + phoebehugh returns the value - users/phoebehugh

    var template = $('template').html(); // just returns content of selected element in jquery

    var displayError = function(){ $('.container').prepend("User not found") };

    var clearInput = function(){ $('input.username').val('') };


    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info)); //prepend inserts the content at the top of the container
    }).fail(function() {
      displayError();
    }).always(function() { // always executed regardless of what happens
      clearInput();
      });
  });
});




// every time you put a button on a page, it reloads the form
