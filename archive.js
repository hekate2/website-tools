$(document).ready(function() {
    var src_array = [];
    var counter = 0;
    
    function readTxt() {
        jQuery.get('beige.txt', function(data) {
        src_array = data.split("\n");
        setSrc();
        });
    }
    
    function setSrc() {
        for (var i = 1; i < 28; i++) {
            $('#e1').attr('src', src_array[i]);
            $('#e' + i).attr('src', src_array[i]);
        }
    }
    
    readTxt();
    
    // $('button').on('click', setSrc());
    
}); 