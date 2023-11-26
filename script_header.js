$(document).ready(function(){
    $(".options a span").hover(function () {
        $(this).css({"font-weight":"700", "text-shadow": "#EBC4F1 1px 0 10px"});
    },
    function () {
        $(this).css({"font-weight":"300", "text-shadow": "none"});
    });
  });