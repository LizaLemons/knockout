$(document).ready(function(){
  console.log("hello this is dog.");

  // set header & mock div height on load & window resize
  $(window).on("resize", function () {
    var height = $(window).height();
    $('.flex-container').css('height', height);
  }).resize();


}); // end doc ready
