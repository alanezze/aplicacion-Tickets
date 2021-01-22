const { io } = require('../server');
//requerimos el archivo
const { TicketControl } = require('../classes/ticket-control')


const ticketControl = new TicketControl()


io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {

        let siguiente = ticketControl.siguiente()
        console.log(data);
        callback(siguiente)
    })


    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()

    })


    client.on('atenderTicket', (data, callback) => {


        if (!data.escritorio) {
            return callback({
                err: true,
                message: 'el escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio)

        callback(atenderTicket)
            //LOS broadcvaste emiten eventos
        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        })



    })


})


/* io.on('connection', (client) => {
    client.on.('siguieteTicket', (data) => {
        console.log('sig tick');
    })

}); */