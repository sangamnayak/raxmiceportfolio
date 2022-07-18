let obj = document.cookie;
let str = obj.replaceAll('=', ':');
let arr = str.split(" ");
// console.log(arr);
// let cook = JSON.stringify(arr);
// console.log(cook.dark);
// console.log(typeof cook);
// console.log(cook);

    arr.forEach(cookie => {
      if(cookie === "mode:dark"){ dark();}
      else{light();}
    });

function first(){
// //hover area
$(".links").hover(function(){$(this).css("color", "#6D83F2");}, 
function(){if("sun" == $("#mode").attr("alt")){$(this).css("color", "#ffffff");}else{$(this).css("color", "#000000");}});
// //hover area
}

function mode(){
  var y = $("#mode"), x = y.attr("alt");
    if (x == "sun") {
      // $("#mode").attr({src:"img/moon.svg" , alt:"moon"});
      document.cookie = "mode=light";
      light();
    } else {
      // $("#mode").attr({src:"img/sun.svg" , alt:"sun"});
      document.cookie = "mode=dark";
      dark();
    }
  }
        
  
// //light mode 
// function light(){
//   $("#mode").attr({src:"img/moon.svg" , alt:"moon"});
//   $("header,body,.card,.thoghts,.about-p,.cform").css("background-color","#ffffff");
//   $(".links").css("color","#232323");
//   $(".light,.thoghts,.about-p").css("color","#383838"); 
//   $(".aml").css("color","#f8f8f8");
//   $(".aboutbox").css("background-color","#6D83F2");
//   $(".s").css("color","#B8C3FF");
//   $(".fullname,.email,.tel,.message").css("border","3px solid #6D83F2")
//   first();
// }
// //dark mode
// function dark(){
//   $("#mode").attr({src:"img/sun.svg" , alt:"sun"});
//   $("header,.thoghts,.about-p,.cform").css("background-color","#232323");
//   $("body").css("background-color","#191919");
//   $(".links").css("color","#ffffff");
//   $(".light,.thoghts,.about-p").css("color","#f8f8f8");
//   $(".card").css("background-color","#323232");
//   $(".aboutbox").css("background-color","#323232");
//   $(".s").css("color","#303030");
//   $(".fullname,.email,.tel,.message").css("border","3px solid #323232")
//   first();
// }

//light mode 
function light(){
  $(".navlink").css("background-color","#f8f8f8");
  $("#mode,.navmode").attr({src:"img/moon.svg" , alt:"moon"});
  $("header,body,.card,.thoghts,.about-p,.cform,.blog-card").css("background-color","#ffffff");
  $(".links,.nl").css("color","#232323");
  $(".navmode").css("background-color","#232323");
  $(".light,.thoghts,.about-p").css("color","#383838"); 
  $(".aml,.bash").css("color","#f8f8f8");
  $(".aboutbox").css("background-color","#6D83F2");
  $(".s").css("color","#B8C3FF");
  $(".fullname,.email,.tel,.message").css("border","3px solid #6D83F2")
  first();
}
//dark mode
function dark(){
  $(".navlink").css("background-color","#6D83F2");
  $("#mode,.navmode").attr({src:"img/sun.svg" , alt:"sun"});
  $("header,.thoghts,.about-p,.cform").css("background-color","#232323");
  $("body").css("background-color","#191919");
  $(".links").css("color","#ffffff");
  $(".light,.thoghts,.about-p,.nl").css("color","#f8f8f8");
  $(".card,.blog-card").css("background-color","#323232");
  $(".aboutbox").css("background-color","#323232");
  $(".s").css("color","#303030");
  $(".fullname,.email,.tel,.message").css("border","3px solid #323232")
  first();
}
