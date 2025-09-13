<?php
$data = json_decode(file_get_contents('php://input'), true);
$score = $data['score'];
//connect to database
$servername = "localhost";
$username = "y2jfwcz_WAD";
$password = "Thrisha22";
$dbname = "y2jfwcz_WAD";
// Connect to the database 
   $conn =  mysqli_connect($servername, $username, $password, $dbname); 
   if ($conn->connect_error) { 
       die("Connection failed: " . $conn->connect_error); 
   } 
// Prepare and insert the score into the database
$query = "INSERT INTO scores (score) VALUES (?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $score); 

if ($stmt->execute()) {
    echo json_encode(["message" => "Score saved successfully"]);
} else {
    echo json_encode(["error" => "Unable to save score"]);
}

$stmt->close();
mysqli_close($conn);
?>
