$(document).ready(function() {
    var times = [];
    $.get('beige.txt', function(data) {
        times = data.split("\n");
    });
    
    console.log(times);
    var counter = 0;
    function setSrc() {
        for (var i = 1; i < 28; i++) {
            $('#' + i).attr('src', times[counter]);
            counter++;
        }
    }
    setSrc();
});