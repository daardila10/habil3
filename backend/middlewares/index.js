const employees_middlewares = require('./employees.middlewares');
const product_middleware = require('./product.middleware');
const gestion_middlewares=require('./gestion.middlewares');

module.exports = Object.freeze({
    product_middleware, 
    employees_middlewares,
    gestion_middlewares
})