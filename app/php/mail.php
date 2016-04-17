<?php

	$recepient = "letehaha@gmail.com";
	$sitename = "DySo";

	$first_name = trim($_POST["first_name"]);
	$second_name = trim($_POST["second_name"]);
	$email = trim($_POST["email"]);
	$text_message = trim($_POST["text_message"]);
	$message = "First name: $first_name \nSecond name: $second_name \nEmail: $email \nMessage: $text_message";

	$pagetitle = "Новое сообщение с сайта \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>