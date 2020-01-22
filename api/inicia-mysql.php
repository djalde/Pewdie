<?php
require_once('database.php');


$x=connect();
$schema=file_get_contents('schema.sql');
$x->exec($schema);
?>