<?php
    header('Access-Control-Allow-Origin: *');
    include("database.php");


?>

<?php
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $sender_id = $_POST['sender_id'];
        $receiver_id = $_POST['friend_id'];
        $resp='';

        if($sender_id==$receiver_id){
            $resp = $resp = array("success"=>false, "message"=> "Can't send yourself a request.");
        }
        else{
            $check = "SELECT * FROM friend_requests WHERE sender_id = '$sender_id' && receiver_id = '$receiver_id'";
            $result = mysqli_query($conn, $check);
            if($result->num_rows == 1){
                $resp = array("success"=>false, "message"=> "You already sent ID: " . $receiver_id . " a request.");
            }
            else{
                $viceversa = "SELECT * FROM friend_requests WHERE sender_id = '$receiver_id' && receiver_id = '$sender_id'";
                $resultversa = mysqli_query($conn, $viceversa);
                if($resultversa->num_rows == 1){
                    $resp = array("success"=>false, "message"=> "The ID: " . $receiver_id . " already sent you a request.");
                }
                else{

                    $sql = "INSERT INTO friend_requests(sender_id, receiver_id)
                    VALUES ('$sender_id', '$receiver_id')";

                    $res = mysqli_query($conn, $sql);

                    if($res){
                        $resp = array('success'=>true, 'message'=>"Friend Request Sent!");
                    }
                    else{
                        $resp = array('success'=>false, 'message'=>"Failed to send request.");
                    }
                }
            }
        }
    }

    mysqli_close($conn);
    $response = $resp;
    echo json_encode($response);



?>