$(document).ready(function(){
  console.log("hello this is dog.");

  $(".flex-container").css("display", "flex");

  // set height onload && window resize
  $(window).on("resize", function () {
    var height = $(window).height();
    $(".mock-div").css('height', height);
    $('.flex-container').css('height', height);
  }).resize();


  // fade to reveal, then hide so that <a> links are clickable
  $(".mock-div").delay(400).animate({"opacity": "0"}, 1000, function() {
    $(".mock-div").hide();
  }); // end mock div reveal


}); // end doc ready
