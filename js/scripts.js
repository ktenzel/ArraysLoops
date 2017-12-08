function counter (input) {
  for (var i=0; i<=input; i++) {
  var array = []
  result.push(i);
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






$(document).ready(function() {
  $("form#evaluate").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();
    var result = counter(input);
    debugger;
    var beep = "Beep!";
    var boop = "Boop!";
    var dave = "I'm sorry, Dave. I'm afraid I can't do that.";

      $("#result").text(result);
  });
});
