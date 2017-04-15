//U.I.
function Generator () {
  var agilArry = [];
  var endurArry = [];
  var reasonArry = [];
  var attValArry = [];
  this.prmAttSlctr = function () {
    var tempAttValArry = [];

    for(var i = 0; i <= 4; i++) {
      var prmAtts = ["A", "E", "R"];
      var rlAtt = Math.round(Math.random() * 2);
      tempAttValArry.push(prmAtts[rlAtt]);
    }
    this.attValArry = tempAttValArry;
    $("#dspAttArray").text(this.attValArry);
  }
  this.attValDiv = function (vlAr) {
    var indxADigit = vlAr.indexOf("A");
    var indxEDigit = vlAr.indexOf("E");
    var indxRDigit = vlAr.indexOf("R");
    var tempArray = vlAr.length;


    if (indxADigit !== -1) {
      var tmpAHold =  vlAr.slice(indxADigit, indxADigit + 1);
      console.log(agilArry);
      console.log(typeof agilArry);
      agilArry.push(tmpAHold.toString());
      vlAr.splice(indxADigit, 1);
      this.attValDiv(vlAr);

    } else if (indxEDigit !== -1) {
      var tmpEHold =  vlAr.slice(indxEDigit, indxEDigit + 1);
      endurArry.push(tmpEHold.toString());
      vlAr.splice(indxEDigit, 1);
      this.attValDiv(vlAr);

    } else if (indxRDigit !== -1) {
      var tmpRHold =  vlAr.slice(indxRDigit, indxRDigit + 1);
      reasonArry.push(tmpRHold.toString());
      vlAr.splice(indxRDigit, 1);
      this.attValDiv(vlAr);

    } else {
      $("#dspEndArray").text(endurArry);
      $("#dspAgArray").text(agilArry);
      $("#dspReaArray").text(reasonArry);
      return;
    }

  }

}



//B.L.

$(document).ready(function() {




  $("#obj-btn").click(function(event) {
    event.preventDefault();
    var pract = newGenerator.prmAttSlctr();
    console.log(pract);

    $("#userSent").val(pract);
  });

  $("#trns-form").submit(function(event) {
    event.preventDefault();
    var newGenerator = new Generator();
    newGenerator.prmAttSlctr();
    $("#dspAttArray").show(800);
    newGenerator.attValDiv(newGenerator.attValArry);

    $("#dspEndArray").show(1200);
    $("#dspAgArray").show(1400);
    $("#dspReaArray").show(1600);
  });


});// Doc Ready
