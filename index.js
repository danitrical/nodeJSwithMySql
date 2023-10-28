const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productController = require('./src/modules/products/product.controller');
const checkAuthorisedValue = require('./src/middlewares/authorisationCheck');
const checkUserRole = require('./src/middlewares/userRoleCheck');

app.use(bodyParser.json());

app.use(checkAuthorisedValue);

app.use(checkUserRole);

app.use(productController);

app.listen(3000);