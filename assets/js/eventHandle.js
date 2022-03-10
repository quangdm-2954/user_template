$(function () {

  // homepage
  $(document).on('click', '#homepage-button', function (e) {
    const _this = $(this);
    $.ajax({
      type: "GET",
      url: "/homepage",
      async: true,
      success: function (response) {
        sidebar.unactiveMenuItems();
        _this.addClass('c-active');
        uri.updateQueryStringParameter({ key: 'action', value: 'homepage' });
        main.render(response);
        $(document).find('.your-playlist').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          swipeToSlide: true
        });
        $(document).find('.v-pop').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          swipeToSlide: true,
        });
      },
      error: function (error) {
        console.error(error);
      }
    });
  });

  // search
  $(document).on('click', '#search-button', function (e) {
    const _this = $(this);
    $.ajax({
      type: "GET",
      url: "/search",
      async: true,
      success: function (response) {
        sidebar.unactiveMenuItems();
        _this.addClass('c-active');
        uri.updateQueryStringParameter({ key: 'action', value: 'search' });
        main.render(response);
      },
      error: function (error) {
        console.error(error);
      }
    });
  });

});
