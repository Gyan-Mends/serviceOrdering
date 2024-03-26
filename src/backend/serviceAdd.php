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
    $serviceName =$data["serviceName"];
    $category =$data["category"];
    $nameDescription =$data["nameDescription"];
    $price =$data["price"];
    $description =$data["description"];
    $date = date("Y-m-d");
    $image = $data["image"];


    //including dbconnection
    include("db_connection.php");

    //inserting into the database
    $serviceAdd = mysqli_prepare($connection, "INSERT INTO services (`name`,`name_description`,`category`, `image`,`price`,`description`,`date`) Values (?,?,?,?,?,?,?)");
    mysqli_stmt_bind_param($serviceAdd,'sssssss',$serviceName,$nameDescription,$category,$image,$price,$description,$date);

    if(mysqli_stmt_execute($serviceAdd)){
        echo "Inserted";
    }else{
        echo "failed";
    }

    ?>