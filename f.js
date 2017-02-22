function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function checkPass() {
	//Store the password field objects into variables ...
	var pass1 = document.getElementById('pass1');
	var pass2 = document.getElementById('pass2');
	//Store the Confimation Message Object ...
	var message = document.getElementById('confirmMessage');
	//Set the colors we will be using ...
	var goodColor = "#66cc66";
	var badColor = "#ff6666";
	//Compare the values in the password field 
	//and the confirmation field
	if (pass1.value == pass2.value) {
		//The passwords match. 
		//Set the color to the good color and inform
		//the user that they have entered the correct password 
		pass2.style.backgroundColor = goodColor;
		message.style.color = goodColor;
		message.innerHTML = "Passwords Match"
	} else {
		//The passwords do not match.
		//Set the color to the bad color and
		//notify the user.
		pass2.style.backgroundColor = badColor;
		message.style.color = badColor;
		message.innerHTML = "Passwords Do Not Match!"
	}
}



//validate username
function validate(txt) {
	txt.value = txt.value.replace(/^\s+|\s+$/g, "");
}


//copying permanent addr to correspondance addr
function adrr(f) {
	if (f.addr1.checked == true) {
		f.address2.value = f.address1.value;

	}
}


// validate email
function email_validate(email) {
	var reg_mail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

	if (reg_mail.test(email) == false) {
		document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid !!!! pls enter email again </span>";
	} else {
		return true;
	}
}


//validate phone
function validatephone(phone) {
	var validp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;


	if (validp.test(phone) == false) {
		document.getElementById("status1").innerHTML = "<span class='warning'> Incorrect phone number </span>";
	} else {
		return true;
	}


}


function addusername() {



	alert("hey");
	var li1 = document.createElement("li1");
	var text = document.getElementById("txt").value;
	li1.innerHTML = text;

	var mail = document.getElementById("email").value;

	li1.setAttribute('title', mail);

	document.getElementById("list1").appendChild(li1);

}