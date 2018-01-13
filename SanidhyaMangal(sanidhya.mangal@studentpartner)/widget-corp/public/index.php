<?php
    //session_start();
    $layout_context = "public";
    require_once("../includes/sessions.php");
    include("../includes/config.php");
    require_once("../includes/functions.php");
    include("../includes/layouts/header.php");
  //  include("../includes/layouts/footer.php");
   find_selected_page(true);

    ?>
<div id="main">
    <div id="navigation"> 
              <?php 
              navigation_public($current_subject,$current_page); 
              ?>
 </div>
<div id="page"> 
    <?php 
        if($current_page){
            echo"<h2>".htmlentities($current_page['menu_name'])."</h2>";
           echo "<p id=\"content\">".nl2br(htmlentities($current_page['content']))."</p>";
        }
        else{
            echo"<h2>Welcome!!!!</h2>";
        }
         
        ?>
    </div>
</div>
<?php
//    include("../includes/layouts/header.php");
    include("../includes/layouts/footer.php");
    ?>
