<?php
require_once('database.php');
$connection = connect();
function create($name) {
  global $connection;
  $sql = "INSERT INTO ligaservicos (name,time) VALUES ('${name}', now());";
  
  try {
    $connection->exec("use dashboard;");
    $connection->exec($sql);
    return $connection->lastInsertId();
  } catch(PDOExecption $e) { 
    $connection->rollback(); 
    print "Error!: " . $e->getMessage(); 
    return null;
  } 
}