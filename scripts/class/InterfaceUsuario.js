export default class InterfaceUsuario{
    constructor(nombre, apellido, correo, id){
            this.nombre = nombre;
            this.apellido = apellido;
            this.correo = correo;
            this.id = id;
            this.mostrar = `
            <table class="table text-light">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">${this.id}</th>
                <td>${this.nombre}</td>
                <td>${this.apellido}</td>
                <td>${this.correo}</td>
                </tr>
            </tbody>
            </table>
            `
    }
}
    
