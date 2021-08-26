import Usuario from '../scripts/class/Usuario.js';
import InterfaceUsuario from './class/InterfaceUsuario.js'

let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let btnHistorial = document.getElementById('mostrar_historial')
const usuario = new Usuario();

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    //console.log(usuario);
    usuario.crearPerfil(usuario);
})

btnCorreo.addEventListener('click', () => {
    let correos = document.getElementById('email').value;
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
     let correo = document.getElementById('email').value
     usuario.eliminarPerfil(id,correo)
})

btnHistorial.addEventListener('click' , () => {
    axios.get("http://localhost:4000/usuarios/")
    .then(({data}) => {
        //console.log(data.find(user => user.correo === email))
        data.map(elemento => {
            const {nombre, apellido, correo, id} = elemento
            console.log(nombre)
            const historial = new InterfaceUsuario(nombre, apellido, correo,id);
            let mostrar_historial = document.getElementById('historial')
            mostrar_historial.innerHTML += historial.mostrar
        })
        
    })
})