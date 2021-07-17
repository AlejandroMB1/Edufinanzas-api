const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const keysxuserControllers = require('../controllers/llavesxusuario');

router.post('/create', keysxuserControllers.createKeysxuser);

router.get('/getUser/:id?', keysxuserControllers.getKeysxuser);

router.put('/update', keysxuserControllers.updateKeysxuser);

router.delete('/delete/:id',keysxuserControllers.deleteKeysxuser);

module.exports = router;