<?php
    header('Access-Control-Allow-Origin: *');
    include("database.php");

    $response = [];
    
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $userId = $_POST['userId'];
        $friendId = $_POST['friendId'];
        $action = $_POST['action'];

        if($action=='send'){
            $message = $_POST['message'];

            $store_sql = "INSERT INTO messages(sender_id, receiver_id, message_content) VALUES(?, ?, ?)";
        
            $stmt = mysqli_prepare($conn, $store_sql);
            mysqli_stmt_bind_param($stmt, 'iis', $userId, $friendId, $message);
            mysqli_stmt_execute($stmt);
        }
        else if($action=='receive'){
            $fetch_sql = "SELECT * FROM messages WHERE (sender_id=? AND receiver_id = ?) OR (sender_id=? AND receiver_id = ?) ORDER BY timestamp";
            
            $stmt = mysqli_prepare($conn, $fetch_sql);
            mysqli_stmt_bind_param($stmt, 'iiii', $userId, $friendId, $friendId, $userId);
            mysqli_stmt_execute($stmt);
            
            $result = mysqli_stmt_get_result($stmt);
            
            while($data = mysqli_fetch_assoc($result)){
                $response[] = $data;
            }
        }
    }
   
    echo json_encode($response);
    mysqli_close($conn);
?>
