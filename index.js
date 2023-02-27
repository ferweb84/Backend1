import ManagerUsuarios from './managerUsuarios.js';
import ManagerUsuario from './managerUsuarios.js';

const manager = new ManagerUsuarios();

const env= async () => {
    let primeraConsulta = await manager.consultarUsuarios();
    console.log (primeraConsulta);

    const usuario ={
        nombre: "Mario",
        apellido:"Valencia",
        edad:26,
        curso: "Backend",
    };
    let result = await manager.crearUsuario (usuario);
    console.log (result);

    let segundaConsulta = await manager.consultarUsuarios();
    console.log (segundaConsulta);
};

env();