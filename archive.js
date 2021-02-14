$(document).ready(function() {
    var src_array = [];
    jQuery.get('beige.txt', function(data) {
        src_array = data.split("\n");
        alert(src_array);
    });
}); 