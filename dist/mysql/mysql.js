"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('Clase Inicializada');
        this.cnx = mysql.createConnection({
            host: 'localhost',
            user: 'csamaniego',
            password: 'estelit4',
            database: 'node_db'
        });
        this.ConectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnx.query(query, (err, result, fields) => {
            if (err) {
                console.log('Error en Query');
                console.log(err);
                return callback(err);
            }
            if (result.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, result);
            }
        });
    }
    ConectarDB() {
        this.cnx.connect((err) => {
            if (err) {
                console.log(err.message);
            }
            this.conectado = true;
            console.log('Base de Datos Online');
        });
    }
}
exports.default = MySQL;
