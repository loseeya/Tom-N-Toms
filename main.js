

// 토글제어 

const openBtn = $('.toogle');
const closeBtn = $('.close')

$(openBtn).click(function() {
  $('.m-gnb-wrapper').fadeToggle('slow');
});

$(closeBtn).click(function() {
  $('.m-gnb-wrapper').fadeOut('slow')
})