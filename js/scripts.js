
function BeepBoop (input) {
  for (i=0; i,=input; i++){
    
  }




}

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#words").val());
    var result = BeepBoop(input);

      $("#result").text(result);
    }
  });
});
