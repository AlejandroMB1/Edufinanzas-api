const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const usersControllers = require('../controllers/users');

router.post('/create', usersControllers.createNewUser);

router.get('/getUser/:idOrName?', usersControllers.getUser);

router.put('/update', usersControllers.updateUser);

router.delete('/delete/:id',usersControllers.deleteUser);

router.get('/login/:username/:password', (req, res) => {
    res.send("Server Running!");
});

router.get('/logout/:username', (req, res) => {
    res.send("Server Running!");
});

module.exports = router;