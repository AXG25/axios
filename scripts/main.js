import Usuario from '../scripts/class/Usuario.js';

let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let nombre = document.getElementById('name').value;
let apellido = document.getElementById('lastName').value;
let correo = document.getElementById('email').value;

const usuario = new Usuario();

<<<<<<< Updated upstream
=======
let  Nombre = document.getElementById('name'),
     Apellido = document.getElementById('lastName'),
     Correo = document.getElementById('email'),
     Id = document.getElementById('id');


const ObtenerDatos = () =>{
    Nombre = Nombre.value, 
    Apellido = Apellido.value,
    Correo = Correo.value;
    Id = Id.value;
}

const DatoEspecifico = () =>{
    let DatosC = [Nombre.value, Apellido.value, Correo.value, Id.value];
    return DatosC;
}

>>>>>>> Stashed changes
formulario.addEventListener('submit', e => {
    e.preventDefault();
     nombre = document.getElementById('name').value;
    apellido = document.getElementById('lastName').value;
    correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    console.log(usuario);
    usuario.crearPerfil(usuario);
})

btnCorreo.addEventListener('click', () => {
    correo
    document.getElementById('email').readOnly = true;
    usuario.buscarPerfil(correos); 
    let perfil = JSON.parse(localStorage.getItem('Buscado'));
    console.log(perfil)
    const {nombre, apellido, correo,id} = perfil;
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;

})

btnEditar.addEventListener('click', () => {
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.editarPerfil(usuario,id);
})

btnEliminar.addEventListener('click', () => {
     let id = document.getElementById('id').value;
     usuario.eliminarPerfil(id)
})