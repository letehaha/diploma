<?php

   $recepient = "letehaha@gmail.com";
   $sitename = "xine.co.nf";

   $fname = trim($_POST["first_name"]);
   $sname = trim($_POST["second_name"]);
   $email = trim($_POST["email"]);
   $tel = trim($_POST["tel_number"]);
   $web_site = trim($_POST["web_site"]);
   $about_hear = trim($_POST["about_hear"]);
   $budget = trim($_POST["budget"]);
   $select_time = trim($_POST["select_time"]);
   $text_message = trim($_POST["text_message"]);

   $message = "Fname: $fname \nSname: $sname \nEmail: $email \nTelephone number: $tel \nWebSite: $web_site \nAbout hear: $about_hear \nBudget: $budget \nSelect time: $select_time \nText: $text_message;

   $pagetitle = $sitename;
   mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>