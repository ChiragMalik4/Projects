<?php
    header('Access-Control-Allow-Origin: *');
    include("database.php");


?>

<?php
    $response = [];
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $userId = $_POST['userId'];
        $friendId = $_POST['friendId'];
        $action = $_POST['action'];
        if($action=='accept'){
            $sql = "UPDATE friend_requests SET status = 'accepted' WHERE sender_id = '$friendId' && receiver_id = '$userId'";
            $friendsql = "INSERT INTO friends(user1_id, user2_id)
                            VALUES('$userId', '$friendId')";
            mysqli_query($conn, $friendsql);

        }
        else if($action=='reject'){
            $sql = "UPDATE friend_requests SET status = 'rejected' WHERE sender_id = '$friendId' && receiver_id = '$userId'";

        }
        else{
            $response['success'] = false;
            $response['message'] = 'Invalid action.';
            exit;
        }

        $result = mysqli_query($conn, $sql);

        if($result){
            $response['success'] = true;
            $response['message'] = ($action=='accept')? 'Friend Request Accepted.' : 'Friend Request Rejected.';
        }
        else{
            $response['success'] = false;
            $response['message'] = 'Error processing friend request.';
        }

    }

    echo json_encode($response);
    mysqli_close($conn);

?>