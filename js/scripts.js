//backend
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
var array = []
// var inputarray = input.split('');

var counter = function(input) {
  for (var i=0; i<=input; i++)
  array.push(i);
    if (array[i] % 3 === 0) {
    array[i] = dave;
    console.log(i);
  }
}
if (result.charAt(i) === 1) {
  result.replace(beep);
} if (result.charAt(i) === 0) {
  result.replaces(boop);
} else if (result % 3 === 0) {
  result.replace(dave);
} else {
  result.push(i);
  break;
}





//frontend
$(document).ready(function() {
  $("form#evaluate").submit(function(event) {
    var input = parseInt($("input#number").val());
    event.preventDefault();

    var result = counter(input);
    debugger;
    // if (!result) {
    //   console.log("keep working");
    // } else {
    //   console.log(dave);
    // }
      $("#result").text(array);
  });
});
