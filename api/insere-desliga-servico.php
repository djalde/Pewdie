<?php
require_once('create-desliga-service.php');
$name = $_GET['name'] ?? '';
if ($name ==  "dns") {
$desliga = shell_exec("sudo service bind9 stop");
} else {
$desliga = shell_exec("sudo service ${name} stop");
}
create($name);
?>