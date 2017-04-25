$(function() {
	
	
	var $navMoreLink = $('#global-nav-links li.more-link a'),
		$navMoreLinkTarget = $navMoreLink.attr('href');
	
	$($navMoreLinkTarget).addClass('js-hidden-mobile');
	
	$navMoreLink.on('click', function(e) {
		$($navMoreLinkTarget).toggleClass('js-hidden-mobile');
		e.preventDefault();
	});
	
	$('.js-toggle').on('click', function(e) {
		
		var $target = $($(this).data("target"));
		$(this).toggleClass('menu-closed').toggleClass('menu-open');
		$target.toggleClass('js-hidden-mobile').addClass('js-shown');
		var $parent = $(this).parent();
		if ($parent.hasClass('top-level')) {
			$parent.toggleClass('open');
		}
		
		e.preventDefault();
	});
	
	$('#global-nav-links').stackable({stackerLabel: 'More'});

  
    
});

