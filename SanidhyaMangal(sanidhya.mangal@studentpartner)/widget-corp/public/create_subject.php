<?php 
    require_once("../includes/validation_function.php");
    require_once("../includes/sessions.php");
    include("../includes/config.php");
    require_once("../includes/functions.php");
    if(isset($_POST['submit'])){       
        $menu_name = $_POST['menu_name'];
        $position  = (int)$_POST['position'];
        $visible   = (int)$_POST['visible'];
        $required_fields = array("menu_name","position","visible");
        validate_presence($required_fields);
        if(!empty($errors)){
            $_SESSION["errors"] = $errors;
            redirect_to("new_subject.php");
        }
        $menu_name = mysqli_real_escape_string($conn,$menu_name);
        $sql_ins = "INSERT into subjects(menu_name,position,visible) values('{$menu_name}',{$position},{$visible})";

        $result  = mysqli_query($conn,$sql_ins);
        if($result){
            $_SESSION['message'] = "Subject created."; 
            redirect_to("manage_content.php");
        }
        else{
            $_SESSION['message'] = "Subject Creation Failed.";
            redirect_to("new_subject.php");
        } 
    }else{
        redirect_to("new_subject.php");
    }
    ?>