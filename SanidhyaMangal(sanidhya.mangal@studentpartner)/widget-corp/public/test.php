<?php 
   require_once("../includes/functions.php");
   require_once("../includes/sessions.php");
   include("../includes/config.php");
   require_once("../includes/functions.php");
      $subject_id = $_GET['id'];
      echo find_page_subject_id($subject_id);
     ?>