<?php

   $recepient = "letehaha@gmail.com";
   $sitename = "xine.co.nf";

   $fname = trim($_POST["first_name"]);
   $sname = trim($_POST["second_name"]);
   $email = trim($_POST["email"]);
   $text_message = trim($_POST["text_message"]);

   $message = "Fname: $fname \nSname: $sname \nEmail: $email \nText: $text_message"

   $pagetitle = $sitename;
   mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
   
?>