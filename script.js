$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

let nav = $(".nav");
    sticky = "sticky";
    header = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > header ) {
    nav.addClass(sticky);
  } else {
    nav.removeClass(sticky);
  }
});