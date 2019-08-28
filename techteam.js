// $('#first-item').hover(function(){
//   $('body').animate({background : url("https://images.unsplash.com/photo-1456659122552-6ee1788174bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80.jpg")}, 1000);
//   // $('body').css('background', 'url("https://images.unsplash.com/photo-1456659122552-6ee1788174bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80.jpg")');
//   $('body').css('background-repeat', 'no-repeat');
//   $('body').css('background-position', 'center');
//   $('body').css('background-size', 'cover');
//   // $('#bg').addClass(".newbg1");
// })
$("#first-item").mouseenter(function(){
  $('#c1').css('color', 'white');
  $('body').addClass("newbg1");
})
$("#first-item").mouseleave(function(){
  $('body').removeClass("newbg1");
})
$("#second-item").mouseenter(function(){
  $('body').addClass("newbg2 font-change");
})
$("#second-item").mouseleave(function(){
  $('body').removeClass("newbg2");
})
$("#third-item").mouseenter(function(){
  $('body').addClass("newbg3 font-change");
})
$("#third-item").mouseleave(function(){
  $('body').removeClass("newbg3");
})
$("#fourth-item").mouseenter(function(){
  $('body').addClass("newbg4 font-change");
})
$("#fourth-item").mouseleave(function(){
  $('body').removeClass("newbg4");
})
$("#icon").on('click',function(){
  $('body').addClass("icon-clicked");
})
$("#hire").mouseover(function(){
  $(this).innerHTML("Yayy!");
})
