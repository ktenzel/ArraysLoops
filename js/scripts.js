//backend
var counter = function(input) {
  for (var i=0; i<=input; i++) {
    if (i % 3 === 0){
      return dave;
    } else {
      return false;
    }


  result.push(i);
  var beep = "Beep!";
  var boop = "Boop!";
  var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
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
      console.log("true");
    }
      $("#result").text(result);
  });
});
