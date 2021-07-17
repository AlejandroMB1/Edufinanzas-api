const conection = require('../bases/queries/llavesQueries');

module.exports = {
    createKeys :async function (req, res) {
    	var {id, nombre, clasificacion} = req.body;
        var result =  await conection.createKeys(id, nombre, clasificacion);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getKeys : async function(req, res, next){
        var id = req.params.id;
        var llaves;
        res.setHeader('Content-Type', 'application/json');
        console.log(id);
        if (id == undefined){
            llaves = await conection.getAllUsersKeys();
            res.send(JSON.stringify(llaves, null, 4));
        }
        else{
            llaves = await conection.getUserKeysById(id);
            res.send(JSON.stringify(llaves, null, 4));
        }
    },

    updateKeys : async function(req, res) {
    	var {id, nombre, clasificacion} = req.body;
        var result =  await conection.updateKeys(id, nombre, clasificacion);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteKeys : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteKeys(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}