$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function(){
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});

$(function() {
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});

$(function() {
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });
});
