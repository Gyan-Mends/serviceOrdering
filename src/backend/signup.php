<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Starting session
session_start();

$input = file_get_contents("php://input");
$data = json_decode($input, true);

// Including the database connection
include("db_connection.php");

// Storing input data in variables
$FirstName = $data['FirstName'];
$LastName = $data["LastName"];
$Mail = $data["Mail"];
$Pass = $data["Pass"];
$ConfirmPass = $data["ConfirmPassword"];

// Hash the password
$hashedPassword = password_hash($Pass, PASSWORD_DEFAULT);

// Check if the user already exists
$select_query = mysqli_prepare($connection, "SELECT * FROM signup WHERE email=?");
mysqli_stmt_bind_param($select_query, 's', $Mail);
mysqli_stmt_execute($select_query);
$result = mysqli_stmt_get_result($select_query);

if (mysqli_num_rows($result) > 0) {
    echo "Exist"; // User already exists
}  else {
    // Insert data into the database
    $insert_query = mysqli_prepare($connection, "INSERT INTO signup (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
    mysqli_stmt_bind_param($insert_query, 'ssss', $FirstName, $LastName, $Mail, $hashedPassword);
    
    if (mysqli_stmt_execute($insert_query)) {
        echo "Success"; // Insertion successful
    } else {
        echo "Failed"; // Insertion failed
    }
}
// Close prepared statements and database connection
mysqli_stmt_close($select_query);
mysqli_stmt_close($insert_query);
mysqli_close($connection);
?>
