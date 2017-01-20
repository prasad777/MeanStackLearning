$(function(){

$('form').on('submit', function(event){

alert("this is in myclient.js");

});

$.ajax({
  url: "http://localhost:8089/index.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
});