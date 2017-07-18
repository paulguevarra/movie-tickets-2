//Business Logic
function toCost (x, y, z){

  var userMovie = "";
  var matCost = 10;
  var regCost = 20;
  var premCost = regCost + 10;
  var userAge = "";
  var output = "";
  var output2 = "";

  if (x === "dunkirk"){
    output = premCost;
    if (z === "yes"){
      output2 = output * .9;
    } else {
      output2 = output;
    };
  } else if (y < 16) {
    output = matCost;
      if (z === "yes"){
        // alert ("pass")
        output2 = output * .9;
      } else {
        output2 = output;
      };
  } else if (y >= 16){
    output = regCost;
      if (z === "yes"){
        output2 = output * .9;
      } else {
        output2 = output;
      };
  } else {
    alert("Complete all fields before submitting");
  };
  // return output;
  return output2;


};


//UI Logic
$(document).ready(function(){
  $("form#movie-form").submit(function(event){
    event.preventDefault();
    var userMovie = $("#movie").val();
    var userTime = $("#time").val();
    var userAge = $("#age").val();

    var output = toCost(userMovie, userTime, userAge);
  alert (userMovie);
  // alert (output);

    $(".movie-name").text(userMovie);
    $(".movie-time").text(userTime);
    $(".movie-price").text(output);

    $("#show-movie").show();




      // $(".movie-price").text(userPrice);

    // var userSelect = toCost(userMovie,userTime,userAge);
    // $("#result").text(output);


  });
});
