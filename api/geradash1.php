<?php

function geradash1(){
$servicos = [];

$ping = shell_exec("ping -c 2 8.8.8.8");
$regex='/(ttl=)/';
preg_match($regex,$ping,$matches);
$servicos[0]["name"] = "networking";
if ($matches[0]=='ttl=') {
    $servicos[0]["status"] = "on"; } else {
        $servicos[0]["status"] = "off";
}
$servicos[1]["name"] = "apache";
$dns = shell_exec("service apache2 status");
if ($dns == "apache2 is running.\n") {
    $servicos[1]["status"] = "on"; } else {
        $servicos[1]["status"] = "off";
}
$servicos[2]["name"] = "dns";
$dns = shell_exec("service bind9 status");
if ($dns == "bind9 is running.\n") {
    $servicos[2]["status"] = "on"; } else {
        $servicos[2]["status"] = "off";
}
return $servicos;
}



header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
echo json_encode(geradash1());