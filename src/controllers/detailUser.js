const conection = require('../bases/queries/detailQueries');

module.exports = {
    createNewUserDetail :async function (req, res) {
    	var {id, nombre, edad, conocimientos, idUsuario} = req.body;
        var result =  await conection.createNewUserDetail(id, nombre, edad, conocimientos, idUsuario);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getUserDetail : async function(req, res, next){
        var id = req.params.id;
        var DetalleUsuario;
        res.setHeader('Content-Type', 'application/json');
        console.log(id);
        if (id == undefined){
            DetalleUsuario = await conection.getAllUsersDetail();
            res.send(JSON.stringify(DetalleUsuario, null, 4));
        }
        else{
            DetalleUsuario = await conection.getUserDetailById(id);
            res.send(JSON.stringify(DetalleUsuario, null, 4));
        }
    },

    updateUserDetail : async function(req, res) {
    	var {id, nombre, edad, conocimientos, idUsuario } = req.body;
        var result =  await conection.updateUserDetail(id, nombre, edad, conocimientos, idUsuario);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteUserDetail : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteUserDetail(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }

}