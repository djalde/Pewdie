<?php
require_once('create-liga-service.php');
$name = $_GET['name'] ?? '';

create($name);
?>