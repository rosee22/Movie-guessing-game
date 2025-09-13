<?php
$servername = "localhost";
$username = "y2jfwcz_WAD";
$password = "Thrisha22";
$dbname = "y2jfwcz_WAD";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

   // Check connection
   if ($conn->connect_error) {
       die("Connection failed: " . $conn->connect_error);
   }

   // Fetch tasks from the database
   $result = $conn->query("SELECT * FROM movies");
   $tasks = [];

   // Store tasks in an array
   while ($row = $result->fetch_assoc()) {
       $tasks[] = $row;
   }

   // Return tasks as JSON
   echo json_encode($tasks);
   $conn->close();
   ?>