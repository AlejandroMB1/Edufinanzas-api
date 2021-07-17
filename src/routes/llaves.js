const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const keysControllers = require('../controllers/llaves');

router.post('/create', keysControllers.createKeys);

router.get('/getUser/:id?', keysControllers.getKeys);

router.put('/update', keysControllers.updateKeys);

router.delete('/delete/:id',keysControllers.deleteKeys);

module.exports = router;