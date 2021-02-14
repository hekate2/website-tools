$(document).ready(function() {
    $.get("file://beige.txt", function(data){
        $(".result").html(data);
      alert("Load was performed.");
    });
});