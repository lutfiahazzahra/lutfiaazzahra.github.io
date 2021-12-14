// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	var tujuan =$(this).attr('href');

	var elemenTujuan = $(tujuan);
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top-50
	});

	// pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'swing');

	e.preventDefault('0');
});


// parallax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

    // jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '
		+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '
		+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '
		+ wScroll/1.2 +'%)'
	});


    // portfolio
    if(wScroll > $('.portfolio').offset().top - 250 ) {
    	$('.portfolio .thumbnail').each(function(i) {
    		setTimeout(function() {
               $('.portfolio .thumbnail').eq(i).addclass('muncul');
            }, 300 * (i+1));
    });

        
    }


