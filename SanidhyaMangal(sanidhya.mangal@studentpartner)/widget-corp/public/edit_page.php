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
    if(!$current_page['id']){
            redirect_to("manage_content.php");
        }
    if(isset($_POST['submit'])){
        $required_fields = array("menu_name","position","visible","content");
        validate_presence($required_fields);
        if(empty($errors)){
        $id = $current_page['id'];
        $menu_name = $_POST['menu_name'];
        $position  = (int)$_POST['position'];
        $visible   = (int)$_POST['visible'];
        $content   =  htmlentities($_POST['content']);    
        $sql_ins = "UPDATE pages set menu_name = '{$menu_name}' , position = {$position}, visible = {$visible} , content = '{$content}' ";
        $sql_ins.= " where id = {$id} limit 1";  
        

        $result  = mysqli_query($conn,$sql_ins);
        if($result && mysqli_affected_rows($conn)==1){
            $_SESSION['message'] = "Page Updated."; 
            redirect_to("manage_content.php?page=".urlencode($id));
        }
        else{
            $_SESSION['message'] = "Page Updation Failed.";
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
 <h2>Edit Page in <?php echo $current_subject['menu_name']; ?> </h2>

   <form action="edit_page.php?page=<?php echo $current_page['id'];  ?>" method="POST">
       <p>Page Name:
       <input type="text" name="menu_name" value = "<?php echo $current_page['menu_name'] ?>"/>
       </p>
       <p>Position:
        <select name="position">
            <?php
            $subject_id = find_page_subject_id($current_page['id']);
            $page_set = find_all_pages($subject_id,false);
            $page_count = mysqli_num_rows($page_set);
            for($count=1 ;$count<= $page_count ; $count++){
                  echo"<option value=\"{$count}\" ";
                if($current_page['position'] == $count){
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
       <p>Content:<br>
       <textarea cols="80" rows="20" name="content" ><?php echo $current_page['content']; ?></textarea>
       </p>
       <button type="submit" name="submit" value="new page" onclick="return confirm('Are you sure?')" >Update Page</button>
   </form>
   <br/>
   <a href="manage_content.php?subject=<?php echo $current_subject['id']; ?>">Cancel</a>
    &nbsp;
    &nbsp;
   <a href="delete_page.php?page=<?php echo $current_page['id'];?>" onclick="return confirm('Are you sure?')">Delete Page</a>
    </div>
</div>
<?php
//    include("../includes/layouts/header.php");
    include("../includes/layouts/footer.php");
    ?>
