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
    if(!$current_subject['id']){
            redirect_to("manage_content.php");
        }
    if(isset($_POST['submit'])){
        $required_fields = array("menu_name","position","visible","content");
        validate_presence($required_fields);
        if(empty($errors)){
        $subject_id = $current_subject['id'];
        $menu_name = htmlentities($_POST['menu_name']);
        $position  = (int)$_POST['position'];
        $visible   = (int)$_POST['visible'];
        $content   = htmlentities($_POST['content']);    
        $sql_ins = "INSERT into pages(subject_id,menu_name,position,visible,content) ";
        $sql_ins.= " values({$subject_id},'{$menu_name}',{$position},{$visible},'{$content}')";

        $result  = mysqli_query($conn,$sql_ins);
        if($result){
            $_SESSION['message'] = "Page Created."; 
            redirect_to("manage_content.php?subject=".urlencode($current_subject['id']));
        }
        else{
            $_SESSION['message'] = "Page Creation Failed.";
        }
        }else{
            echo form_errors($errors);
        }
    } 
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
 <h2>Create Page in <?php echo $current_subject['menu_name']; ?> </h2>

   <form action="new_page.php?subject=<?php echo $current_subject['id'];  ?>" method="POST">
       <p>Page Name:
       <input type="text" name="menu_name"/>
       </p>
       <p>Position:
        <select name="position">
            <?php
            $subject_id = $current_subject['id'];
            $page_set = find_all_pages($subject_id,false);
            $page_count = mysqli_num_rows($page_set);
            for($count=1 ;$count<= $page_count+1 ; $count++){
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
       <p>Content:<br>
       <textarea cols="80" rows="20" name="content"></textarea>
       </p>
       <button type="submit" name="submit" value="new page" onclick="return confirm('Are you sure?')" >Create Page</button>
   </form>
   <br/>
   <a href="manage_content.php?subject=<?php echo $current_subject['id']; ?>">Cancel</a>
    </div>
</div>
<?php
//    include("../includes/layouts/header.php");
    include("../includes/layouts/footer.php");
    ?>
