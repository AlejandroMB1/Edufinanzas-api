const mariadb = require('../../conexion/conn');
module.exports = {

    createNewUserDetail : async function (id, conocimeintos, idUsuario){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Usuario(id, conocimeintos, idUsuario) VALUES(?,?,?)";
            let values = [id, conocimeintos, idUsuario];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getUserDetailById : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Usuario WHERE idUsuario = ?";
            let value = [idUsuario];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateUserDetail : async function(id, conocimeintos, idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Usuario SET id = ?, conocimeintos = ? WHERE idUsuario = ?";
            let value = [id, conocimeintos, idUsuario]
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
            let query = "DELETE FROM Usuario WHERE id = ?";
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
