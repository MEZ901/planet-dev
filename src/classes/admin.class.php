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
            $values = array_values($form);=
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
        $dataExecute = array($id);
        $query = "select * from `article` inner join category on article.category = category.ID_CATEGORY where ID_ARTICLE = ?";
        $result = $this->query($query, $dataExecute);
        return json_encode($result[0]);
    }

    public function delete($id){
        $dataExecute = array($id);
        $query = "delete from article where ID_ARTICLE = ?";
        $this->query($query, $dataExecute);
        $result = $id;
        return json_encode($result);
    }

    public function updateArticle($data){
        $dataExecute = array($data["title"], $data["content"], $data["category"], $data["author"], $data["keywords"], $data["id"]);
        $query = "update article set title=?,content=?,category=?,author=?,keywords=? where ID_ARTICLE=?";
        $result = $this->query($query, $dataExecute);
        return json_encode($result);
    }
}

?>