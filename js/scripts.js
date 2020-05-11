$(document).ready(function(){
  $(".design1").click(function() {
    $(".design1").toggle(500);
    $(".details1").toggle(500);
  });
  $(".details1").click(function() {
    $(".details1").toggle(500);
    $(".design1").toggle(500);
  });
 
});