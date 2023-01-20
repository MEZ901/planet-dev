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
}

?>