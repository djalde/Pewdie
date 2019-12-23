<?php 

$servicos = [];

$in1 = shell_exec("service bind9 status");
$in2 = shell_exec("service bind9 start");
$in3 = shell_exec("service bind9 stop");
if ( $in1 == "bind9 is not running ... failed!" || "FTP server is running.") {
    echo "aff";

}
echo $in1;
echo $in2;
echo $in3;
?>