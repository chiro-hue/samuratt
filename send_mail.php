<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));


    $to = "aldriechs@gmail.com";  
    $subject = "New Message from Portfolio Contact Form";
    $body = "You received a new message from your portfolio site:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Message:\n$message\n";

    $headers = "From: $email";


    if (mail($to, $subject, $body, $headers)) {
        echo "<p style='color: green;'>Message sent successfully! Thank you, $name.</p>";
    } else {
        echo "<p style='color: red;'>Sorry, your message could not be sent. Please try again later.</p>";
    }
} else {
    echo "<p style='color: red;'>Invalid request.</p>";
}
?>
