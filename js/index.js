function checkEnter(event) {
	if(event.keyCode === 13) {
		input();
	}
}
function input() {
	flag = 0;
	if(document.getElementById('name').value != ""
		&& document.getElementById('mobile').value != ""
		&& document.getElementById('email').value !="") {
		let name = document.getElementById('name').value;
		let mobile = document.getElementById('mobile').value;
		let email = document.getElementById('email').value;

		$.post( "../Academistic/php/index.php", { 
			flag: 1,
			name: name,
			mobile: mobile,
			email: email
		});

		document.getElementById('result').innerHTML = "Your details have been noted !"
	}

	else {
		document.getElementById('result').innerHTML = "Please fill all the fields."
	}
	
}