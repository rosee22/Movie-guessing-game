<?php 
// connect to database
$servername = "localhost";
$username = "y2jfwcz_WAD";
$password = "Thrisha22";
$dbname = "y2jfwcz_WAD";
// Connect to the database 

   $conn =  mysqli_connect($servername, $username, $password, $dbname); 
   // Check connection 

   if ($conn->connect_error) { 

       die("Connection failed: " . $conn->connect_error); 

   } 
   $result = $conn->query("SELECT * FROM scores"); 
   $scores = []; 
      // Store tasks in an array 
    while ($row = $result->fetch_assoc()) { 
   $scores[] = $row; 
   } 
      // Return tasks as JSON 
echo json_encode($scores); 
   $conn->close(); 
?>
