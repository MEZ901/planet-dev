<?php

include('../core/init.php');

if(count($_POST) > 0){
    switch($_POST['type']){
        case 'login':
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
            print_r($result);
        break;
        case 'insert':
            $data = [];
            for($i = 1; $i < count($_POST); $i++){
                $data["title_$i"] = $_POST["title_$i"];
                $data["content_$i"] = $_POST["content_$i"];
                $data["category_$i"] = $_POST["category_$i"];
                $data["author_$i"] = $_POST["author_$i"];
                $data["keywords_$i"] = $_POST["keywords_$i"];
            }
            echo $data;
            die();
            $admin = new admin;
            $result = $admin->insertArticle($data);
            echo $result;
        break;
    }
}

?>