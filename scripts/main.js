import Usuario from '../scripts/class/Usuario.js';
import InterfaceUsuario from './class/InterfaceUsuario.js'

let formulario = document.getElementById('formulario'),
 btnCorreo = document.getElementById('btnCorreo');

let formulario = document.getElementById('formulario'),
 btnCorreo = document.getElementById('btnCorreo');

const usuario = new Usuario();

//ID Datos de entrada
let  Nombre = document.getElementById('name'),
     Apellido = document.getElementById('lastName'),
     Correo = document.getElementById('email'),
     Id = document.getElementById('id');


//Obtener valores de los Input
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

formulario.addEventListener('submit', e => {
    e.preventDefault();
    ObtenerDatos();

    usuario.nombre = Nombre;
    usuario.apellido = Apellido;
    usuario.correo = Correo;
    //console.log(usuario);
    usuario.crearPerfil(usuario);
})

btnCorreo.addEventListener('click', () => {
    let correos = DatoEspecifico()[2];
    Correo.readOnly = true;

    usuario.buscarPerfil(correos);
    let perfil = JSON.parse(localStorage.getItem('Buscado'));

    console.log(perfil)
    const {nombre, apellido, correo,id} = perfil;

    Nombre.value = nombre;
    Apellido.value = apellido;
    Correo.value = correo;
    Id.value = id;
})

btnEditar.addEventListener('click', () => {
    ObtenerDatos();

    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.editarPerfil(usuario, id);
})

btnEliminar.addEventListener('click', () => {
     usuario.eliminarPerfil(DatoEspecifico()[3]);
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