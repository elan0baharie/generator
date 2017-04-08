//U.I.

var first = function(arguement) {
  document.getElementById("trns-form").reset();


};


//B.L.

$(document).ready(function() {
  $("#trns-form").submit(function(event) {
    event.preventDefault();
    var formSent = $("#userSent").val();
    var ciphRes = first(formSent);

    $("#response").val(ciphRes);
  });

});// Doc Ready
