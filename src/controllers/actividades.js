const conection = require('../bases/queries/actividadesQueries');

module.exports = {
    createActivity :async function (req, res) {
    	var {id, idPuntaje, nombre, puntaje} = req.body;
        var result =  await conection.createActivity(id, idPuntaje, nombre, puntaje);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getUserActivity : async function(req, res, next){
        var idUsuario = req.params.id;
        var actividad;
        res.setHeader('Content-Type', 'application/json');
        if (idUsuario == undefined){
            actividad = await conection.getAllUsersActivity();
            res.send(JSON.stringify(actividad, null, 4));
        }
        else{
            actividad = await conection.getUserActivityById(idUsuario);
            res.send(JSON.stringify(actividad, null, 4));
        }
    },

    updateUserActivity : async function(req, res) {
    	var {id, idPuntaje, nombre, puntaje} = req.body;
        var result =  await conection.updateUserActivity(id, idPuntaje, nombre, puntaje);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteUserActivity : async function(req, res) {
        var idUsuario = req.params.id;
        var result =  await conection.deleteUserActivity(idUsuario);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }

}