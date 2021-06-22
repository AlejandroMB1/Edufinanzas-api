//DataBase conection
const mariadb = require('mariadb');
const dotenv = require('dotenv');

dotenv.config();

var pool =  mariadb.createPool({
        host: process.env.DB_HOST, 
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: process.env.DB_CONNECTIONLIMIT  
    })

async function getConn(){ //función que asigna una conexión (de las 50 establecidas) a la sesión del usuario
    let conn = await pool.getConnection();
    return conn;
} 

module.exports.getConn = getConn;