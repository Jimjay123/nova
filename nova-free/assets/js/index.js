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
  
})