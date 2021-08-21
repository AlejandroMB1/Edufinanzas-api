const mariadb = require('../../conexion/conn');
module.exports = {

    createNewUser : async function (username, correo, contrasena){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Usuario(usuario, correo, contrasena) VALUES(?,?,?)";
            let values = [username, correo, contrasena];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getAllUsers : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Usuario;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getUserById : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Usuario WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateUser : async function(id, usuario, correo, contrasena){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Usuario SET usuario = ?, correo = ?, contrasena = ? WHERE id = ?";
            let value = [usuario, correo, contrasena, id]
            let row = await conn.query(query, value);
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteUser : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Usuario WHERE id = ?";
            let value = [id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        }catch(error){
            console.log(error);
            return 0;
        }
    },

    login : async function(usuario, contra){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Usuario WHERE usuario = ? and contrasena = ?";
            let value = [usuario, contra];
            let row = await conn.query(query, value);
            conn.end();
            return row[0];
        }catch(error){
            console.log(error);
        }
    }
}
