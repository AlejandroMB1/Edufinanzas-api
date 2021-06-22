const mariadb = require('../../conexion/conn');
module.exports = {

    createNewUser : async function (username, correo, contrasena){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Usuario(username, correo, contrasena) VALUES(?,?,?)";
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
            console.log("Entré al try");
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Usuario;");
            console.log("hice conn");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
            console.log("print error");
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

    updateUser : async function(id, username, correo, contrasena){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Usuario SET username = ?, correo = ?, contrasena = ? WHERE id = ?";
            let value = [username, correo, contrasena, id]
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
    }
}
