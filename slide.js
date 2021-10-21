// 슬라이드

$('.slide').slick({
  // centerMode: true,
  // focusOnSelect: true,
  autoplay: true,
  arrows:true,
  dots: true,
  autoplaySpeed: 1500,
  dotsClass: 'slick-dots',
  centerPadding: '0px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.menu-desc').slick({
  centerMode: true,
  // dots: true,
  dotsClass: 'slick-dots',
  autoplay: true,
  autoplaySpeed: 1000,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.gift-desc').slick({
  centerMode: true,
  // dots: true,
  dotsClass: 'slick-dots',
  autoplay: true,
  autoplaySpeed: 1000,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
