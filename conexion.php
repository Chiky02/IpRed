<?php
function conect(){
    $user="root";
    $pass="";
    $server="localhost";
    $dataBase="facturacion";
 
    $con = mysqli_connect($server,$user,$pass); 

    mysqli_select_db($con,$dataBase);
    return $con;
}





?>