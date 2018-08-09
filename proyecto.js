function comprobar(){
         var fname = document.getElementById("fname");
         var email = document.getElementById("email")
         var message= document.getElementById("message")
         var aviso=document.getElementById("aviso");
         aviso.innerHTML=""
         var enviar = "si"
          if (fname.value == "" || fname.value.indexOf(" ") == 0) {
            var texto = "Es obligatorio introducir el nombre.<br/>"  
            aviso.innerHTML += texto
            enviar = "no"}
           $('#formulario').submit(false);

             if (email.value == "" || email.value.indexOf(" ") == 0) {
            var texto = "Es obligatorio introducir el email.<br/>" 
            aviso.innerHTML += texto
            enviar = "no"
           $('#formulario').submit(false);
           
         }

             if (message.value == "" || message.value.indexOf(" ") == 0) {
            var texto = "Es obligatorio introducir el mensaje.<br/>"  
            aviso.innerHTML += texto
            enviar = "no"
          $('#formulario').submit(false);
        

}


$(function(){
     $('body').click(function() {
         alert('click fuera');
     });
 
     $('#dropList').click(function(event){
         event.stopPropagation();
     });
});



  /* <p id="aviso"></p>*/


