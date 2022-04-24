import mysqlConnections, { Pool, PoolConfig } from 'mysql';
import { IMySqlConnection } from './IConnection';
import { CONFIG } from '../../../config/config';




class ConnectionMySql implements IMySqlConnection {

    private connectionPool: Pool;
    constructor() {
        const configConn: PoolConfig = {
            connectionLimit: 15, // Determina el limite de conexiones
            queueLimit: 50, // Determina el limite de conexiones en cola antes de mandar un error
            waitForConnections: true, // Permite conexiones en cola
            timezone: '-5000', // zona horaria
            insecureAuth: true, // Permitir la conexión a instancias de MySQL que soliciten el método de autenticación antiguo
            host: CONFIG.DB_HOST,
            user: CONFIG.DB_USER,
            database: CONFIG.DB_NAME,
            password: CONFIG.DB_PASS,
            port: Number(CONFIG.DB_PORT),
        };
        this.connectionPool = mysqlConnections.createPool(configConn);
        this.registerEvents();
    }
    public getConnection(): Promise<mysqlConnections.Connection> {
        return new Promise((res, rej) => {
            this.connectionPool.getConnection((err, connection) => {
                if (err) {  rej(err); }
                res(connection);
            });
        });
    }
    public close(): void {
        this.connectionPool.end();
    }

    private registerEvents() {
        this.connectionPool.on('acquire', function (connection) {
            //console.log('Connection %d acquired || Conexion Adquirida', connection.threadId);
        });
        this.connectionPool.on('enqueue', function () {
            //console.log('Waiting for available connection slot || Esperando por una conexión');
        });
        this.connectionPool.on('connection', function (connection) {
            //console.log("New connection established  || Nueva conexión establecida")
        });

        this.connectionPool.on('release', function (connection) {
            //console.log('Connection %d released || conexión liberada', connection.threadId);
        });
    }
}


const connectionMysql = new ConnectionMySql();

export { connectionMysql }
