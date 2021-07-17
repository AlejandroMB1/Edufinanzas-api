const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const actividadesControllers = require('../controllers/actividades');

router.post('/create', actividadesControllers.createActivity);

router.get('/getUser/:id?', actividadesControllers.getUserActivity);

router.put('/update', actividadesControllers.updateUserActivity);

router.delete('/delete/:id',actividadesControllers.deleteUserActivity);

module.exports = router;