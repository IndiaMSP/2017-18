<?php
    //session_start();
    require_once("../includes/sessions.php");
    include("../includes/config.php");
    require_once("../includes/functions.php");
   if(!isset($layout_context)) $layout_context ="admin";
    include("../includes/layouts/header.php");
  //  include("../includes/layouts/footer.php");
   find_selected_page();

    ?>
<div id="main">
    <div id="navigation">
        <a href ="admin.php"><< Main Menu</a>  
              <?php 
              navigation($current_subject,$current_page); 
              ?>
         </ul>
         <a href = "new_subject.php"> + Add a Subject</a>
 </div>
<div id="page"> 
    <?php 
        submit_message();
        if($current_subject){
        echo "<h2>Manage Subjects</h2>";
       subject_print($current_subject);

 }
        elseif($current_page){
            echo "<h2>Manage Pages</h2>";
            $value = $_GET['page'];
            page_print($current_page);
        }
        else{
            echo"Please a Select or a Page";
        }
         
        ?>
    </div>
</div>
<?php
//    include("../includes/layouts/header.php");
    include("../includes/layouts/footer.php");
    ?>
