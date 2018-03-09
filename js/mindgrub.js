/*!
 * mindgrub.js
 *
 * Catch all for javascript customizations.
 */


$('div.slides>section').each(function( i ) {
    var background = $(this).attr('data-background');
    if (typeof background === typeof undefined || background === false) {
        $(this).attr('data-background', 'assets/background-pattern-grey-opacity.png');
    }
});

$('div.slides>section:odd').each(function( i ) {
    var background = $(this).attr('data-background-color');
    if (typeof background === typeof undefined || background === false) {
        $(this).attr('data-background-color', '#333333');
        $(this).addClass('odd');
    }
});

