<?php
    $errors = array();
    function field_name_as_text($fieldname){
        $fieldname = str_replace("_"," ",$fieldname);
        $fieldname = ucfirst($fieldname);
        return $fieldname;
    }
    function is_empty($value){
        return isset($value) && $value !=="";
    }
    function validate_presence($field_required){
        global $errors;
        foreach($field_required as $fields){
            $value = trim($_POST[$fields]);
            if(!is_empty($value)){
                $errors[$fields] = field_name_as_text($fields)." can't be blank";
            }
        }
    }
    function field_len($value,$max=120,$min=4){
        return strlen($value) <= $max && strlen($value) >= $min;
    }
    function form_errors($errors=array()){
    $output = "";
    if(!empty($errors)){
        $output = "<div class=\"errors\">";
        $output.="Form Validations are";
        $output.="<ul>";
        foreach($errors as $fields => $error){ 
            $output.="<li>"."{$error}"."</li>"; 
        }
            $output.="</ul>";
            $output.="</div>";
    }    
    return $output;
    }