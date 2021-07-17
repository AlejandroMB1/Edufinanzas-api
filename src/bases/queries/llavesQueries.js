const mariadb = require('../../conexion/conn');
module.exports = {

    createKeys : async function (id, nombre, clasificacion){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Llave(id, nombre, clasificacion) VALUES(?,?,?)";
            let values = [id, nombre, clasificacion];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getAllUsersKeys : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Llave;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getUserKeysById : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Llave WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateKeys : async function(id, nombre, clasificacion){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Llave SET nombre=?, clasificacion=? WHERE id = ?";
            let value = [nombre, clasificacion, id]
            let row = await conn.query(query, value);
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteKeys : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Llave WHERE id = ?";
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
