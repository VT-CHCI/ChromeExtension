console.log("loading the clickhandler");
$(".submitbtns > input[type=submit]").click(function(){
	var time = (new Date()).getTime();
	var question = $(".que .qno").text();

	$.ajax({
		type: 'POST',
	    url: 'http://www.example.com/somescript.php',
	    data: {
	      text: "clicked next for question: " + question + " at: " + time
	    }
	  });
});