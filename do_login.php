<?php/*
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//connect to database
$host = "monikosdb.ci7ganrx1sxe.us-east-1.rds.amazonaws.com:3306";
$dbuser = "monikosdbun";
$pass = "monikosdbpw";
$dbname = "monikosdb";
$conn = new mysqli($host, $dbuser, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM 'Users' WHERE (
'username'=  '".$_POST["username"]."' AND 'password'= '".$_POST["password"]."')";

if ($conn->query($sql) === TRUE) {
    echo '[{
    "response": 200,
    "username": "'.$_POST["username"].'",
    "email": "'.$_POST["email"].'",
    "password": "'.$_POST["password"].'"}]';
} else {
    echo '[{"response":"'.$conn->error.'"}]';
}

$conn->close();
//echo($result);
*/
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//connect to database
$host = "monikosdb.ci7ganrx1sxe.us-east-1.rds.amazonaws.com:3306";
$dbuser = "monikosdbun";
$pass = "monikosdbpw";
$dbname = "monikosdb";
$conn = new mysqli($host, $dbuser, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//$sql = "INSERT INTO Users (id, username, email, password)
//VALUES (NULL, '".$_POST["username"]."', '".$_POST["email"]."', '".$_POST["password"]."')";

/*$sql = "SELECT * FROM Users WHERE 
'username' LIKE '".$_POST["username"]."' AND 'password' LIKE '".$_POST["password"]."'";*/
/*$sql = "SELECT * 
FROM Users
WHERE  `username` LIKE  'wowee'
AND  `password` LIKE  'testpw'";
*/
//$sql = sprintf('SELECT * FROM `Users` WHERE (`username`) LIKE ("wowee")');
//$sql = mysql_query('SELECT * FROM `Users` WHERE (`username`) LIKE ("wowee")');

//echo $sql;

//if ($conn->query($sql) === TRUE) {
//if(!$sql){
//	echo '[{"response":"'.$conn->error.'",
//		"error":"'.mysqli_connect_errno() . PHP_EOL.'"}]';
//}else{
//    echo '[{
//    "response": 200,
//    "login-status": "logged-in",
//    "username": "'.$_POST["username"].'",
//    "password": "'.$_POST["password"].'"}]';
//}
/*} else {
    echo '[{"response":"'.$conn->error.'",
		"error":"'.mysqli_connect_errno() . PHP_EOL.'"}]';
}*/

$sql = "SELECT * FROM Users WHERE username LIKE 'wowee' AND password LIKE 'testpw'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Username: " . $row["username"]. " Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
//echo($result);
?>