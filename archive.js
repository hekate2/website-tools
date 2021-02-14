$(document).ready(function() {
    var src_array = [];
    var counter = 0;
    
    jQuery.get('beige.txt', function(data) {
        src_array = data.split("\n");
        for (var i = 0; i < 28; i++) {
            alert(src_array[i]);
        }
        
    });
    
    function setSrc() {
        for (var i = 1; i < 28; i++) {
            $('#e' + i).attr('src', src_array[counter]);
            counter += 1;
        }
    }
    setSrc();
    
}); 