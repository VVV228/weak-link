// $(function(){
//     $(".step-box").slideUp(1000).delay(1000).slideDown(1000);
// });


// $(".options").mouseenter(function(){
//     alert("You entered p1!");
//   });



$(document).ready(function(){
    $(".options a span").hover(function () {
        $(this).css({"font-weight":"700", "text-shadow": "#EBC4F1 1px 0 10px"});
    },
    function () {
        $(this).css({"font-weight":"300", "text-shadow": "none"});
    });
  });