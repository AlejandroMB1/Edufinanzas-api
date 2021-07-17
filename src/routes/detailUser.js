const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const detailControllers = require('../controllers/detailUser');

router.post('/createDetail', detailControllers.createNewUserDetail);

router.get('/getUser/:id?', detailControllers.getUserDetail);

router.put('/update', detailControllers.updateUserDetail);

router.delete('/delete/:id',detailControllers.deleteUserDetail);

module.exports = router;