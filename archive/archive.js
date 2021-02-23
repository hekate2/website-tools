$(document).ready(function() {
    var src_array = [];
    var counter = 0;
    var hasBeenPrev = false;
    var color = $('.selected').attr('value');;
    
    function readTxt() {
        jQuery.get('text_links/' + color + '.txt', function(data) {
        src_array = data.split("\n");
        setSrc();
        });
    }
    
    function setSrc() {
        for (var i = 1; i <= 28; i++) {
            console.log(counter);
            $('#e' + i).attr('src', src_array[counter]);
            $('#e' + i).parent().next().text(src_array[counter].split('/')[4]);
            counter++;
        }
    }
    
    $('#next').on('click', function(){
        if (counter <= src_array.length) {
         readTxt();   
        }
    });
    
    $('#previous').on('click', function() {
       if (counter >= 56) {
           counter -= 56;
           readTxt();
       } 
    });
    
    $('#chooser li').on('click', function() {
        $('#chooser li').removeClass('selected');
        $(this).addClass('selected');
        $('#chooser').css('display', 'none');
        $('#archive').css('display', 'block');
        $('.active').addClass('dormant');
        $('.active').next().addClass('active');
        $('.active:first').removeClass('active');
        
        color = $('.selected').attr('value');
        readTxt();
    });
    
    $('.dormant').on('click', function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
}); 