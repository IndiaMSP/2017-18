<?php 
$db_host = "localhost";
$db_usr  = "widget_cms";
$db_pwd  = "secretpassword";
$db_name = "widget_corp";

// Now we are here to create a connection 
$conn =  mysqli_connect($db_host,$db_usr,$db_pwd,$db_name);
// Check if sucessfull conection or not 
if(!$conn){
    die("Connection Failed".mysqli_error($conn));
} 