const router = require('express').Router();
const {employees_controller} = require('../controllers');
const {employees_middlewares} = require('../middlewares');

router.post('/add', employees_middlewares.verifyTy, employees_middlewares.verifyIdentificacion,employees_controller.addEmployees);
router.get('/list', employees_controller.getAllEmployees);
router.put('/update', employees_middlewares.verifyTy, employees_controller.updateEmployees);
router.delete('/delete/:id', employees_controller.deleteEmployees);



module.exports = router;


