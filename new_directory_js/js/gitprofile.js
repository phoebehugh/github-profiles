$(document).ready(function() { // makes available and safe to be rendered

    var displayError = function(errorMessage){ $('.container').prepend(errorMessage) };

    var clearInput = function(){ $('input.username').val('') };

  $('.gitprofile').on('submit', function(e) { // when someone enters their name, it executes the function

    e.preventDefault(); //event.preventDefault

    var url = 'https://api.github.com/users/' + $('input.username').val(); // makes url equal to the user api + phoebehugh returns the value - users/phoebehugh

    var template = $('template').html(); // just returns content of selected element in jquery

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info)); //prepend inserts the content at the top of the container
    }).fail(function() {
      displayError('User not found');
    }).always(function() { // always executed regardless of what happens
      clearInput();
      });
  });
});




// every time you put a button on a page, it reloads the form
