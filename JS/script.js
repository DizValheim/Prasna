$(document).ready(function () {


  var logo = $(".navbar-brand");
  logo.css("font-family", "Lobster")

  $(".landing-text").each(function(index) {
    $(this).delay(400*index).animate({opacity: 1, left: "+=50"}, 800);
  });

    // var hidden = $('.landing-text');
    // if (hidden.hasClass('visible')) {
    //     hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
    // } else {
    //     hidden.animate({"left":"0px"}, "slow").addClass('visible');
    // }

  $("#theme-toggle").click(function () {
    var currentTheme = document.documentElement.getAttribute('data-bs-theme');
    var newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);

    // Get the theme-icon element
    var themeIcon = $("#theme-icon");

    // Check the current class and toggle it
    if (themeIcon.hasClass("bi-sun")) {
      themeIcon.removeClass("bi-sun");
      themeIcon.addClass("bi-moon");
    } else {
      themeIcon.removeClass("bi-moon");
      themeIcon.addClass("bi-sun");
    }
  });



});
