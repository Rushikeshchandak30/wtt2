<?php
include "db.php";

$id = $_GET["id"];

$sql = "DELETE FROM employee1 WHERE id = $id";
$result = mysqli_query($conn, $sql);

if ($result) 
{
    header("Location: index.php?msg=Data deleted successfully");

} 
else 
{
    echo "Failed: " . mysqli_error($conn);
}
