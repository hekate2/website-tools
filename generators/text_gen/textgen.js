$( document ).ready(function() {
                // intialise variables
                var fontSize = $("#setFontSize").val();
                var text = $("#setText").val();
                var width = $("#setWidth").val();
                var fontType = $('input[name="font"]:checked').val();
                var height;
                var lineHeight = parseInt($('#setHeight').val());
                var canWidth = $('#getWidth').width();
                var canHeight = $('#getWidth').height();
                var canvas = document.getElementById("myCanvas");
                var shadowCol = $('#shadowColor').val();
                var bgCol = $('#bgColor').val();
                var textCol = $('#textColor').val();
                var shadowBl = 5;
                var shadowOffs = 2;
                
                $('#envelope').draggable();

                function getTextDims() {
                    
                    $('#getWidth').empty();
                    $('#getWidth').css('font', fontSize + "px " + fontType);
                    $('#getWidth').append(text);
                    
                    canWidth = $('#getWidth').width();
                    canHeight = $('#getWidth').height();
                }
                
                function drawStuff() {
                    canvas.setAttribute('height', 2 * lineHeight + parseInt(canHeight));
                    canvas.setAttribute('width',width);

                    height = $('#myCanvas').height();
                    var ctx = canvas.getContext("2d");
                                        
                    ctx.font = fontSize + "px " + fontType;
                    ctx.fillStyle = bgCol;
                    ctx.fillRect(0, 0, width, height);
                    ctx.fillStyle = textCol;
                    ctx.shadowOffsetX = shadowOffs;
                    ctx.shadowOffsetY = shadowOffs;
                    ctx.shadowColor = shadowCol;
                    ctx.shadowBlur = shadowBl;
                    
                    ctx.fillText(text, width / 2 - canWidth / 2, canHeight / 2);
                    ctx.fillText(text, 0 - canWidth / 2, canHeight + lineHeight);
                    ctx.fillText(text, width - canWidth / 2, canHeight + lineHeight);
                    ctx.fillText(text, width / 2 - canWidth / 2, canHeight + 2 * lineHeight + canHeight / 2);
                }
                
                getTextDims();
                drawStuff();

                $('canvas').on('mouseover', function() {
                    $('body').css({'background-image':"url(" + canvas.toDataURL("image/png")+ ")" });
                });
                // On mouse out
                $('canvas').on('mouseleave', function() {
                    $('body').css('background', "#6369b1");
                });
                $( "#setWidth" ).change(function() {
                    width = $("#setWidth").val();
                    drawStuff();
                });
                $( "#setHeight" ).change(function() {
                    lineHeight = parseInt($('#setHeight').val());
                    getTextDims();
                    drawStuff();
                });
                $( "#setText" ).change(function() {
                    text = $("#setText").val();
                    getTextDims();
                    drawStuff();
                });
                $( "#setFontSize" ).change(function() {
                    fontSize = $( "#setFontSize" ).val();
                    getTextDims();
                    drawStuff();
                });
                $('#shadowColor').on('change', function() {
                    shadowCol = $('#shadowColor').val();

                    drawStuff();
                });
                $('#textColor').on('change', function() {
                    textCol = $('#textColor').val();
                    drawStuff();
                });
                $('#bgColor').on('change', function() {
                    bgCol = $('#bgColor').val();
                    drawStuff();
                });

                $('#shadow').on('change', function() {
                    var shadowType = $('#shadow').val();

                    if (shadowType == "crisp") {
                        shadowCol = $('#shadowColor').val();
                        shadowBl = 0;
                        shadowOffs = 2;
                    } else if (shadowType == "soft") {
                        shadowCol = $('#shadowColor').val();
                        shadowBl = 5;
                        shadowOffs = 2;
                    } else if (shadowType == "none"){
                        shadowCol = 0;
                        shadowBl = 0;
                        shadowOffs = 0;
                    }

                    drawStuff();
                });
    
                $("input[type='radio'][name='font']").on('change', function () {
                    fontType = $('input[name="font"]:checked').val();
                    getTextDims();
                    drawStuff();
                });
    
                 $('#submit').on('click', function() {
                    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                    var a = document.createElement('a');
                     a.href = image;
                     a.download = 'text.png';
                     a.click();
                });
               
            });