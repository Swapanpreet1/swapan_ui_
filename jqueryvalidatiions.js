$(document).ready(function() {

	$("#firstname").blur(function() {
		$fname = $("#firstname").val();
		if ($(this).val() == '') {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#name").text(" enter your first name!");
		} else if ($fname = /^[A-Za-z]+$/) {
			$(this).css("border-color", "#008000");
			$('#submit').attr('disabled', true);
			$("#name").text(" ok  alphabets");
		} else {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', false);
			$("#name").text("not alphabets");

		}
	});

	$("#lastname").blur(function() {
		if ($(this).val() == '') {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#lastname").text(" enter your last name!");
		} else {
			$(this).css("border-color", "#2eb82e");
			$('#submit').attr('disabled', false);
			$("#lastname").text("ok ");
		}
	});



	$("#phone").focusout(function() {
		$pho = $("#phone").val();
		if ($(this).val() == '') {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_phone").text(" enter your phone number!");
		} else if ($pho.length != 10) {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_phone").text("* lenght of phone number should be 10");
		} else if (!$.isNumeric($pho)) {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_phone").text(" phone number should be numeric");
		} else {
			$(this).css({
				"border-color": "#2eb82e"
			});
			$('#submit').attr('disabled', false);
			$("#error_phone").text("");
		}

	});


	$(':checkbox').click(function() {
		var p = $('#address11').val();
		$('#address22').val(p);
	});


	// $("#checkbox").on("change", function() {

	// 	if (this.checked) {

	// 		$("[name='address1']").val($("[name='addresss2']").val());



	// 	}

	// });



	$("#email").focusout(function() {
		$em = $("#email").val();
		if ($(this).val() == '') {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_email").text(" enter your email");
		} else if ($em = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/) {
			$(this).css("border-color", "#2eb82e");
			$('#submit').attr('disabled', true);
			$("#error_email").text("correct  email");
		} else {
			$(this).css({
				"border-color": "FF0000"
			});
			$('#submit').attr('disabled', false);
			$("#error_email").text("enter correct email");
		}

	});



	$("#pass2").blur(function() {

		if ($(this).val() == '') {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);

		} else if ($('#pass1').val() == $('#pass2').val()) {
			$(this).css("border-color", "#2eb82e");
			$('#submit').attr('disabled', true);
			$("#e_password").text(" password match");
		} else {
			$(this).css("border-color", "#FF0000");
			$('#submit').attr('disabled', false);
			$("#e_password").text("password not match");
		}

	});


	$("#submit").click(function() {
		if ($("#firstname").val() == '') {
			$("#firstname").css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_name").text(" enter your first name!");
		}
		if ($("#lastname").val() == '') {
			$("#lastname").css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_lastname").text(" enter your last name!");
		}



		if ($("#email").val() == '') {
			$("#email").css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_email").text("enter email!");
		}

		if ($("#phone").val() == '') {
			$("#phone").css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_phone").text(" enter your phone number!");
		}
		if ($("#password").val() == '') {
			$("#password").css("border-color", "#FF0000");
			$('#submit').attr('disabled', true);
			$("#error_password").text(" enter password!");
		} else {
			alert("names added ");
			$('#submit').attr('enabled', true);
			var node = document.createElement("node");
			var text = document.getElementById("firstname").value;
			node.innerHTML = text;
			var mail = document.getElementById("email").value;
			node.setAttribute('title', mail);
			document.getElementById("list1").appendChild(node);

		}


	});

});