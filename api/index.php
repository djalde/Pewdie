<?php
require('gerap2.php');


$nada = gerap2();

header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
echo json_encode($nada);
?>