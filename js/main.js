$(function () {

  const $accordionHeadings = $(".assay__panel-heading"),
    $accordionBox = $(".assay__accordion-box"),
    $bringingHeading = $(".bringing__heading-btn"),
    $sectionBringing = $(".tab__item"),
    $menuBtn = $(".header__btn"),
    $menuLink = $(".header__menu-link"),
    $menuList = $(".header__menu-items");

  //tab
  const tab = document.querySelector(".tab-container")
  let mySwiper;


  //open first section accordion
  $accordionBox.eq(0).css("display", "block");

  //main
  function init() {
    $accordionHeadings.on("click", openSectionAccordion);
    $bringingHeading.on("click", openSectionBringing);
    $menuBtn.on("click", toggleMenu);
    $menuLink.on("click", toggleMenu);
  };

  function toggleMenu() {
    $menuList.fadeToggle("slow");
    $(".header__btn-item").toggleClass("header__btn--active");
  };

  function openSectionAccordion() {
    $(this).toggleClass("assay__panel--active").next().slideToggle();
    $accordionHeadings.not(this).removeClass("assay__panel--active").next().slideUp();
  };

  function openSectionBringing() {
    //Change heading bringing
    $(this).addClass("bringing__heading--active");
    $bringingHeading.not(this).removeClass("bringing__heading--active");

    //Change section bringing
    let titleSection = $(this).data("title");

    $(".tab__item").each(function () {
      if (titleSection === $(this).data("section")) {
        $(this).addClass("tab__item--visible");
        $sectionBringing.not(this).removeClass("tab__item--visible");
      };
    });
  };

  init();

});
