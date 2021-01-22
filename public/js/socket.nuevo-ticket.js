 /* io aparece desde la librerioa io.js */
 /* io es el mismo objeto para el front y back y funcionan casi iguaes y es el encargado de la comunicacion */
 var socket = io()
     //manejo de jquey
 var label = $('#lblNuevoTicket')







 //codigo que se ejecuta cuando encuentra una conexion
 /* Funcion: msj de apretura de Canal de comunicacion  */
 socket.on('connect', function() {
     console.log('conmectado');
 })



 //codigo qeu se ejecuta cuando perders la conecion
 /* Funcion: mensaje de desconection */
 socket.on('disconnect', function() {
     console.log('desconectado');
 })


 socket.on('estadoActual', function(resp) {
     console.log(resp);
     label.text(resp.actual)
 })


 $('button').on('click', function() {
     //console.log('click');
     socket.emit('siguienteTicket', null, function(siguienteTicket) {
         label.text(siguienteTicket)
     })
 })