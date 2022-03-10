$(function () {
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

  $(document).click(function (e) {
    // $(this).find('.your-playlist').slick({
    //   infinite: true,
    //   slidesToShow: 6,
    //   slidesToScroll: 2,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   pauseOnHover: true,
    //   swipeToSlide: true
    // });

    // $(this).find('.v-pop').slick({
    //   infinite: true,
    //   slidesToShow: 6,
    //   slidesToScroll: 2,
    //   autoplay: true,
    //   autoplaySpeed: 4000,
    //   pauseOnHover: true,
    //   swipeToSlide: true,
    // })
  });
});
