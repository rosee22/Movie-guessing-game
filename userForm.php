<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

// Database credentials
$servername = "localhost";
$username = "y2jfwcz_WAD";
$password = "Thrisha22";
$dbname = "y2jfwcz_WAD";

// Connect to database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die(json_encode(["error" => "Database connection failed: " . mysqli_connect_error()]));
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';

    // Validate input
    if (empty($username)) {
        die(json_encode(["error" => "Username is required"]));
    }

    // Prevent SQL Injection
    $username = mysqli_real_escape_string($conn, $name);

    // Insert username into database
    $sql = "INSERT INTO users (name) VALUES ('$name')";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(["success" => true, "redirect" => "getMovies.html"]);
    } else {
        echo json_encode(["error" => "Error: " . mysqli_error($conn)]);
    }
}

// Close connection
mysqli_close($conn);
?>
