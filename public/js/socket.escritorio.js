 /* io aparece desde la librerioa io.js */
 /* io es el mismo objeto para el front y back y funcionan casi iguaes y es el encargado de la comunicacion */
 var socket = io()
     //manejo de jquey
     //var label = $('#lblNuevoTicket')




 //codigo poara validar que llege un poarametro de escritorio
 var searchParams = new URLSearchParams(window.location.search)
     //devuelve boolean si amnda el parametro elegido
     //console.log(searchParams.has('escritorio'));
 if (!searchParams.has('escritorio')) {
     window.location = 'index.html'
     throw new Error('el escritorio es necesario')
 }
 //devuelve el numero de escritorio del parametro, el valor del parametro
 //que locura
 var escritorio = searchParams.get('escritorio')
 var label = $('small')

 //console.log(escritorio);
 //cambia con jquery los valores tipo texto del html
 $('h1').text('Escritorio ' + escritorio)

 /* $('button').on('click', function() {
     socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
         console.log(resp);
     })
 })
 */
 $('button').on('click', function() {
     socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
         //console.log(resp);
         if (resp === 'no hay tickets') {
             alert(resp)
             label.text(resp)
             return
         }
         label.text('Ticket ' + resp.numero)
     })
 })