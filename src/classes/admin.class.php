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
        $query = "select ID_ARTICLE, title, date from article order by ID_ARTICLE desc";
        $result = $this->query($query);
        return json_encode($result);
    }

    public function getWhere($id){
        $query = "select article.title, article.content, article.keywords, article.author, category.category from `article` inner join category on article.category = category.ID_CATEGORY where ID_ARTICLE = $id";
        $result = $this->query($query);
        return json_encode($result[0]);
    }

    public function delete($id){
        $query = "delete from article where ID_ARTICLE = $id";
        $this->query($query);
        $result = $id;
        return json_encode($result);
    }
}

?>