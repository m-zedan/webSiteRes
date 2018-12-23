<?php

$conn=mysqli_connect('127.0.0.1','root','','testsql');
 
if(isset($_POST['view'])){
    echo "user name:".$_POST['view'];
$view=mysqli_real_escape_string($conn,$_POST['view']);
$query="INSERT INTO test(view) VALUE('$view')";
if(mysqli_query($conn,$query)){
    echo 'user added';
}
else{
    echo 'error:'.mysqli_error($conn);
}
}