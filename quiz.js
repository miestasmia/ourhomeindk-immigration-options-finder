$('.btn_no').on('click', function () {
	var div = $(this).parent();
	div.hide();
	div.next().show();
});

$('.btn_yes').on('click', function () {
	var div = $(this).parent();
	var result = div.children('.result');
	if (result.length) { result.show(); }
	else {
		var resultStep = div.children('.result_step');
		div.children().hide();
		resultStep.show();
	}
});
