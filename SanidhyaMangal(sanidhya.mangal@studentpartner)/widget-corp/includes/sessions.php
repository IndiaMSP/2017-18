<?php
session_start();

function submit_message(){
      if(isset($_SESSION['message'])){
         echo"<div class=\"message\" >";
         echo htmlentities($_SESSION['message']);
         $_SESSION['message'] = null;
         echo"</div>";
     }
} 
function sbmt_errs(){
      if(isset($_SESSION["errors"])){
         $errors = $_SESSION["errors"];
         $_SESSION["errors"] = null;
         return $errors;
     }
} 
?>