<?php
$host = 'localhost'; // Or your host
$db = 'db';
$user = 'root';
$pass = '';
$conn = '';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name    = $_POST['name'];
$email   = $_POST['email'];
$phone   = $_POST['phone'];
$message = $_POST['message'];

$stmt = $conn->prepare("INSERT INTO inquiry (name, email, phone, message) VALUES ('$name' ,'$email','$phone', '$message')");
$stmt->bind_param("ssss", $name, $email, $phone, $message);

if ($stmt->execute()) {
    echo "Success";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
