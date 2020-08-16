import mysql = require('mysql');

export default class MySQL{

    private static _instance: MySQL;

    cnx: mysql.Connection;
    conectado: boolean = false;

    constructor(){

        console.log('Clase Inicializada');

        this.cnx = mysql.createConnection({
            host: 'localhost',
            user: 'csamaniego',
            password: 'estelit4',
            database: 'node_db'
        });

        this.ConectarDB();

    }


    public static get instance(){
        return this._instance || (this._instance = new this());
    } 

    static ejecutarQuery(query: string, callback: Function ){

        this.instance.cnx.query(query, (err, result: Object[], fields) => {
            if(err){
                console.log('Error en Query');
                console.log(err);
                return callback(err);
            }

            if(result.length === 0){
                callback('El registro solicitado no existe');
            }else{
                callback(null, result);
            }





        });

    }

    private ConectarDB(){
        this.cnx.connect( (err: mysql.MysqlError) => {
            if(err){
                console.log(err.message)
            }

            this.conectado = true;

            console.log('Base de Datos Online');
            
        });
    }



}