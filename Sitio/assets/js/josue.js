/**
 * Created with JetBrains WebStorm.
 * User: Josue
 * Date: 8/05/13
 * Time: 01:12 AM
 * To change this template use File | Settings | File Templates.
 */
var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var localMediaStream = null;
var botonregistro = $('#registrar');
var campos = [
    $('#nombrevisita'),
    $('#empresavisita'),
    $('#docid'),
    $('#nombre'),
    $('#empresa'),
    $('#motivo')
];

console.log('variables cargadas');

function snapshot() {
    if (localMediaStream) {
        ctx.drawImage(video, 0, 0);
        document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
}

function registro(){
    console.log('Inicia el Registro');


    alert('Josue, gracias por registrarte!');
    console.log('Finaliza el Registro');
}

console.log('funciones cargadas');

navigator.webkitGetUserMedia(
    {video: true},
    function(stream) {
        video.src = window.URL.createObjectURL(stream);
        localMediaStream = stream;
    },
    function() {
        console.log('bad');
    }
);

console.log('webkitGetUserMedia cargadas');

video.addEventListener('click', snapshot, false);



console.log('eventos cargados');

