//U.I.
function Generator () {
  var attValArry = [];
  var tempagilArry = [];
  var tempendurArry = [];
  var tempreasonArry = [];
  this.prmAttSlctr = function () {
    var tempAttValArry = [];

    for(var i = 0; i <= 4; i++) {
      var prmAtts = ["A", "E", "R"];
      var rlAtt = Math.round(Math.random() * 2);
      tempAttValArry.push(prmAtts[rlAtt]);
    }
    this.attValArry = tempAttValArry;
    return tempAttValArry;
  }

}


var agilArry = [];
var endurArry = [];
var reasonArry = [];

// function gnrtrHeart() {
//   this.primeAtts = ["A", "E", "R"];
//   this.rlAtt = Math.round(Math.random() * 2);
//   return this.primeAtts[rlAtt];
// }
//
// var createValArry = function () {
//   for(var i = 0; i <= 4; i++) {
//     attValArry.push(gnrtrHeart());
//   }
//   return attValArry;
// }

Generator.prototype.attValDiv = function (vlAr) {
  var indxADigit = vlAr.indexOf("A");
  var indxEDigit = vlAr.indexOf("E");
  var indxRDigit = vlAr.indexOf("R");
  var tempArray = vlAr.length;
  console.log(tempArray);

  if (indxADigit !== -1) {
    var tmpAHold =  vlAr.slice(indxADigit, indxADigit + 1);
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
    this.tempreasonArry = reasonArry;
    this.tempendurArry = endurArry;
    this.tempagilArry = agilArry;
    return;
  }

}



//B.L.

$(document).ready(function() {

  var newGenerator = new Generator();


  $("#obj-btn").click(function(event) {
    event.preventDefault();
    var pract = newGenerator.prmAttSlctr();
    console.log(pract);

    $("#userSent").val(pract);
  });

  $("#trns-form").submit(function(event) {
    event.preventDefault();
    var tmpArr = newGenerator.prmAttSlctr();
    console.log(newGenerator.attValArry);
    var ciphRes = newGenerator.attValDiv(tmpArr);
    console.log(newGenerator.tempagilArry);
    console.log(newGenerator.tempendurArry);
    console.log(newGenerator.tempreasonArry);


    $("#response").val(ciphRes);
  });

});// Doc Ready
