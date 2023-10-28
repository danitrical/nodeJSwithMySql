// Code for understanding the basics of APIs


/// SECTION 1
// const rawQuery = 'SELECT * FROM products'

// db.execute(rawQuery)
// .then(data => console.log(data[0]))
// .catch(err => console.log(err));

// app.use(1, 2)
// 1 is the route
// 2 is the callback function
// app.use('/products', (req, res) => {
//   console.log('Products is called')
//   res.send('<h1>/products is called</h1>')
// })

// request
// -- params
// products/:id  product/1 product/2

// app.use('/products/:id', (req, res) => {
//   const params = req.params;
//   console.log('Products/:id is called')
//   res.send(params)
// })

// -- query params
// products?id=1&email=zain@gmail.com&name=anum     -- single value per queryParam
// products?id=1,2,3   -- multple values per queryParam

// app.use('/products', (req, res) => {
//   const queryParams = req.query;
//   console.log(queryParams)
//   console.log('Products with queryParams is called')
//   res.send(queryParams)
// });

// -- headers
// using postman
// app.use('/products', (req, res) => {
//   const queryParams = req.query;
//   const headers = req.headers;
//   console.log(queryParams)
//   console.log(headers)
//   console.log('Products with queryParams is called')
//   res.send({queryParams, headers})
// });


// -- body
// using postman
// app.use('/products', (req, res) => {
//   const queryParams = req.query;
//   const headers = req.headers;
//   const body = req.body;
//   console.log(queryParams)
//   console.log(headers)
//   console.log(body)
//   console.log('Products with queryParams is called')
//   res.send({queryParams, headers, body})
// });
// const getProducts = (req, res) => {
//   db.query('SELECT * FROM products')
//     .then(data => {
//       res.send(data[0])
//     })
//     .catch(err => {
//       res.send(err);
//     });
// }; 
// const addProducts = (req, res) => {
//   const body = req.body;
//   if (Object.keys(body)?.length) {
//     const { name: productName, description, quantity, price, imageUrl } = body;
//   console.log('body', body);
//   const insertQuery =
//     `INSERT INTO
//       products
//         (name, description, quantity, imageUrl, price)
//       VALUES
//         (
//           '${productName}',
//           '${description}',
//           ${quantity},
//           '${imageUrl}',
//           ${price}
//         )`;

//   db.query(insertQuery)
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.send(err);
//     })
//   } else {
//     res.send('Body is required')
//   }
  
// }; 
// const editProducts = (req, res) => {
//   const { params, body } = req;
//   const { id } = params;
//   const { name: productName, description, quantity, price, imageUrl } = body;

//   const updateQuery =
//     `UPDATE products
//      SET name = '${productName}', description = '${description}',
//       quantity = ${quantity}, price = ${price}, imageUrl = '${imageUrl}'
//      WHERE id = ${id}
//     `
//   db.query(updateQuery)
//   .then(data => {
//     res.send(data[0])
//   })
//   .catch(err => {
//     res.send(err);
//   });
// };

// const deleteProducts = (req, res) => {
//   const { id } = req.params; // id = { id: 123 };
//   if (Number(id)) {
//     const deleteQuery = `DELETE FROM products WHERE id = ${id}`
//     db.query(deleteQuery)
//     .then(data => {
//       res.send(data[0])
//     })
//     .catch(err => {
//       res.send(err);
//     });
//   } else {
//     res.send({ message: "Please enter valid product Id"});
//   }
// }; 

// app.get('/products', getProducts)
// app.post('/products', addProducts)
// app.put('/products/:id', editProducts)
// app.delete('/products/:id', deleteProducts)
