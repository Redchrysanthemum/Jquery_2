$(document).ready(function(){
    //header
    $(".submenu, .fullmenu").hide();
    $("#menu1 li").mouseover(function(){
        $(".submenu, .fullmenu").stop().slideDown("fast");
    });
    $(".fullmenu").mouseout(function(){
        $(".submenu, .fullmenu").stop().slideUp("fast");
    });
    
});