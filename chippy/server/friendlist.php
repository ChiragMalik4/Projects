<?php
    header('Access-Control-Allow-Origin: *');
    include("database.php");


?>

<?php

    $response = [];
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $userId = $_POST['userId'];

        $sql = "SELECT * FROM friends WHERE user1_id = '$userId' OR user2_id = '$userId'";
        $result = mysqli_query($conn, $sql);

        if($result->num_rows>0){
            while($data = mysqli_fetch_assoc($result)){
                $friendId = ($data['user1_id']==$userId)?$data['user2_id'] : $data['user1_id'];
                $friends_info = "SELECT * FROM users WHERE id = '$friendId'";
                $friend_list = mysqli_query($conn, $friends_info);
                $friend_info = mysqli_fetch_assoc($friend_list);
                $response[] = $friend_info;
            }
        }

    }
    echo json_encode($response);
    mysqli_close($conn);


?>