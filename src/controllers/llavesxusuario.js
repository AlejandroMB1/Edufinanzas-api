const conection = require('../bases/queries/llavesxusuarioQueries');

module.exports = {
    createKeysxuser :async function (req, res) {
    	var {id, idLlave, idUsuario, fechaObtencion} = req.body;
        var result =  await conection.createKeysxuser(id, idLlave, idUsuario, fechaObtencion);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getKeysxuser : async function(req, res, next){
        var idUsuario = req.params.id;
        var llavesxusuario;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            llavesxusuario = await conection.getAllKeys();
            res.send(JSON.stringify(llavesxusuario, null, 4));
            console.log("Entré al allusers");
        }
        else{
            llavesxusuario = await conection.getUserKeysById(idUsuario);
            res.send(JSON.stringify(llavesxusuario, null, 4));
        }
    },

    updateKeysxuser : async function(req, res) {
    	var {id, idLlave, idUsuario, fechaObtencion} = req.body;
        var result =  await conection.updateKeysxuser(id, idLlave, idUsuario, fechaObtencion);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteKeysxuser : async function(req, res) {
        var idUsuario = req.params.id;
        var result =  await conection.deleteKeysxuser(idUsuario);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }

}