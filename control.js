$(document).ready(function(){
	$toggle_on = $(".fa-toggle-on");
	$toggle_off = $(".fa-toggle-off");

	$bt = $(".bt");
	$icon = $(".icon");

	$toggle_on.hide();
	$icon.hide();

	$toggle_off.click(function(){
		$(this).hide();
		$toggle_on.show();
		$icon.show();
	});

	$toggle_on.click(function(){
		$(this).hide();
		$toggle_off.show();
		$icon.hide();
	});
});