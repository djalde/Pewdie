<?php
require_once('create-desliga-service.php');
$name = $_GET['name'] ?? '';

create($name);
?>