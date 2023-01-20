<?php

class admin {
    use database;
    
    private $username;
    private $email;
    private $password;

    public function login($data){
        $query = "select * from admin where email = :email and password = :password";
        $result = $this->query($query, $data);
        if($result){
            return json_encode( $this->query($query, $data));
        }else{
            $_SESSION['login_error'] = "Email or password is incorrect!";
        }
        return false;   
        // $this->query($query, $data) ? header('location: /planet-dev/src/views/dashboard.php') : $_SESSION['login_error'] = "Email or password is incorrect!";
    }
}

?>