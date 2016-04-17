//Author: Dermott McElhone
//Assignment:  Minor Project
//Student  ID: D15126568
//Date: 2016/04/11


//Ref: http://www.chartjs.org/docs/
//Ref: https://developers.google.com/maps/
//Ref: https://api.jquery.com/


//Modified charts.js framework to display ZERO challenge completion status
//Used in conjunction with css that places value inside the doughnut chart

if ($('#challengesPage').length > 0){

var doughnutData = [
  {
    value: 75,
    color:"#ffb92e",
    highlight: "#ffb92e",
    label: "Complete"
  },
  {
    value: 25,
    color: "#fd615b",
    highlight: "#fd615b",
    label: "Remaining"
  },

];

var doughnutData2 = [
  {
    value: 50,
    color:"#ffb92e",
    highlight: "#ffb92e",
    label: "Complete"
  },
  {
    value: 50,
    color: "#fd615b",
    highlight: "#fd615b",
    label: "Remaining"
  },

];

var doughnutData3 = [
  {
    value: 100,
    color:"#ffb92e",
    highlight: "#ffb92e",
    label: "Complete"
  },


];

var doughnutData4 = [
  {
    value: 100,
    color:"#2e3e4f",
    highlight: "#2a3a4c",
    label: "Join Challenge"
  },

];

$(function(){
  var ctx = document.getElementById("chart-area").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});

  var ctx = document.getElementById("chart-area2").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData2, {responsive : true});

  var ctx = document.getElementById("chart-area3").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData3, {responsive : true});

  var ctx = document.getElementById("chart-area4").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData4, {responsive : true});
});


};





/*Open close challenges action*/
/*jQuery example when the data-linkItem is used to specify which challenge has been selected and allow the panel to open*/


$(document).on('click', ".challengeTitleLink", function() {
  var challengeID = $(this).attr('data-linkItem');
  $('#'+challengeID).slideToggle('slow');

  return false;

});





/*Open close calculator results*/
/*jQuery example when id is targeted to slidetoggle a panel*/


$(document).on('click', "#calculateFootPrint", function() {
  $('#resultsWrapperContainer').slideToggle('slow');
  return false;
});





/*Challenge sliders - display current range position on screen as numeric value*/
/*Example of jQuery DOM traversal where the parent div is found and the next div is targeted below the parent*/


$(function () {

  $(document).on('change', ".sliderRange", function() {
    var sliderID = $(this).attr('id');
    console.log(sliderID);
    var value = $('#'+sliderID).parent().next('div').attr('id');
    console.log(value);

    $('#'+value).html(this.value);
  });

});




/*Map function*/
//Google map auth key: AIzaSyCM4XMjJ028JWX7Bdwm8mQSIsblfCUdq9Q
//The user is asked to allow location mapping to be enabled

if ($('#challengesPage').length > 0){


  var mapholder = document.getElementById("mapholder");

  var mapholder = document.getElementById("mapholder2");

  var mapholder = document.getElementById("mapholder3");

  var mapholder = document.getElementById("mapholder4");

window.onload = function getlocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    mapholder.innerHTML = "Your machine does not support geolocation";
  }
}


function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=800x600&sensor=false";

  document.getElementById("mapholder").innerHTML = "<iframe width='550' height='450' frameborder='0' style='border:0' class='embed-responsive-item' src='https://www.google.com/maps/embed/v1/view?key=AIzaSyCM4XMjJ028JWX7Bdwm8mQSIsblfCUdq9Q&center=" + latlon + "&zoom=6' allowfullscreen></iframe>";
  document.getElementById("mapholder2").innerHTML = "<iframe width='550' height='450' frameborder='0' style='border:0' class='embed-responsive-item' src='https://www.google.com/maps/embed/v1/view?key=AIzaSyCM4XMjJ028JWX7Bdwm8mQSIsblfCUdq9Q&center=" + latlon + "&zoom=6' allowfullscreen></iframe>";
  document.getElementById("mapholder3").innerHTML = "<iframe width='550' height='450' frameborder='0' style='border:0' class='embed-responsive-item' src='https://www.google.com/maps/embed/v1/view?key=AIzaSyCM4XMjJ028JWX7Bdwm8mQSIsblfCUdq9Q&center=" + latlon + "&zoom=6' allowfullscreen></iframe>";
  document.getElementById("mapholder4").innerHTML = "<iframe width='550' height='450' frameborder='0' style='border:0' class='embed-responsive-item' src='https://www.google.com/maps/embed/v1/view?key=AIzaSyCM4XMjJ028JWX7Bdwm8mQSIsblfCUdq9Q&center=" + latlon + "&zoom=6' allowfullscreen></iframe>";

};

};




/*Function to link to next page in the flow*/

function clickMeTwo() {

  window.location.href = "pages/calculator.html";
};




/*Function to link to the next page in the flow*/

function challengeButtonClick() {

  window.location.href = "pages/calculator.html";
};




/*Session Storage*/
/*On click store the value of the Registration form first name in sessionStorage variable then retrieve that value later in the next page.*/
//Example of event listener

if ($('#calculatorPage').length > 0){


  document.getElementById("regButton").addEventListener("click", clickMe);

  function clickMe() {

    var searchInput = $("#firstName").val();
    console.log(searchInput);

    sessionStorage.setItem("firstname", searchInput);
    console.log(sessionStorage.firstname);

    //window.location.href = "challenges.html";

  };

};



/*Session storage retrieval to update logged in name in Challenge page header*/


if ($('#challengesPage').length > 0){

  $(function(){

  document.getElementById("userFirstName").innerHTML = sessionStorage.getItem("firstname");
  });
};

