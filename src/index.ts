// console.log('Codigo Typescript');
import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use( router );

// const mysql = new MySQL(); esto se usa sin instancia
// MySQL.instance; esto se va usar en los proximos eventos por eso ya no es necesario colocarlo

server.start( () => {
    console.log('Servidor Corriendo en el puerto 3000');
    
});