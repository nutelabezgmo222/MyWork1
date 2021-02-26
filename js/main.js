$(document).ready(function() {
  $('.aside-news__topics').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    variableWidth: true,
    infinite: false,
    prevArrow: $('.aside-news__topics-wrapper .prevButton'),
    nextArrow: $('.aside-news__topics-wrapper .nextButton'),
  })
  $('.sales__list').slick({
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerPadding: '0',
    variableWidth: true,
    infinite: false,
    useTransform: false,
    prevArrow: $('.sales__body .prevButton'),
    nextArrow: $('.sales__body .nextButton'),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: true,
          useTransform: true,
          infinite: false,
          centerMode: false,
          waitForAnimate: false
        }
      }
    ]
  })
  $('.main__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        }
      }
    ],
  })
  $('.header__burger').click(function(){
    $('body').toggleClass('stop-scroll')
    $('.header .nav').toggleClass('opened')
    $(this).toggleClass('active')
  })
})
