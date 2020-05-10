$(document).ready(function(){
    $(".p1").click(function(){
        $(show).children(".show").slidetoggle();
        $(show).children(".show").toggle(1000);
    });

});
$(document).ready(function(){
    $(".p2").click(function(){
        $(".show").toggle();
    });

});
$(document).ready(function(){
    $(".p3").click(function(){
        $(".show").toggle();
    });

});

