$(document).ready(function() {
  $("form#evaluate").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#words").val());
    var result = [];
    debugger;
    console.log(input);







      for (var i=0; i<=input; i++) {
        result.push(i);
        console.log(i);
      $("#result").text(result);
  };
});
});
