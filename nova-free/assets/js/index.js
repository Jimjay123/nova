$(function(){
  let headerHeight= $('.header').innerHeight()
  $(document).on('scroll',function(){
    let scrollTop =$(document).scrollTop()
    if(scrollTop >=headerHeight) {
      $('.header').addClass('isFixed')

    }else {
      $('.header').removeClass('isFixed')
    }
  })

  $(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});
    // Click Event
    $('.go-top').on('click', function () {
      $("html, body").animate({
          scrollTop: "0"
      }, 800);
  });
  
})