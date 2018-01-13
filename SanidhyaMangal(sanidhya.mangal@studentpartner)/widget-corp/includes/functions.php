<?php 
function query_confirm($value){
    if(!$value){
        die("Query Failed.");
    }
}
function find_all_subjects($public=true){
     global $conn;
      $sql_chk = "SELECT * from subjects";
      if($public){
          $sql_chk.=" where visible = 1 ";
      }
      $sql_chk.= " order by position asc";
    $subject_set = mysqli_query($conn,$sql_chk);
    query_confirm($subject_set);
    return $subject_set;

 }
 function find_all_pages($subject_id,$public=true){
     global $conn;
     $sql_chk1 = "SELECT * from pages where subject_id={$subject_id} " ;
     if($public){
        $sql_chk1.=" AND visible = 1 "; 
     }
     $sql_chk1.= " order by position asc";
     $page_set = mysqli_query($conn,$sql_chk1);
     query_confirm($page_set);
     return $page_set;
}
function find_subject_by_id($subject_id){
    global $conn;
    $safe_subject_id = mysqli_real_escape_string($conn,$subject_id);
      $sql_chk = "SELECT * from subjects where id = {$safe_subject_id} LIMIT 1";
    $subject_set = mysqli_query($conn,$sql_chk);
    query_confirm($subject_set);
     if($subject = mysqli_fetch_assoc($subject_set)){
         return $subject;
     }
     else return null;
}
function find_pages_by_id($page_id,$public=true){
    global $conn;
    $safe_page_id = mysqli_real_escape_string($conn,$page_id);
    $sql_chk = "SELECT * from pages where id = {$safe_page_id} ";
    if($public){
    $sql_chk.="AND visible = 1 ";    
    }
    $sql_chk.= " LIMIT 1";
    $page_set = mysqli_query($conn,$sql_chk);
    query_confirm($page_set);
     if($page = mysqli_fetch_assoc($page_set)){
         return $page;
     }
     else return null;
}
function find_page_subject_id($page_id){
     global $conn;
    $sql_chk = "SELECT * from pages where id = {$page_id} limit 1";
    $page_set  = mysqli_query($conn,$sql_chk);
    query_confirm($page_set);
    if($page = mysqli_fetch_assoc($page_set)){
        return $page['subject_id'];
    }
    else{
        return null;
    }
}
function redirect_to($newurl){
    header("Location: $newurl");
    exit;
}
function navigation($subject_array,$page_array){
    // We are Going to create a navigation function which is going to take two arguments
       echo"<ul class=\"subjects\">";  
       $subject_set = find_all_subjects();
                while($subject = mysqli_fetch_assoc($subject_set)){
                   $output="<li";
                   if($subject_array['id']==$subject['id']&&$subject_array){
                       $output.=" class=\"selected\"";
                   }
                   $output.=">"; 
                   echo"{$output}"."<a href=\"manage_content.php?subject=".urlencode($subject['id'])."\">".$subject['menu_name']."</a>"."</li>";
                   $page_set = find_all_pages($subject['id']);
                   echo"<ul class=\"pages\">";
                   while($page = mysqli_fetch_assoc($page_set)){
                            $output="<li";
                   if($page_array['id'] == $page['id']&&$page_array){
                       $output.=" class=\"selected\"";
                   }
                   $output.=">"; 
                          echo "{$output}"."<a href =\"manage_content.php?page=".urlencode($page['id'])."\">".$page["menu_name"]."</a>"."</li>";
                   }
                   echo"</ul>";   
               }          
}
function find_selected_page($public=false){
        global $current_subject;
        global $current_page;
        if(isset($_GET['subject'])){
        $current_subject = find_subject_by_id($_GET['subject']);
        if($public){
            $current_page    =  find_default_page_for_subject($current_subject['id']);
        }else{
            $current_page = null;
        }
    } elseif(isset($_GET['page'])){
        $current_page = find_pages_by_id($_GET['page'],$public);
        $current_subject  = null;
    }
    else{
        $current_page = null;
        $current_subject = null;
    }
}
function radio_chk_visible($value){
    if($value['visible']==0){
        echo "checked";
    }
    elseif($value['visible']==1){
        echo "checked";
    }else{
        echo " ";
    }
}
function select_subject($value){
    $output= htmlentities($value['menu_name']);
    $output = ucfirst($output);
    return $output;
}
function select_position($value){
    global $count;
    echo"<option value=\"{$count}\" ";
                if($current_subject['position'] == $count){
                    echo " selected";
                }
                echo">{$count}</option>";
}
function visible_chk($value){
    if($value['visible'] == 1){
        $output = "TRUE";
    }elseif($value['visible'] == 0){
        $output = "FALSE";
    }
    return $output;
} 
function subject_print($value){
        echo "<div class= \"subject-manage\">";
        echo "Subject Name:".$value['menu_name']."<br/>";
        echo "Position:".$value['position']."<br/>";
        echo "Visible:".visible_chk($value)."<br/>";
        echo "<a href=\"edit_subject.php?subject=".urlencode($value['id'])."\">"."Edit Subject"."</a>";
        echo"<hr/>";
        echo"<h3>Pages in: ".$value['menu_name']."</h3>";
        $page_set = find_all_pages($value['id']);
                   echo"<ul class=\"pages\" style=\" list-style: circle\" >";
                   while($page = mysqli_fetch_assoc($page_set)){
                    echo "<li>"."<a href =\"manage_content.php?page=".urlencode($page['id'])."\">".$page["menu_name"]."</a>"."</li>";
                   }
                   echo"</ul>";
        echo"<br><br><br>";                
        echo "<a href =\"new_page.php?subject=".urlencode($value['id'])."\">"."+ Add New Page"."</a>";    
        echo"</div>";
}        
function page_print($value){
      $val = $value['id']; 
      $subject_id =  find_page_subject_id($val);
      $subject= find_subject_by_id($subject_id);
       echo "<div class= \"subject-manage\">";
       echo "Subject Name:".$subject['menu_name']."<br/>";
        echo "Position:".$subject['position']."<br/>";
        echo "Visible:".visible_chk($subject)."<br/>";
        echo "<a href=\"edit_subject.php?subject=".urlencode($subject['id'])."\">"."Edit Subject"."</a>";
        echo"<hr/>";   
        echo "Page Name:".$value['menu_name']."<br/>";
        echo "Position:".$value['position']."<br/>";
        echo "Visible:".visible_chk($value)."<br/>";
        echo "Content:<br>"."<p id=\"content\">".$value['content']."</p>"."<br/>";
        echo "<a href=\"edit_page.php?page=".urlencode($value['id'])."\">"."Edit Page"."</a>";
        echo"<br><br><br>";
        echo "<a href =\"manage_content.php?subject=".urlencode($subject['id'])."\">"."<< Back to: ".$subject["menu_name"]."</a>";
        echo"</div>";
   
}
function page_print_public($value){
        echo "<p id=\"content\">".$value['content']."</p>"."<br/>";
}
function subject_print_public($value){
    echo "<div class= \"subject-manage\">";
     echo"<h3>Pages in: ".$value['menu_name']."</h3>";
        $page_set = find_all_pages($value['id']);
                   echo"<ul class=\"pages\" style=\" list-style: circle\" >";
                   while($page = mysqli_fetch_assoc($page_set)){
                    echo "<li>"."<a href =\"index.php?page=".urlencode($page['id'])."\">".$page["menu_name"]."</a>"."</li>";
                   }
                   echo"</ul>";                   
        echo"</div>";
}
function navigation_public($subject_array,$page_array){
    // We are Going to create a navigation function which is going to take two arguments
       echo"<ul class=\"subjects\">";  
       $subject_set = find_all_subjects();
                while($subject = mysqli_fetch_assoc($subject_set)){
                   $output="<li";
                   if($subject_array['id']==$subject['id']&&$subject_array){
                       $output.=" class=\"selected\"";
                   }
                   $output.=">"; 
                   echo"{$output}"."<a href=\"index.php?subject=".urlencode($subject['id'])."\">".$subject['menu_name']."</a>"."</li>";
                   if($subject_array['id']==$subject['id']||$page_array['subject_id']==$subject['id']){
                    $page_set = find_all_pages($subject['id']);
                   echo"<ul class=\"pages\">";
                   while($page = mysqli_fetch_assoc($page_set)){
                            $output="<li";
                   if($page_array['id'] == $page['id']&&$page_array){
                       $output.=" class=\"selected\"";
                   }
                   $output.=">"; 
                   echo "{$output}"."<a href =\"index.php?page=".urlencode($page['id'])."\">".$page["menu_name"]."</a>"."</li>";
                   }
                   echo"</ul>";                  
                   }   
               }    
               echo"</ul>";      
}
function find_all_subjects_public(){
     global $conn;
      $sql_chk = "SELECT * from subjects where visible = 1 order by position asc";
    $subject_set = mysqli_query($conn,$sql_chk);
    query_confirm($subject_set);
    return $subject_set;

}
function find_all_pages_public($subject_id){
     global $conn;
     $sql_chk1 = "SELECT * from pages where subject_id={$subject_id} where visible = 1 order by position asc";
     $page_set = mysqli_query($conn,$sql_chk1);
     query_confirm($page_set);
     return $page_set;
}
function find_default_page_for_subject($subject_id){
    $page_set = find_all_pages($subject_id);
    if($first_page = mysqli_fetch_assoc($page_set)){
        return $first_page;
    }
    else{
        return null;
    }
}
?>