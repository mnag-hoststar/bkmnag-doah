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
	
    $('.feature__content-wrap').css('padding-top', (navigationSpace())+'px');
	
	$(window).resize(function() {
        $('.feature__content-wrap').css('padding-top', (navigationSpace())+'px');
	    console.log(navigationSpace());
	});

	// ------------------------------
    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	// ------------------------------
	
    $(document).bind("DOMSubtreeModified",function(){
        $('.feature__content-wrap').css('padding-top', (navigationSpace())+'px');
        
        console.log('Working.');
    });
});