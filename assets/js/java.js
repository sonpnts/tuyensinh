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
    $(".play-yt").click(function () {
        $("#video-yt").remove();
    });
    $("#close").click(function(){
        $("#video-yt").remove();
    });
    $(".animate__animated").hover(function(){
        $(this).addClass("animate__bounceIn");
    }, function(){
        $(this).removeClass("animate__bounceIn");
    })
});