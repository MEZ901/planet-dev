<?php

if($_SERVER['SERVER_NAME'] == 'localhost'){
    /** database config **/
    define('DBNAME', 'planet-dev');
    define('HOST', 'localhost');
    define('USER', 'root');
    define('PASSWORD', '');
}else{
    /** database config **/
    define('DBNAME', '');
    define('HOST', '');
    define('USER', '');
    define('PASSWORD', '');
}

/** debug mode **/
define('DEBUG', true);

?>