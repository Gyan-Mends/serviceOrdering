<?php
        // including the access headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Method: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    //starting session
    session_start();

    // decoding the json file
    $input = file_get_contents("php://input");
    $data = json_decode($input,true);

    
    //reading data from the input field
    $firstName =$data["firstName"];
    $email =$data["email"];
    $middleName =$data["middleName"];
    $phone =$data["phone"];
    $lastName =$data["lastName"];
    $gender =$data["gender"];
    $businessName =$data["businessName"];
    $businessEmail =$data["businessEmail"];
    $businessLocation =$data["businessLocation"];
    $landMark =$data["landMark"];
    $businessNumber =$data["businessNumber"];
    $businessLogo =$data["businessLogo"];
    $password =$data["password"];
    $confirmPassword =$data["confirmPassword"];
    $userName =$data["userName"];

    $stmt = mysqli_prepare("INSERT INTO users (first_name, last_name, middle_name, email, phone, gender, business_name, business_email, business_location, landmark, business_number, business_logo, password, confirm_password, username) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    mysqli_stmt_bind_param("sssssssssssssss", $firstName, $lastName, $middleName, $email, $phone, $gender, $businessName, $businessEmail, $businessLocation, $landMark, $businessNumber, $businessLogo, $password, $confirmPassword, $userName);


    // Execute the statement
if (mysqli_stmt_execute) {
    echo "New record inserted successfully";
} else {
    echo "Error: " . $stmt->error;
}


?>