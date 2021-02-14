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
        for (var i = 1; i <= 28; i++) {
            $('#e' + i).attr('src', src_array[i]);
            $('#e' + i).siblings('p').text(src_array[i].substring(src_array[i].length - 12, src_array[i].length));
        }
    }
    
    readTxt();
    
    // $('button').on('click', setSrc());
    
}); 