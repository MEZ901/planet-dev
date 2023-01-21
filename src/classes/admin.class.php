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
            $query .= "insert into $this->table (". implode(",", $keys) .") values (". implode(",", $values) .");";
        }
        $this->query($query);
        return false;
    }
}

?>