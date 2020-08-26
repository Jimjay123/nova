$(function () {
  let headerHeight = $('.header').innerHeight();
  let sectionRowScrollTop = $('.features-section').offset().top;
  //初始化wow.js
  new WOW().init();
  //
  //  arriveToSp()

  // 滚动事件
  $(document).on('scroll', function () {
    letHeaderFixed();
    backToTop();
    arriveToSp();
  });

  // Click Event
  $('.go-top').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: '0',
      },
      800
    );
  });

  function letHeaderFixed() {
    //头部固定定位效果
    let scrollTop = $(document).scrollTop();
    if (scrollTop >= headerHeight) {
      $('.header').addClass('isFixed');
    } else {
      $('.header').removeClass('isFixed');
    }
  }
  function backToTop() {
    //回到顶部效果
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
  }

  function arriveToSp() {
    //达到某个位置
    let scrollTop = $(document).scrollTop();
    if (scrollTop > sectionRowScrollTop) {
      // 左边的图片
      $('.features-section-row .img-box').animate(
        {
          left: 0,
          opacity: 1,
        },
        1000
      );
      // 右边的图片
      $('.feature-list .card').each(function (idx) {
        $(this).animate(
          {
            right: 0,
            opacity: 1,
          },
          800 * (idx + 1)
        );
      });
    }
  }
  // 菜单栏的拖拽

});

