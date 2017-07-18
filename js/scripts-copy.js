//Business Logic


function Movie(name, showtime, age, cost){
  this.name =  name;
  this.showtime = showtime;
  this.age = age;
  this.cost = cost;
}
// this.premium = premium;

  var wonder = new Movie("Wonder Woman", [8,11,17,20], [5,0], 10);
  var dunkirk = new Movie("Dunkirk", [8,11,17,20], [5,0], 10);
  var spiderman = new Movie("Spiderman: Homecoming", [8,11,17,20], [5,0], 10);
  var dispicable = new Movie("Dispicable ME:3", [8,11,17,20], [5,0], 10);

Movie.prototype.ticketPrice = function() {
  return this.cost;
}


  var totalCost = 10;
  var output = totalCost;


  // return output;


// Movie.prototype.toCalc=function(premium, showtime, discount){
//   // totalCost+= this.premium;
//   // totalCost+= this.showtime[];
//   // totalCost+= this.discount;
// }








// function toCost (x, y, z){
//
//   var userMovie = "";
//   var matCost = 10;
//   var regCost = 20;
//   var premCost = regCost + 10;
//   var userAge = "";
//   var output = "";
//   var output2 = "";
//
//   if (x === "dunkirk"){
//     output = premCost;
//     if (z === "yes"){
//       output2 = output * .9;
//     } else {
//       output2 = output;
//     };
//   } else if (y < 16) {
//     output = matCost;
//       if (z === "yes"){
//         // alert ("pass")
//         output2 = output * .9;
//       } else {
//         output2 = output;
//       };
//   } else if (y >= 16){
//     output = regCost;
//       if (z === "yes"){
//         output2 = output * .9;
//       } else {
//         output2 = output;
//       };
//   } else {
//     alert("Complete all fields before submitting");
//   };
//   // return output;
//   return output2;
//
//
// };


//UI Logic
$(document).ready(function(){
  $("form#movie-form").submit(function(event){
    event.preventDefault();
    var userMovie = $("#movie").val();
    var userTime = $("#time").val();
    var userAge = $("#age").val();

    // var output = Movie(userMovie, userTime, userAge);
    // var output2 = Cost(userTime, userAge)
  // alert (userMovie);
  // alert (output);
    var userInput = new Movie(userMovie, userTime, userAge)

    $(".movie-name").text(userInput.name);
    // $(".movie-time").text(userTime);
    // $(".movie-price").text(outpu2);

    $("#show-movie").show();




      // $(".movie-price").text(userPrice);

    // var userSelect = toCost(userMovie,userTime,userAge);
    // $("#result").text(output);


  });
});
