var socket = io();
socket.on('connect', () => {
    console.log('Conectado al servidor');
});
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});
// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Guido',
    mensaje: 'Hola Mundo'
}, (resp) => console.log('respuesta server: ', resp));

// Escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
})