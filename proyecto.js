$(function($){
	$("form").submit(function(event){
		event.preventDefault();

		$.ayax({
			url: "https://formspre.io/andreschiarelli@gmail.com",
			method:"POST",
			data: {
				name: $("#fname").val(),
				email:$("#email").val(),
				message:$("#message").val()
			},
				dataType: "json"
			})

				.done(function(){
				$("#fname").val("");
				$("#email").val("");
				$("#message").val("");
				alert("tu mensaje ha sido enviado!");
			}).fail(function(){
				alert("error,intente nuevamente!");

			});
		});
});








	