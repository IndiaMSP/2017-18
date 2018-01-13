<?php 
    //session_start();
    require_once("../includes/sessions.php");
    include("../includes/validation_function.php");
    include("../includes/config.php");
    require_once("../includes/functions.php");
    find_selected_page();
    if(!isset($layout_context)) $layout_context ="admin";
    include("../includes/layouts/header.php");
    ?>
<?php
   if(!$current_subject){
       redirect_to("manage_content.php");
   }
   
    ?>
<?php 
 if(isset($_POST['submit'])){       
        $required_fields = array("menu_name","position","visible");
        validate_presence($required_fields);
        $menu_name = $_POST['menu_name'];
        $position  = (int)$_POST['position'];
        $visible   = (int)$_POST['visible'];
        $id        = $current_subject['id'];
        if(empty($errors)){
                  $menu_name = mysqli_real_escape_string($conn,$menu_name);
            $sql_ins= "UPDATE subjects set menu_name = '{$menu_name}', position = {$position}, visible = {$visible}  WHERE id = {$id} " ;
        $result  = mysqli_query($conn,$sql_ins);
        if($result && mysqli_affected_rows($conn)==1){
            $_SESSION['message'] = "Subject Updation."; 
            redirect_to("manage_content.php");
        }
        else{
            $_SESSION['message'] = "Subject Updation Failed.";
        }
        }else{
            $_SESSION["errors"] = $errors;
            redirect_to("new_subject.php");
        }
    }
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
 <h2>Edit Subject: <?php echo select_subject($current_subject); ?> </h2>

   <form action="edit_subject.php?subject= <?php echo urlencode($current_subject['id']);?>" method="POST">
       <p>Subject Name:
       <input type="text" name="menu_name" value = "<?php echo select_subject($current_subject);?>"/>
       </p>
       <p>Position:
        <select name="position">
            <?php
            $subject_set = find_all_subjects(false);
            $subject_count = mysqli_num_rows($subject_set);
            for($count=1 ;$count<= $subject_count ; $count++){
                  echo"<option value=\"{$count}\" ";
                if($current_subject['position'] == $count){
                    echo " selected";
                }
                echo">{$count}</option>";
                
            }
            ?>
        </select>
       </p>
       <p>Visible:
           <input type="radio" name="visible" value="0" <?php radio_chk_visible($current_subject); ?>/>No
           &nbsp;
           <input type="radio" name="visible" value="1" <?php radio_chk_visible($current_subject); ?>/>Yes
       </p>
       <button type="submit" name="submit" value="edit subject">Edit Subject</button>
   </form>
   <br/>
   <a href="manage_content.php">Cancel</a>
   &nbsp;
   &nbsp;
   <a href="delete_subject.php?subject=<?php echo $current_subject['id'];?>" onclick="return confirm('Are you sure?')">Delete Subject</a>
 </div>
</div>
<?php
//    include("../includes/layouts/header.php");
    include("../includes/layouts/footer.php");
    ?>
