const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const usersControllers = require('../controllers/users');

router.post('/create', usersControllers.createNewUser);

router.get('/getUser/:id?', usersControllers.getUser);

router.put('/update', usersControllers.updateUser);

router.delete('/delete/:id',usersControllers.deleteUser);

router.post('/login', usersControllers.login);

module.exports = router;