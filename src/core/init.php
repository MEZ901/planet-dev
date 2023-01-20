<?php
session_start();

spl_autoload_register(function($className){
    include $filename = "../classes/".$className.".class.php";
});

include 'config.php';
include 'database.php';
?>