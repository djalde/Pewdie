<?php 

function gerap2() {
    $servicos = [];

    $hostname = shell_exec("hostname");
    $regexhost='/(.+)/';
    preg_match($regexhost,$hostname,$matches3);
    $servicos[0]["nome"] = "hostname";
    $servicos[0]["valor"] = $matches3[0];
    $regexmem = '/Mem:\s+\d+\s+(\d+)\s+(\d+)/';
    $regexdisk='/\/dev\/sda\d+\s+\w+\s+(\w+)\s+(\w+)/';
    $memoria = shell_exec("free");
    $disco = shell_exec("df -h");
    preg_match($regexmem,$memoria,$matches);
    preg_match($regexdisk,$disco,$matches2);
    $servicos[1]["nome"] = "ram";
    $servicos[1]["used"] = $matches[1];
    $servicos[1]["free"] = $matches[2];
    $servicos[2]["nome"] = "disk";
    $servicos[2]["used"] = $matches2[1];
    $servicos[2]["free"] = $matches2[2];

    return $servicos;
    }




?>