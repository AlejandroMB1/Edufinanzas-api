const conection = require('../bases/queries/puntajeQueries');

module.exports = {
    createScore :async function (req, res) {
    	var {id, idUsuario, total, saldo} = req.body;
        var result =  await conection.createScore(id, idUsuario, total, saldo);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getUserScore : async function(req, res, next){
        var idUsuario = req.params.id;
        var puntaje;
        res.setHeader('Content-Type', 'application/json');
        if (idUsuario == undefined){
            puntaje = await conection.getAllUsersScore();
            res.send(JSON.stringify(puntaje, null, 4));
        }
        else{
            puntaje = await conection.getUserScoreById(idUsuario);
            res.send(JSON.stringify(puntaje, null, 4));
        }
    },

    updateUserScore : async function(req, res) {
    	var {id, idUsuario, total, saldo} = req.body;
        var result =  await conection.updateUserScore(id, idUsuario, total, saldo);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteUserScore : async function(req, res) {
        var idUsuario = req.params.id;
        var result =  await conection.deleteUserScore(idUsuario);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }

}