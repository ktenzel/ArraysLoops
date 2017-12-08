$(document).ready(function() {
  $("form#evaluate").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#words").val());
    var result = [];
    debugger;
    var beep = "Beep!"
    var boop = "Boop!"
    var dave = "I'm sorry, Dave. I'm afraid I can't do that."
    console.log(input);



      for (var i=0; i<=input; i++) {
        result.push(i);

      $("#result").text(result);
  };
});
});
