$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$(function(){
    var pagenavi = jQuery('.pagenavi');
    // ボタン非表示
    pagenavi.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
            pagenavi.fadeIn();
       } else {
            pagenavi.fadeOut();
       }
    });
    
  });