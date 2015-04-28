$(document).ready(function() { // makes available and safe to be rendered

  $('.gitprofile').on('submit', function(e) { // when someone enters their name, it executes the function

    e.preventDefault(); //event.preventDefault

    var url = 'https://api.github.com/users/' + $('input.username').val() + '/followers'; // makes url equal to the user api + phoebehugh returns the value - users/phoebehugh

    var followerList = ''


    // $('.container').html(followerList);
    $.get(url, function(followers) { // passes in users/phoebe. Info is like a callback - a function within a function
      followers.forEach(function(follower, index, array))
//       $('.container').prepend(Mustache.render(template, info)); //prepend inserts the content at the top of the container
    // }).fail(function() {
    //   $('.container').prepend("User not found")
    // }).always(function() { // a promise, to always return the success and error 
    //   $('input.username').val('');
      });

//     var template = $('template').html(); // just returns content of selected element in jquery

  });
});



// every time you put a button on a page, it reloads the form
