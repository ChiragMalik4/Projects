<?php
    header('Access-Control-Allow-Origin: *');
    include("database.php");


?>

<?php

    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $password = $_POST['Password'];
    $hashpassword = password_hash($password, PASSWORD_DEFAULT);
    $resp = '';

    $check = "SELECT * FROM users WHERE Email = '$email'";
    $result = mysqli_query($conn, $check);
    if($result->num_rows == 1){
        $resp = array("success"=>false, "message"=> "The user with this email already exists!, " . $email);

    }
    else{
        $sql = "INSERT INTO users(Name, Email, Password)
            VALUES ('$name', '$email', '$hashpassword')";


        $res = mysqli_query($conn, $sql);

        if($res){
            $resp = array("success"=>true, "message"=> "You are now registered!, " . $email);
        }
        else {
            $resp = array("success" => false, "message" => "Failed");
        }

}

    mysqli_close($conn);
    $response = $resp;
    echo json_encode($response);
?>