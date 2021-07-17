const mariadb = require('../../conexion/conn');
module.exports = {

    createNewUserDetail : async function (id, nombre, edad, conocimientos, idUsuario){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO DetalleUsuario(id, nombre, edad, conocimientos, idUsuario) VALUES(?,?,?,?,?)";
            let values = [id, nombre, edad, conocimientos, idUsuario];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getAllUsersDetail : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM DetalleUsuario;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getUserDetailById : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM DetalleUsuario WHERE idUsuario = ?";
            let value = [idUsuario];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateUserDetail : async function(id, nombre, edad, conocimientos, idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE DetalleUsuario SET id = ?, nombre=?, edad=?, conocimientos = ? WHERE idUsuario = ?";
            let value = [id, nombre, edad, conocimientos, idUsuario]
            let row = await conn.query(query, value);
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteUserDetail : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM DetalleUsuario WHERE idUsuario = ?";
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
