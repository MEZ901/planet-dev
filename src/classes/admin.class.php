<?php

class admin {
    use database;
    
    private $username;
    private $email;
    private $password;

    public function login($data){
        $query = "select * from admin where email = :email and password = :password";
        $result = $this->query($query, $data);
        return json_encode($result);
    }

    public function insertArticle($data){
        $query = "";
        foreach($data as $form){
            $keys = array_keys($form);
            $values = array_values($form);
            $query .= "insert into article (". implode(",", $keys) .",date) values ('". implode("','", $values) ."',curdate());";
        }
        $result = $this->query($query);
        
        return json_encode($result);
    }

    public function getAll(){
        $query = "select * from article order by date desc";
        $result = $this->query($query);
        return json_encode($result);
    }
}

?>