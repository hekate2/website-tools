$(document).ready(function() {
    var src_array = [];
    var counter = 0;
    
    jQuery.get('beige.txt', function(data) {
        src_array = data.split("\n");
        alert(src_array);
    });
    
    function setSrc() {
        for (var i = 1; i < 28; i++) {
            $('"#' + i + '"').attr('src', src_array[counter]);
            counter += 1;
        }
    }
    setSrc();
    
}); 