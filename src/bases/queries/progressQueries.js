const mariadb = require('../../conexion/conn');
module.exports = {

    createProgress : async function (id, idUsuario, modulo1, modulo2, modulo3,ultimoIngreso){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Progreso(id, idUsuario, modulo1, modulo2, modulo3,ultimoIngreso) VALUES(?,?,?,?,?,?)";
            let values = [id, idUsuario, modulo1, modulo2, modulo3,ultimoIngreso];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getAllUsersProgress : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Progreso;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getUserProgressById : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Progreso WHERE idUsuario = ?";
            let value = [idUsuario];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateUserProgress : async function(id, idUsuario, modulo1, modulo2, modulo3,ultimoIngreso){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Progreso SET id = ?, modulo1 = ?, modulo2 = ?, modulo3 = ?, ultimoIngreso=? WHERE idUsuario = ?";
            let value = [id, modulo1, modulo2, modulo3,ultimoIngreso,idUsuario]
            let row = await conn.query(query, value);
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteUserProgress : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Progreso WHERE idUsuario = ?";
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
