const tab = $(".tab");
const tabMenu = $(".tab .menu li");
const tabContents = $(".tab .contents > li");

tabMenu.on("click", function () {
  const idx = $(this).index();
  const siblings = $(this).siblings();
  $(this).addClass("on");
  siblings.removeClass("on");
  const selectedContents = tabContents.eq(idx);
  const contentsSiblings = selectedContents.siblings();
  selectedContents.addClass("on");
  contentsSiblings.removeClass("on");
});

const btnAll = $(".btn-all");
const gnb = $("#gnb");
btnAll.on("click", function (e) {
  e.preventDefault();
  const icon = $(this).find(".material-icons");
  if (gnb.hasClass("on")) {
    icon.text("menu");
  } else {
    icon.text("close");
  }
  gnb.toggleClass("on");
});

$(window).on("resize", function () {
  console.log($(window).width());
  const w = $(window).outerWidth();
  console.log(w);
  if (w > 1280) {
    $("html").removeClass("m").addClass("pc");
    $("#gnb .depth02").removeAttr("style");
    $("#gnb").removeClass("on");
    const icon = $(".btn-all .material-icons");
    icon.text("menu");
  } else {
    $("html").removeClass("pc").addClass("m");
  }
});

const depth01 = $("#gnb .depth01");
depth01.on("click", function (e) {
  if ($("html").hasClass("m")) {
    const depth02 = $(this).next();
    const siblings = $(this).parent().siblings().find(".depth02");
    const siblingsDepth01 = $(this).parent().siblings().find(".depth01");
    $(this).toggleClass("on");
    siblingsDepth01.removeClass("on");
    siblings.slideUp();
    if (depth02.length > 0) {
      e.preventDefault();
      depth02.stop().slideToggle();
    }
  }
});

$(window).trigger("resize");
