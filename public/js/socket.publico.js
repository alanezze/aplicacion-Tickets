 /* io aparece desde la librerioa io.js */
 /* io es el mismo objeto para el front y back y funcionan casi iguaes y es el encargado de la comunicacion */
 var socket = io()



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

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 var lblTicket1 = $('#lblTicket1')
 var lblTicket2 = $('#lblTicket2')
 var lblTicket3 = $('#lblTicket3')
 var lblTicket4 = $('#lblTicket4')


 var lblEscritorio1 = $('#lblEscritorio1')
 var lblEscritorio2 = $('#lblEscritorio2')
 var lblEscritorio3 = $('#lblEscritorio3')
 var lblEscritorio4 = $('#lblEscritorio4')

 //tecnica de mostrar Array
 var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4]
 var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4]





 socket.on('estadoActual', function(data) {
     // console.log(data.ultimos4);
     //  console.log(data);
     actualizaHTML(data.ultimos4);
 })

 socket.on('ultimos4', function(data) {
     //  console.log(data.ultimos4);
     //console.log(data);

     var audio = new Audio('audio/new-ticket.mp3')
     audio.play();

     actualizaHTML(data.ultimos4);
 })

 function actualizaHTML(ultimos4) {
     for (var i = 0; i <= ultimos4.length - 1; i++) {
         lblTickets[i].text('Ticket ' + ultimos4[i].numero)
         lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio)
     }
 }