$(document).ready(function () {
  //header
  $(".submenu,.fullmenu").hide();

  $("#menu1 li").mouseover(function () {
    $(".submenu, .fullmenu").stop().slideDown("fast");
  });
  $(".submenu").mouseout(function () {
    $(".submenu, .fullmenu").stop().slideUp("fast");
  });

  //초기설정
  $("#lens_wrap").hide();
  $("#acess_wrap").hide();

  $("#menu_wrap li a").click(function () {
    // 메뉴=> 1. 모든 메뉴의 클래스 제거 2. 클릭대상에 클래스 적용
    $("#menu_wrap li a").removeClass("selected");
    $(this).addClass("selected");
    // 내용 =>1. 모든 내용 숨김 2. 클릭 대상과 연결된 내용 표시
    $("#sub_img > div").hide();
    $($(this).attr("href")).show();
    return false;
  });

  //$(".btn_all li").click(function(){
  //    $(".btn_all li").removeClass();
  //    $(this).addClass('on');
  // 버튼 클릭시 이미지가 좌측으로 스크롤
  /* $(".cimg").animate({left:"200px"}}); */

  //    $('.cimg').stop()
  //            .animate({'margin-left':"-300px"},1000);
  //});

  $(".btn_all li.next").click(function () {
    $(".moveimg").stop().animate({ "margin-left": "-690" }, 1000);
    return false;
  });
  $(".btn_all li.prev").click(function () {
    $(".moveimg").stop().animate({ "margin-left": "10%" }, 1000);
    return false;
  });
});
