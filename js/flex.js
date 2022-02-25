$(document).ready(function(){
    //header
    $(".submenu, .fullmenu").hide();
    $("#menu1 li").mouseover(function(){
        $(".submenu, .fullmenu").stop().slideDown("fast");
    });
    $(".fullmenu").mouseout(function(){
        $(".submenu, .fullmenu").stop().slideUp("fast");
    });
    
    $(".sub_img img").show();

    $(".sub_img img").mouseover(function(){
        $(this).css("width","110%");
        $(this).css("height","150%");
    }).mouseout(function(){
        $(this).css("width","100%");
        $(this).css("height","100%");
    });

    


    var showcon = false;
    $("#content1 p").click(function(){
        showcon = !showcon;
       //consol.log(showcon)
        if(showcon){ // true
           $("#content2").slideUp("fast");
           $("#content1 p").children("span").html("&#9660;");
       }else {// false 
           $("#content2").slideDown("fast");
           $("#content1 p").children("span").html("&#9650;");
           }
       });
});