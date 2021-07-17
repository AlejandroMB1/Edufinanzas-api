const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const progessControllers = require('../controllers/progreso');

router.post('/create', progessControllers.createProgress);

router.get('/getUser/:id?', progessControllers.getUserProgress);

router.put('/update', progessControllers.updateUserProgress);

router.delete('/delete/:id',progessControllers.deleteUserProgress);

module.exports = router;