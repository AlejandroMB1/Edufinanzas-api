const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const scoreControllers = require('../controllers/puntaje');

router.post('/create', scoreControllers.createScore);

router.get('/getUser/:id?', scoreControllers.getUserScore);

router.put('/update', scoreControllers.updateUserScore);

router.delete('/delete/:id',scoreControllers.deleteUserScore);

module.exports = router;