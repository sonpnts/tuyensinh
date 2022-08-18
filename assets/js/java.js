$(document).ready(function(){
    $(".img-yt span").click(function () {
       
        $(".play-yt").addClass("open");
        $("#video-yt").attr("src","https://www.youtube.com/embed/6F6RGmVvfdM?rel=0");
    });
    $("#close").click(function(){
        $(".play-yt").removeClass("open");
        $("#video-yt").attr("src"," ");
    });
    $(".play-yt").click(function () {
        $(".play-yt").removeClass("open");
        $("#video-yt").attr("src"," ");
    });
    $(".animate__animated").hover(function(){
        $(this).addClass("animate__bounce");
    }, function(){
        $(this).removeClass("animate__bounce");
    })
    $(".regis form").on("click","input#DK",function(){
        
    })
    $(".backtop").click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".menu-scroll").fadeIn();
            $("#header").fadeOut();
        }else{
            $(".menu-scroll").fadeOut();
            $("#header").fadeIn();
        }
    })
});