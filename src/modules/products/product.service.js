const db = require('../../../database');
const httpStatusCodes = require('../../constants/httpsStatusCodes');
const { successResponse, errorResponse } = require('../../utils/response');
const productResponseMessages = require('./constants/messages');

const getProducts = (req, res) => {
  db.query('SELECT * FROM products')
    .then(data => {
      res.
        status(httpStatusCodes.OK).
        send(successResponse(
          productResponseMessages.getSuccess,
          data[0]
        ))
    })
    .catch(err => {
      res.status(httpStatusCodes.NotFound).send(errorResponse(productResponseMessages.getError, []));
    });
}; 
const addProducts = (req, res) => {
  const body = req.body;
  if (Object.keys(body)?.length) {
    const { name: productName, description, quantity, price, imageUrl } = body;
  console.log('body', body);
  const insertQuery =
    `INSERT INTO
      products
        (name, description, quantity, imageUrl, price)
      VALUES
        (
          '${productName}',
          '${description}',
          ${quantity},
          '${imageUrl}',
          ${price}
        )`;

  db.query(insertQuery)
    .then(data => {
      res.
        status(httpStatusCodes.Created).
        send(
          successResponse(
            productResponseMessages.createSuccess,
            data[0],
            httpStatusCodes.Created,
          ));
    })
    .catch(err => {
      res.status(httpStatusCodes.BadRequest).send(err);
    })
  } else {
    res.send('Body is required')
  }
  
}; 
const editProducts = (req, res) => {
  const { params, body } = req;
  const { id } = params;
  const { name: productName, description, quantity, price, imageUrl } = body;

  const updateQuery =
    `UPDATE products
     SET name = '${productName}', description = '${description}',
      quantity = ${quantity}, price = ${price}, imageUrl = '${imageUrl}'
     WHERE id = ${id}
    `
  db.query(updateQuery)
  .then(data => {
    res.send(data[0])
  })
  .catch(err => {
    res.send(err);
  });
};
const deleteProducts = (req, res) => {
  const { id } = req.params; // id = { id: 123 };
  if (Number(id)) {
    const deleteQuery = `DELETE FROM products WHERE id = ${id}`
    db.query(deleteQuery)
    .then(data => {
      res.send(data[0])
    })
    .catch(err => {
      res.send(err);
    });
  } else {
    res.send({ message: "Please enter valid product Id"});
  }
}; 

module.exports = {
  getProducts,
  addProducts,
  editProducts,
  deleteProducts,
}