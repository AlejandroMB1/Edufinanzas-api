const conection = require('../bases/queries/usersQueries');
const conection2 = require('../bases/queries/detailQueries');

module.exports = {
    createNewUser :async function (req, res) {
        var usuario = req.body.usuario, contrasena = req.body.contrasena, correo = req.body.correo;
        var result =  await conection.createNewUser(usuario, correo, contrasena);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getUser : async function(req, res, next){
        var id = req.params.id;
        var usuarios;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            usuarios = await conection.getAllUsers();
            res.send(JSON.stringify(usuarios, null, 4));
        }
        else{
            usuarios = await conection.getUserById(id);
            res.send(JSON.stringify(usuarios, null, 4));
        }
    },

    updateUser : async function(req, res) {
    	var {id, usuario, correo, contrasena } = req.body;
        var result =  await conection.updateUser(id, usuario, correo, contrasena);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteUser : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteUser(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    },

    login : async function(req, res) {
        var usuario = req.body.usuario, contra = req.body.contrasena;
        var result =  await conection.login(usuario, contra);
        res.setHeader('Content-Type', 'application/json');
        if (result == undefined){
            res.sendStatus(404);    
        } else {
            res.end(JSON.stringify({ id: result.id, usuario: result.usuario, correo: result.correo, contrasena: result.contrasena}));
        }       
    }

}