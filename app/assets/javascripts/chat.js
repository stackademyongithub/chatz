
// Enable pusher logging - don't include this in production
Pusher.log = function(message) {
  if (window.console && window.console.log) {
    window.console.log(message);
  }
};

var pusher = new Pusher('80b086713d9906135b0b');
var channel = pusher.subscribe('chatroom');

channel.bind('new_chat', function(data) {
  $(".messages").append("<p>" + data.message + "</p>");
  console.log(data);
});

function sendmessage(message) {
  $.get("http://localhost:3000/chat/new_message?message="+message);
}

$(document).ready(function(){
  $("#activate").click(function(){
    sendmessage($("#chatmessage")[0].value);
  })
});