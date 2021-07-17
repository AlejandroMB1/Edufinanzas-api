const mariadb = require('../../conexion/conn');
module.exports = {

    createActivity : async function (id, idPuntaje, nombre, puntaje){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Actividades(id, idPuntaje, nombre, puntaje) VALUES(?,?,?,?)";
            let values = [id, idPuntaje, nombre, puntaje];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getAllUsersActivity : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Actividades;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getUserActivityById : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Actividades WHERE idUsuario = ?";
            let value = [idUsuario];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateUserActivity : async function(id, idPuntaje, nombre, puntaje){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Actividades SET id=?, idPuntaje=?, nombre=?, puntaje=? WHERE idUsuario = ?";
            let value = [id, idPuntaje, nombre, puntaje]
            let row = await conn.query(query, value);
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteUserActivity : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Actividades WHERE idUsuario = ?";
            let value = [idUsuario]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        }catch(error){
            console.log(error);
            return 0;
        }
    }
}
