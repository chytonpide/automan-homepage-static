$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  $('#navi_area').toggleClass('open');
});



$(function(){
  var btn = $('.floating_banner');
  var timer;
  
  $(window).scroll(function() {
    //スクロール開始するとボタンを非表示
    btn.removeClass('active');
    
    //スクロール中はイベントの発火をキャンセルする
    clearTimeout(timer);
    
    //スクロールが停止して0.2秒後にイベントを発火する
    timer = setTimeout(function() {
      //スクロール位置を判定してページ上部のときはボタンを非表示にする
      btn.addClass('active');
      // if($(this).scrollTop()) {
      //   btn.addClass('active');
      // }else{
      //   btn.removeClass('active');
      // }
    }, 200);
  });
  
});