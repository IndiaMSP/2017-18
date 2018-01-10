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
   if(!$current_subject){
       redirect_to("manage_content.php");
   }
   
    ?>
<?php 
       $page_set = find_all_pages($current_subject['id']);
        $pages = mysqli_num_rows($page_set);
        if($pages>0){
            $_SESSION['message']= "Can't Delete Subject with Pages";
            redirect_to("manage_content.php");
        }
        $id = $current_subject['id'];
        $sql_ins= "DELETE from subjects  WHERE id = {$id} limit 1 " ;
        $result  = mysqli_query($conn,$sql_ins);
        if($result && mysqli_affected_rows($conn)==1){
            $_SESSION['message'] = "Subject Deleted Sucessfully."; 
            redirect_to("manage_content.php");
        }
        else{
            $_SESSION['message'] = "Subject Deletion Failed.";
            redirect_to("manage_content.php");
        } 
?>
<?php
    include("../includes/layouts/footer.php");
    ?>
