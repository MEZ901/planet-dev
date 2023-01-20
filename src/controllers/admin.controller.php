<?php

include('../core/init.php');

if(count($_POST) > 0){
    if($_POST['type'] == 'login'){
        $data = [];
        $data['email'] = $_POST['email'];
        $data['password'] = $_POST['password'];
        $admin = new admin;
        echo $admin->login($data);
    }
}

?>