<?php
require_once('create-liga-service.php');
$name = $_GET['name'] ?? '';
if ($name ==  "dns") {
    $liga = shell_exec("sudo service bind9 start");
} else {
$liga = shell_exec("sudo service ${name} start");
};
create($name);
?>