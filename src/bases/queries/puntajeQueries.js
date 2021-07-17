const mariadb = require('../../conexion/conn');
module.exports = {

    createScore : async function (id, idUsuario, total, saldo){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Puntaje(id, idUsuario, total, saldo) VALUES(?,?,?,?)";
            let values = [id, idUsuario, total, saldo];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getAllUsersScore : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Puntaje;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getUserScoreById : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Puntaje WHERE idUsuario = ?";
            let value = [idUsuario];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateUserScore : async function(id, idUsuario, total, saldo){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Puntaje SET id=?, total=?, saldo=? WHERE idUsuario = ?";
            let value = [id, total, saldo,idUsuario]
            let row = await conn.query(query, value);
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteUserScore : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Puntaje WHERE idUsuario = ?";
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
