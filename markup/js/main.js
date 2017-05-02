$(function(){
	var $button = $("#press-button");

	$button.click(function(){
		$(".notintune").toggleClass("cancel-animation");
	});
});