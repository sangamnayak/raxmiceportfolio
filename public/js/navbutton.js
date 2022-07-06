function menu(){
    var y = $(".navmenu"), x = y.attr("alt");
    if (x == "menu") {
      $(".navmenu").attr({src:"img/close.svg" , alt:"close"});
      $(".menus").css({display:"flex", transition: "5s"});
    } else {
      $(".navmenu").attr({src:"img/menu.svg" , alt:"menu"});
      $(".menus").css("display","none");
    }
}