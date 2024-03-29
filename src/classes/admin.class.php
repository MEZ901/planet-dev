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
        $query = trim("insert into article (". implode(",", array_keys($data[0])) .",date) values ".str_repeat("(".str_repeat("?,", count(array_keys($data[0])))."curdate()),", count($data)),",");
        $dataExecute = [];
        foreach ($data as $form) {
            $values = array_values($form);
            foreach ($values as $value) {
                array_push($dataExecute, $value);
            }
        }
        $result = $this->query($query, $dataExecute);
        return json_encode($result);
    }

    public function getAll($orderBy = "ID_ARTICLE desc"){
        $query = "select ID_ARTICLE, title, date from article order by $orderBy";
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

    public function stats($table){
        $query = "select * from $table";
        $result = $this->query($query);
        if(is_array($result)){
            $count = count($result);
        }else{
            $count = 0;
        }
         
        return json_encode($count);
    }
}

?>