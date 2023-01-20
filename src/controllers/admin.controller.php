<?php

include('../core/init.php');

if(count($_POST) > 0){
    if($_POST['type'] == 'login'){
        $data = [];
        $data['email'] = $_POST['email'];
        $data['password'] = $_POST['password'];
        $admin = new admin;
        $result = $admin->login($data);
        $result_decode = json_decode($result);
        if($result_decode){
            $_SESSION['id'] = $result_decode[0]->ID_ADMIN;
            $_SESSION['username'] = $result_decode[0]->username;
            $_SESSION['email'] = $result_decode[0]->email;
            $_SESSION['password'] = $result_decode[0]->password;
        }
        echo $result;
    }
}

?>