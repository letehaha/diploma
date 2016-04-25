<?php

	function SendMail($recipient, $subject, $message, $host){
	
		$message .= "<BR />----------------------------------------------------
		<BR />Не отвечайте на этот смс, его отправил бот";
		return (mail($recipient, $subject, $message, Headers($host))) ? true : false;
	
	}

	function Headers($host){
	
		$headers = "MIME-Version: 1.0\r\n";
		$headers.= "Content-type: text/html; charset=utf-8\r\n";
		$headers.= "Date: ".date("m.d.Y (H:i:s)",time())."\r\n";
		$headers.= "From: support@".$host." \r\n";
		
		return $headers;
	
	}


	$to = "letehaha@gmail.com";
	$host = "xine.co.nf";
	$fname = $_POST["first_name"];
	$sname = $_POST["second_name"];
	$email = $_POST["email"];
	$text_message = $_POST["text_message"];
	$message = "Fname: $fname \nSname: $sname \nEmail: $email \nMessage: $text_message";

	$subject = "Новое сообщение с сайта ".$host;
	
	if(SendMail($to, $subject, $message, $host))
		exit('{"status":"success","text":"Сообщение отправлено !"}');
	else
		exit('{"status":"error","text":"Что-то пошло не так, видимо ты еблан !"}');
   
?>