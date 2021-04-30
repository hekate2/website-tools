$(document).ready(function() {
                    var input = document.getElementById('input');
                    input.addEventListener('change', handleFiles);
                    var canvas = document.getElementById('myCanvas');
                    var ctx = canvas.getContext('2d');
                    var img = new Image;
                    var width = $('#imagedims img').width();
                    var height = $('#imagedims img').height();
                    var fillColor = $('input[name="backgroundCol"]').val();
                    
                    ctx.fillStyle = fillColor;
                    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
                    $('#envelope').draggable();
    
                    function handleFiles(e) {
                        
                        img.src = URL.createObjectURL(e.target.files[0]);
                        
                        img.onload = function() {
                            drawImage();
                        }
                    }
    
                    function drawImage() {
                        ctx.fillStyle = fillColor;
                        ctx.fillRect(0, 0, canvas.width, canvas.height)
                        
                        $(img).appendTo('#imagedims');
                        width = $('#imagedims img').width();
                        height = $('#imagedims img').height();
                            
                        ctx.drawImage(img, canvas.width / 2 - width / 2, - height / 2, width, height);
                        ctx.drawImage(img, - width / 2, canvas.height / 2 - height / 2, width, height);
                        ctx.drawImage(img, canvas.width - width / 2, canvas.height / 2 - height / 2, width, height);
                        ctx.drawImage(img, canvas.width / 2 - width / 2, canvas.height - height / 2, width, height);
                    }
                    
                    $('input[name="elemWidth"]').on('change', function() {
                        var maxHeight = $('input[name="elemWidth"]').val();
                        $('#imagedims img').css('height', maxHeight);
                        drawImage();
                    })
                    $('input[name="backgroundCol"]').on('change', function() {
                        fillColor = $('input[name="backgroundCol"]').val();
                        drawImage();
                    });
                    
                    $("input[name='canWidth']").change(function() {
                        $('#myCanvas').attr('width', $("input[name='canWidth']").val());
                        drawImage();
                    });
                    
                    $( "input[name='canHeight']" ).change(function() {
                        $('#myCanvas').attr('height', $("input[name='canHeight']").val());
                        drawImage();
                    });
    
                    $('canvas').on('mouseover', function() {
                        $('body').css({'background-image':"url(" + canvas.toDataURL("image/png")+ ")" });
                    });
                    // On mouse out
                    $('canvas').on('mouseleave', function() {
                        $('body').css('background', "#6369b1");
                    });
                    
                    $('#submit').on('click', function() {
                        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                        var a = document.createElement('a');
                         a.href = image;
                         a.download = 'pattern.png';
                         a.click();
                    });
                });