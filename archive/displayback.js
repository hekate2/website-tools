$(document).ready(function() {
    // background preview
    $('.example').on('mouseover', function() {
        $('body').css('background', "url('" + $(this).find('img').attr('src') + "')");
    })
    
    // background remove
    $('.example').on('mouseleave', function() {
        $('body').css('background', "#0c1321");
    })
});