<?php
	if(isset($_POST['flag']) && $_POST['flag'] == 1) {
		$name = $_POST['name'];
		$mobile = $_POST['mobile'];
		$email = $_POST['email'];

		$to = "Anirudhgoel.delhi@gmail.com";
		$subject = "User Details";
		$message = "Name :".$name."/nMobile Number :".$mobile."/nEmail :".$email;

		mail($to, $subject, $message);
	}
?>