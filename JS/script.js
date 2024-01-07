$(document).ready(function () {

  // var isScrolling = false;
  // var homeElement = $('#Home');
  // var topElement = $('#top'); 


  // $(window).scroll(function() {
  //     if(isScrolling) {
  //         return;
  //     }

  //     isScrolling = true;
  //     console.log(isScrolling);
  //     $('html, body').stop().animate({ scrollTop: homeElement.offset().top }, 100);
  // });


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
