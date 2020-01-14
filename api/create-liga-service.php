<?php
require_once('database.php');
$connection = connect();
function create($name) {
  global $connection;
  $sql = "INSERT INTO ligaservicos (name) VALUES ('${name}');";
  
  try {
    $connection->exec($sql);
    return $connection->lastInsertId();
  } catch(PDOExecption $e) { 
    $connection->rollback(); 
    print "Error!: " . $e->getMessage(); 
    return null;
  } 
}