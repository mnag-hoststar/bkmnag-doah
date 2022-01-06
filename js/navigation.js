// ----------------------------------------
// DOAH: JS > Navigation
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Changes the feature height, according to the navigation size
	// ------------------------------
	
	function navigationSpace() {
        var navigationHeight = $('.navigation--flex-container').outerHeight();
    	var languageSelectorHeight = $('.language-selector').outerHeight();
	    
    	if ($('.language-selector')) {
    		var navigationLanguageSelectorOffset = Number(languageSelectorHeight+navigationHeight);
    		return navigationLanguageSelectorOffset;
    	} else {
        	var navigationOffset = Number(navigationHeight);
    		return navigationOffset;
    	}
	}
	
	if ($('#page-zones__template-widgets__feature-featurehome').hasClass('bk-tpl-hidden')) {
    	$('.main-container').css('padding-top', (navigationSpace())+'px');

    	$(window).resize(function() {
	        $('.main-container').css('padding-top', (navigationSpace())+'px');
		});

		$(document).bind("DOMSubtreeModified",function(){
	        $('.main-container').css('padding-top', (navigationSpace())+'px');
	    });
    }

    $('.feature__content-wrap').css('padding-top', (navigationSpace())+'px');

	$(window).resize(function() {
        $('.feature__content-wrap').css('padding-top', (navigationSpace())+'px');
	});

	$(document).bind("DOMSubtreeModified",function(){
        $('.feature__content-wrap').css('padding-top', (navigationSpace())+'px');
    });
});
