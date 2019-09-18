$(window).on('scroll', function (e) { 
    if ($(this).scrollTop() > 10) {
        $('.js-header').addClass('scroll');
    } else {
        $('.js-header').removeClass('scroll');
    }

});

$('.js-burger').on('click', function(e) {
    $(this).toggleClass('active');
    $('.js-nav').fadeToggle(400);
   $('body').toggleClass('stop-scrolling')
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    $('.js-nav .active').removeClass('active');
    $('.js-'+target.slice(1)).addClass('active');

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top 
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
    if ($('.js-burger').hasClass('active')) {
        $('body').toggleClass('stop-scrolling');
        $('.js-burger').toggleClass('active');
        $('.js-nav').fadeToggle(400);
    }

  
});