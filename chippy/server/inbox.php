<?php
    header('Access-Control-Allow-Origin: *');
    include("database.php");


?>

<?php
    $response = [];
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $userId = $_POST['userId'];

        $sql = "SELECT * FROM friend_requests WHERE receiver_id = '$userId' && status = 'pending'";
        $result = mysqli_query($conn, $sql);
        

        if($result->num_rows > 0){
            
            while($data = mysqli_fetch_assoc($result)){
                $sender_id = $data['sender_id'];
                $senderSql = "SELECT * FROM users WHERE id = '$sender_id'";
                $senderSqlexe = mysqli_query($conn, $senderSql);
                $senderInfo = mysqli_fetch_assoc($senderSqlexe);
                $response[] = $senderInfo;
            }

        }

    }

    echo json_encode($response);
    mysqli_close($conn);

?>