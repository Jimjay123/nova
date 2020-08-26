$(function(){
  init18n('EN')
// 初始化i18n
function init18n(lan) {
  $("[i18n]").i18n({
    defaultLang: lan,
    filePath: "./assets/i18n/",
    filePrefix: "i18n_",
    fileSuffix: "",
    // forever: true,
    callback: function() {

    }
  });
  
}

$('.select-box div').on('click',function(){
  let idx=$(this).index();
  if(idx==0){
    init18n('CN')
  }else {
    init18n('EN')
  }
})
})