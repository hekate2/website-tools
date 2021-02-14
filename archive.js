$(document).ready(function() {
    jQuery.get('beige.txt', function(data) {
       alert(data);
       //process text file line by line
       $('.text').html(data.replace('n',''));
    });
}); 