
function fn(){
    $(".search").click(function()   {
    $("*").append("<section class='search-sec'>  <input type='text' name='search' class='input-search'><button class='btn11' onclick='s()'>close</button></section>");
    
});
} 
function s(){
    $(".btn11").click(function()   {
        $(".search-sec").hide();
        console.log("nooooooooo");
    });
}

$(document).ready(function(){
    $("#img1").mouseover(function(){
        $("#img1").attr("src","img/Product-7-470x594.jpg");

    });
    $("#img1").mouseout(function(){
        $("#img1").attr("src","img/Product-11-470x594.jpg");

    });
    $("#img2").mouseover(function(){
        $("#img2").attr("src","img/Product-16-470x594.jpg");

    });
    $("#img2").mouseout(function(){
        $("#img2").attr("src","img/Product-12-470x594.jpg");

    });

    $("#img3").mouseover(function(){
        $("#img3").attr("src","img/Product-23-470x594.jpg");

    });
    $("#img3").mouseout(function(){
        $("#img3").attr("src","img/Product-13-470x594.jpg");

    });


    $("#img4").mouseover(function(){
        $("#img4").attr("src","img/Product-32-470x594.jpg");

    });
    $("#img4").mouseout(function(){
        $("#img4").attr("src","img/Product-16-470x594.jpg");

    });
    $("#img5").mouseover(function(){
        $("#img5").attr("src","img/Product-34-470x594.jpg");

    });
    $("#img5").mouseout(function(){
        $("#img5").attr("src","img/Product-19-470x594.jpg");

    });

    $("#img6").mouseover(function(){
        $("#img6").attr("src","img/Product-31-470x594.jpg");

    });
    $("#img6").mouseout(function(){
        $("#img6").attr("src","img/Product-20-470x594.jpg");

    });

    $("#img-col3-1").mouseover(function(){
        $("#img-col3-1").attr("src","img/Product-19-470x594.jpg");

    });
    $("#img-col3-1").mouseout(function(){
        $("#img-col3-1").attr("src","img/menu-product-1.jpg");

    });
    $(".line-buttun1").mouseover(function(){
        $("#line-buttun").slideDown("slow");
    });


});

    
    
