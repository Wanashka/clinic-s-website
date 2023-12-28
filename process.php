<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "rbru-metrika@yandex.ru";
  $subject = "Новое сообщение с формы";
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);
}
?>
