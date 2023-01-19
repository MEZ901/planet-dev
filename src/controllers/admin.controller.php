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

// $data = [];
// $data['email'] = $_GET['email'];
// $data['password'] = $_GET['password'];
// $admin = new admin;
// $result = $admin->login($data);
// print_r($result)
?>