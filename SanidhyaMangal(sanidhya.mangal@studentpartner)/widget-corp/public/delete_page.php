<?php 
    //session_start();
    require_once("../includes/sessions.php");
    include("../includes/validation_function.php");
    include("../includes/config.php");
    require_once("../includes/functions.php");
    find_selected_page();
    include("../includes/layouts/header.php");
    ?>
<?php
   if(!$current_page){
       redirect_to("manage_content.php");
   }
   
    ?>
<?php
        $id = $current_page['id'];
        $sql_ins= "DELETE from pages  WHERE id = {$id} limit 1 " ;
        $result  = mysqli_query($conn,$sql_ins);
        if($result && mysqli_affected_rows($conn)==1){
            $_SESSION['message'] = "Page Deleted Sucessfully."; 
            redirect_to("manage_content.php");
        }
        else{
            $_SESSION['message'] = "Page Deletion Failed.";
            redirect_to("manage_content.php");
        }
?>
<?php
    include("../includes/layouts/footer.php");
    ?>
