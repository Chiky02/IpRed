

document.getElementById("buscar").addEventListener("click",buscar,false);

function buscar() {
    var busqueda = document.getElementById("busqueda").value;
    document.getElementById("busqueda").value = "";
    alert("Se va a realizar una accion de busqueda del documento " + busqueda);
    ajax(busqueda);
}



function ajax(busqueda) {

alert(busqueda);
    $.ajax({
        // la URL para la petición
        url: 'retorno.php',

        // la información a enviar

        data: { id: busqueda },
       
        // especifica si será una petición POST o GET
        type: 'POST',

        // el tipo de información que se espera de respuesta
        dataType: 'text',
        cache: false,
        // código a ejecutar si la petición es satisfactoria;

        beforeSend: function () {
            console.log("cargando...");
        },
        success: function (json) {
  
         

                if ( json.length==0) {
                    alert("No se ha encontrado informacion en la base de datos" );
                }
                
                else{
              var btn = document.createElement("tr");
                btn.innerHTML = json;
                document.getElementById("table").appendChild(btn);
            
            }
        },


        // código a ejecutar si la petición falla;


        error: function (xhr, status) {
            alert("Ha ocurrido un error inesperado");
           

        },


        /*
                // código a ejecutar sin importar si la petición falló o no
                complete : function(xhr, status) {
                    alert('Petición realizada');
                }*/
    });
}







