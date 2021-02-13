$( document ).ready(function() {
			// Initialise variables
			var color = $('#color1').val();
  			var color2 = $('#color2').val();
  			var width = $('#width').val();
  			var height = $('#height').val();
  			var gradient = $('input[name="grad"]:checked').siblings().css('background');
            
            $('#envelope').draggable();
		    // Method to make all background colors similar, then set the selected background
		    function getBg() {
		    	color = $('#color1').val();
  				color2 = $('#color2').val();
  				

  				$('.example[name ="vertical"]').css('background', 'linear-gradient(' + color + ',' + color2);
			    $('.example[name ="horizontal"]').css('background', 'linear-gradient( to right,' + color + ',' + color2);
			    $('.example[name ="verticalStripe"]').css('background', 'linear-gradient(' + color + ',' + color2 + ',' + color);
			    $('.example[name ="horizontalStripe"]').css('background', 'linear-gradient( to right,' + color + ',' + color2 + ',' + color);
			    $('.example[name ="diagonalUp"]').css('background', 'linear-gradient( 45deg,' + color + ',' + color2);
			    $('.example[name ="diagonalStripesUp"]').css('background', 'linear-gradient( 45deg,' + color + ',' + color2 + ',' + color + ',' + color2 + ',' + color);
			    $('.example[name ="diagonalDown"]').css('background', 'linear-gradient( -45deg,' + color + ',' + color2);
			    $('.example[name ="diagonalStripesDown"]').css('background', 'linear-gradient( -45deg,' + color + ',' + color2 + ',' + color + ',' + color2 + ',' + color);
			    $('.example[name ="ring"]').css('background', 'radial-gradient(' + color + ',' + color2 + ',' + color);
			    $('.example[name ="radial"]').css('background', 'radial-gradient(' + color + ',' + color2);

			    gradient = $('input[name="grad"]:checked').siblings().css('background');

			    $('#product').css('background', gradient);
		    }

		    // Initialise the background
		    getBg();

		    // Initialise product height (first fencepost)
		    $('#product').css('width', width + 'px');
		    $('#product').css('height', height + 'px');

		    // Width input control
		    $( "input[type='text']" ).change(function() {
		    	width = $('#width').val();
  				height = $('#height').val();

		    	$('#product').css('width', width + 'px');
		    	$('#product').css('height', height + 'px');
			});

		    // Select color function
			$( "input[type='color']" ).change(function() {
		    	getBg();
			});

			// Select gradient function
			$( "input[type='radio'][name='grad']" ).change(function() {
		    	getBg();
			});

			// Hover background function
			// On mouse in
			$('#product').on('mouseover', function() {
				width = $('#width').val();
				height = $('#height').val();

				html2canvas(document.querySelector("#product"), {
					width: width,
			  		height: height,
			  		scrollY: -window.scrollY - 1,
                    scrollX: -window.scrollX - 1
				}).then(canvas => {
			        $('body').css('background', "url('" + canvas.toDataURL() + "')");
			    });
			})
			// On mouse out
			$('#product').on('mouseleave', function() {
			        $('body').css('background', "#fff");
			})

			$('#submit').on('click', function() {
				html2canvas(document.querySelector("#product"), {
					width: width - 2,
			  		height: height - 2,
			  		scrollY: -window.scrollY
				}).then(canvas => {
                    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                    var a = document.createElement('a');
                     a.href = image;
                     a.download = 'gradient.png';
                     a.click();
			    });
			})
		});