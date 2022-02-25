$(document).ready(function(){
    //header
    $(".submenu, .fullmenu").hide();
    $("#menu1 li").mouseover(function(){
        $(".submenu, .fullmenu").stop().slideDown("fast");
    });
    $(".fullmenu").mouseout(function(){
        $(".submenu, .fullmenu").stop().slideUp("fast");
    });
   
    
    var showcon = false;
    $(".eyes").click(function(){
        showcon = !showcon;
       //consol.log(showcon)
        if(showcon){ // true
            $(this).attr("src","images/05_login/eyes2.png")
           $("label #pwd").attr("type","text");
       }else {// false 
            $(this).attr("src","images/05_login/eyes1.png")
            $("label #pwd").attr("type","password");
           }
       });


    $("#infor_wrap2").hide();
    
    
    $("#selected h1 a").click(function(){
        $("#selected h1 a").removeClass("selected5");
        $(this).addClass("selected5");

        $("#infor_wrap1 ,#infor_wrap2").hide();
        $($(this).attr("href")).show();
        return false;
    });
});