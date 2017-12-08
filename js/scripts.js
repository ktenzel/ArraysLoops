//backend
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
var array = []
var counter = function(input) {
  for (var i=0; i<=input; i++){
  array.push(i);
  console.log(array);
    if (3 % array[i] === 0){
      array.push(dave);

    } if (array[i] === 0){
      array.push(beep);
    } else {
      return boop;
    }
  }
}
// if (result.charAt(i) === 1) {
//   result.replace(beep);
// } if (result.charAt(i) === 0) {
//   result.replaces(boop);
// } else if (result % 3 === 0) {
//   result.replace(dave);
// } else {
//   result.push(i);
//   break;
// }





//frontend
$(document).ready(function() {
  $("form#evaluate").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var result = counter(input);
    debugger;
    if (!result) {
      console.log("keep working");
    } else {
      console.log();
    }
      $("#result").text(array);
  });
});
