$('input, textarea').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

$(document).on('focus active visited', 'select', function () {
    $('.label--filter, .label--variation, .label--select').addClass('active');
    $('select').addClass('selected');
});
$(document).on('blur', 'select', function (e) {

    if (!$(e.currentTarget).val())
        $('label').removeClass('active');

});