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
            echo $result;
        break;
        case 'insert':
            $data = [];
            for($i = 1; $i <= (sizeof($_POST)-1)/5; $i++){
                $data[$i-1]["title"] = $_POST["title_$i"];
                $data[$i-1]["content"] = $_POST["content_$i"];
                $data[$i-1]["category"] = $_POST["category_$i"];
                $data[$i-1]["author"] = $_POST["author_$i"];
                $data[$i-1]["keywords"] = $_POST["keywords_$i"];
            }
            $admin = new admin;
            $result = $admin->insertArticle($data);
            echo $result;
        break;
    }
}

?>