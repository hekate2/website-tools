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
            console.log(counter);
            $('#e' + i).attr('src', src_array[counter]);
            $('#e' + i).parent().next().text(src_array[counter].substr(src_array[counter].length - 12, src_array[counter].length));
            counter++;
        }
    }
    
    readTxt();
    
    $('#next').on('click', function(){
        readTxt();
    });
    
    $('#previous').on('click', function() {
       if (counter != 0) {
           counter -= 28;
           readTxt();
       } 
    });
}); 