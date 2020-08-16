"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Codigo Typescript');
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
const server = server_1.default.init(3000);
server.app.use(router_1.default);
// const mysql = new MySQL(); esto se usa sin instancia
// MySQL.instance; esto se va usar en los proximos eventos por eso ya no es necesario colocarlo
server.start(() => {
    console.log('Servidor Corriendo en el puerto 3000');
});
