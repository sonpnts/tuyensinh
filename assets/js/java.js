$(document).ready(function(){
    $(".img-yt span").click(function () {
        $(".play-yt").addClass("open");
    });
    $("#close").click(function(){
        $(".play-yt").removeClass("open");
    });
    $(".play-yt").click(function () {
        $(".play-yt").removeClass("open");
    });
});