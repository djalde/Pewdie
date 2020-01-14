<?php
require_once('database.php');
$connection = connect();
function create($name) {
  global $connection;
  $sql = "INSERT INTO desligaservicos (name) VALUES ('${name}');";
  
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