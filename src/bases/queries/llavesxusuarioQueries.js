const mariadb = require('../../conexion/conn');
module.exports = {

    createKeysxuser : async function (id, idLlave, idUsuario, fechaObtencion){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO LlaveXUsuario(id, idLlave, idUsuario, fechaObtencion) VALUES(?,?,?,?)";
            let values = [id, idLlave, idUsuario, fechaObtencion];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },

    getAllKeys : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM LlaveXUsuario;");
            conn.end();
            return row;
        } catch (err) {
            console.log(err);
        }
    },

    getUserKeysById : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM LlaveXUsuario WHERE idUsuario = ?";
            let value = [idUsuario];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    updateKeysxuser : async function(id, idLlave, idUsuario, fechaObtencion){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE LlaveXUsuario SET id = ?, idLlave = ?, fechaObtencion = ? WHERE idUsuario = ?";
            let value = [id, idLlave, fechaObtencion, idUsuario]
            let row = await conn.query(query, value);
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteKeysxuser : async function(idUsuario){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM LlaveXUsuario WHERE idUsuario = ?";
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
