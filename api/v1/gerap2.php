<?php 

$servicos = [];

$hostname = shell_exec("hostname");
$regexhost='/(.+)/';
preg_match($regexhost,$hostname,$matches3);
$servicos["nome"] = $matches3[0];
$regexmem = '/Mem:\s+\d+\s+(\d+)\s+(\d+)/';
$regexdisk='/\/dev\/sda4\s+\w+\s+(\w+)\s+(\w+)/';
$memoria = shell_exec("free");
$disco = shell_exec("df -h");
preg_match($regexmem,$memoria,$matches);
preg_match($regexdisk,$disco,$matches2);
$servicos["memused"] = $matches[1];
$servicos["memfree"] = $matches[2];
$servicos["diskused"] = $matches2[1];
$servicos["diskfree"] = $matches2[2];

header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
echo json_encode($servicos);






//if ( $in1 == "bind9 is not running ... failed!" || "FTP server is running.") {
    //echo "aff";

//}
//echo $in1;
//echo $in2;
//echo $in3;
?>