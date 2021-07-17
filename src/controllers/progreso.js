const conection = require('../bases/queries/progressQueries');

module.exports = {
    createProgress :async function (req, res) {
    	var {id, idUsuario, modulo1, modulo2, modulo3, ultimoIngreso} = req.body;
        var result =  await conection.createProgress(id, idUsuario, modulo1, modulo2, modulo3,ultimoIngreso);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getUserProgress : async function(req, res, next){
        var id = req.params.id;
        var progreso;
        res.setHeader('Content-Type', 'application/json');
        console.log(id);
        if (id == undefined){
            progreso = await conection.getAllUsersProgress();
            res.send(JSON.stringify(progreso, null, 4));
            console.log("Entré al allusers");
        }
        else{
            progreso = await conection.getUserProgressById(id);
            res.send(JSON.stringify(progreso, null, 4));
        }
    },

    updateUserProgress : async function(req, res) {
    	var {id, idUsuario, modulo1, modulo2, modulo3,ultimoIngreso} = req.body;
        var result =  await conection.updateUserProgress(id, idUsuario, modulo1, modulo2, modulo3,ultimoIngreso);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteUserProgress : async function(req, res) {
        var idUsuario = req.params.id;
        var result =  await conection.deleteUserProgress(idUsuario);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }

}