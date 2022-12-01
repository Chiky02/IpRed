<?php
include("conexion.php");

$con=conect();

if(isset($_POST["id"])){
$busqueda= $_POST["id"] ;
 if(!empty($busqueda)){

    $consulta="call generarFactura('$busqueda');";
    
  $result = mysqli_query($con,$consulta);
 }
else {
    $consulta=null;
    $result=null;
}

    if($result){
        while ($row = $result->fetch_assoc()) {
          
            echo "<tr>";
        
           echo "<td>",$row['Nombre'],"</td>
        
            <td>",$row['costo'],"</td>
        
            <td>",$row['municipioId'],"</td> ";
            echo "</tr>";
     
        }}
        else{

            echo null;
        }
    }
else{
    echo "sin encontrar";
}

//hecho es l arespuesta que da el servidor


?>