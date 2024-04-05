<?php
    header('Access-Control-Allow-Origin: *');
    include("database.php");



?>


<?php

    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $email = $_POST['Email'];
        $password = $_POST['Password'];
        

        $sql = "SELECT * FROM users WHERE Email = '$email'";
        $result = mysqli_query($conn, $sql);
        $resp = "";

        if($result->num_rows == 1){
            $user = mysqli_fetch_assoc($result);
            if(password_verify($password, $user['Password'])) {
                $userdata = ['id'=>$user['id'],
                'username'=>$user['Name'],
                'email'=>$user['Email']];

                $resp = array("success"=>true, "message"=> "Login successful! Welcome, " . $user['Email'], "user"=>$userdata);
                
            } else {
                $resp = array("success" => false, "message" => "Incorrect email or password");
            }
        }
        else{
            $resp = array("success" => false, "message" => "User not found");
        }
    }

    mysqli_close($conn);
    $response = $resp;
    echo json_encode($response);
?>
