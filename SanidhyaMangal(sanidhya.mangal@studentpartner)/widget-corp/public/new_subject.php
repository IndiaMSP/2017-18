<?php 
    //session_start();
    require_once("../includes/sessions.php");
    include("../includes/config.php");
    require_once("../includes/functions.php");
    if(!isset($layout_context)) $layout_context ="admin"; 
    include("../includes/layouts/header.php");
    include("../includes/validation_function.php");
    find_selected_page();
    ?>
<?php
    $subject_set = find_all_subjects(false);
    ?>
<div id="main">
    <div id="navigation">
        <?php
            navigation($current_subject,$current_page);
            ?>
</div>

<div id="page">
<?php  
      submit_message();
      $errors = sbmt_errs();
      echo form_errors($errors);
     ?>
 <h2>Create Subject </h2>

   <form action="create_subject.php" method="POST">
       <p>Subject Name:
       <input type="text" name="menu_name"/>
       </p>
       <p>Position:
        <select name="position">
            <?php
            $subject_set = find_all_subjects(false);
            $subject_count = mysqli_num_rows($subject_set);
            for($count=1 ;$count<= $subject_count+1 ; $count++){
                echo"<option value=\"{$count}\">{$count}</option>";
            }
            ?>
        </select>
       </p>
       <p>Visible:
           <input type="radio" name="visible" value="0"/>No
           &nbsp;
           <input type="radio" name="visible" value="1"/>Yes
       </p>
       <button type="submit" name="submit" value="new subject">Create Subject</button>
   </form>
   <br/>
   <a href="manage_content.php">Cancel</a>
    </div>
</div>
<?php
//    include("../includes/layouts/header.php");
    include("../includes/layouts/footer.php");
    ?>
