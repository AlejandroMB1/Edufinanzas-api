const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const usersControllers = require('../controllers/detailUsers');

router.post('/createDetail', usersControllers.createNewUserDetail);

router.get('/getUser/:idOrName?', usersControllers.getUserDetail);

router.put('/update', usersControllers.updateUser);

router.delete('/delete/:id',usersControllers.deleteUser);

module.exports = router;