$(document).ready(function() {
                var gradient = $('input[name="stripe"]:checked').val();
                var stripeOneCol = $('input[name="stripeOneCol"]').val();
                var stripeTwoCol = $('input[name="stripeTwoCol"]').val();
                var numStripes = $('input[name="stripeSize"]').val();
                var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");
                
                $('#envelope').draggable();
    
                function drawStripe() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
                    var stripeWidth = canvas.width / numStripes;
                    ctx.fillStyle = stripeOneCol;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = stripeTwoCol;
                    
                    while (numStripes % 2 != 0) {
                        numStripes = parseInt(numStripes) + 1;
                        stripeWidth = canvas.width / numStripes;
                    }
                    
                    if (gradient == 'vertical') {
                        
                        for (var i = 0; i < numStripes * 2; i++) {
                            var x = i * stripeWidth * 2;
                            ctx.fillRect(x, 0, stripeWidth, canvas.width);
                        }
                        
                    } else if (gradient == 'horizontal') {
                        
                        stripeWidth = canvas.height / numStripes;
                        
                        for (var i = 0; i < numStripes * 2; i++) {
                            var y = i * stripeWidth * 2;
                            ctx.fillRect(0, y, canvas.width, stripeWidth);
                        }
                        
                    } else if (gradient == 'diagonalUp') {
                        
                        for (var i = 0; i < numStripes * 2; i++){
                            
                          ctx.beginPath();
                          ctx.strokeStyle = i % 2?stripeOneCol:stripeTwoCol;
                          ctx.lineWidth = stripeWidth;
                          ctx.lineCap = 'round';

                          ctx.moveTo(0, i * stripeWidth + stripeWidth / 2 + stripeWidth);
                          ctx.lineTo(i * stripeWidth + stripeWidth / 2 + stripeWidth, 0);
                          ctx.stroke();
                        }
                    } else if (gradient == 'diagonalDown') {
                        
                        for (var i=0;i<numStripes*2;i++){
                            ctx.beginPath();
                            ctx.strokeStyle = i % 2?stripeOneCol:stripeTwoCol;
                            ctx.lineWidth = stripeWidth;
                            ctx.lineCap = 'round';
                            
                            ctx.moveTo(i*stripeWidth - myCanvas.width, -stripeWidth);
                            ctx.lineTo(i*stripeWidth + stripeWidth, myCanvas.height);
                            ctx.stroke();
                        }
                    }
                }
                
                drawStripe();
            
                $('input[name="stripe"]').on('change', function() {
                    gradient = $('input[name="stripe"]:checked').val();
                    drawStripe();
                });
                $('input[type="color"]').on('change', function() {
                    stripeOneCol = $('input[name="stripeOneCol"]').val();
                    stripeTwoCol = $('input[name="stripeTwoCol"]').val();
                    
                    drawStripe();
                })
                $('canvas').on('mouseover', function() {
                    $('body').css({'background-image':"url(" + canvas.toDataURL("image/png")+ ")" });
                });
                // On mouse out
                $('canvas').on('mouseleave', function() {
                    $('body').css('background', "#fff");
                });
                $('input[name="stripeSize"]').on('change', function() {
                    numStripes = $('input[name="stripeSize"]').val();
                    drawStripe();
                });
                $('#submit').on('click', function() {
                    var d=canvas.toDataURL("image/png");
                    var a = document.createElement('a');
                     a.href = d;
                     a.download = 'stripe.png';
                     a.click();
                });
            });