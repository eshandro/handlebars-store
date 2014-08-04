$(document).on('ready', function() {
  
	var productsTemplateSource = $('#products-template').html();
	var productsTemplate = Handlebars.compile(productsTemplateSource);

	for (var i = 0; i < productsData.productsList.length; i++) {
		$('#product-container')
		.append( productsTemplate( productsData.productsList[i] ))
	};

	var wishlistTemplateSource = $('#wishlist-item').html();
	var wishlistTemplate = Handlebars.compile( wishlistTemplateSource);

	$(document).on('click', '.add-wishlist', function(error) {
		var gameTitle = $(this).siblings('.game-title').text();
		console.log(gameTitle);
		var gameCost = $(this).siblings('.game-cost:last').text();
		console.log(gameCost);

		$('#wishlist').append(wishlistTemplate( {title: gameTitle, cost: gameCost} ));
	});

	$(document).on('click', '.remove-button', function() {
		$(this).closest('li').remove();
	})

});