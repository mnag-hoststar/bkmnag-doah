// ----------------------------------------
// Duotone: JS > Navigation
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	if ($('.language-selector').length > 0) {
	    var languageSelectorHeight = parseInt($('.language-selector').outerHeight());
	    if ($('.feature__content-wrap').length > 0) {
	        var contentTopPadding = parseInt($('.feature__content-wrap').css('padding-top').replace(/[^-\d\.]/g, ''));
	    }
	    var featurePadding = languageSelectorHeight+contentTopPadding;
	    
	    $('.flex-container').css('margin-top', languageSelectorHeight+'px');
	    $('.feature__content-wrap').css('padding-top', featurePadding+'px');
	}
});