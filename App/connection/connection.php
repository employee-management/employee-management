<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "enterprise";

$conn = new PDO('mysql:host=localhost;dbname=enterprise', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
/*if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}*/
?>