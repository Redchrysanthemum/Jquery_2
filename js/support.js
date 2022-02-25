$(document).ready(function(){
    //header
    $(".submenu, .fullmenu").hide();
    $("#menu1 li").mouseover(function(){
        $(".submenu, .fullmenu").stop().slideDown("fast");
    });
    $(".fullmenu").mouseout(function(){
        $(".submenu, .fullmenu").stop().slideUp("fast");
    });
    
    // 탭 숨김
    $("#figure_wrap").hide();
    $("#step1 > .box2").click(function(){
        $("#figure_wrap").slideDown("slow");
    });

    var showcon = false;
    $("#step1 > .box2").click(function(){
        showcon = !showcon;
       //consol.log(showcon)
        if(showcon){ // true
            $("#figure_wrap").slideDown("slow");
           $("#step1 > .box2").html("&utrif;");
       }else {// false 
        $("#figure_wrap").slideUp("slow");
           $("#step1 > .box2").html("&dtrif;");
           }
       });
});