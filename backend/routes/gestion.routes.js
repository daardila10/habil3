const router = require('express').Router();
const {gestion_controler} = require('../controllers');
const {gestion_middlewares} = require('../middlewares');

router.post('/add', gestion_middlewares.verifyTypes,gestion_middlewares.verifyNombreu, gestion_controler.addGestion);
router.get('/list', gestion_controler.getAllGestion);
router.put('/update', gestion_middlewares.verifyTypes, gestion_controler.updateGestion);
router.delete('/delete/:id', gestion_controler.deleteGestion);

module.exports = router;


