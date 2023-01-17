<?php
spl_autoload_register(function($className){
    include $filename = "../classes/".$className.".class.php";
});
?>