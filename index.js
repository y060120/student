const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const fs = require('fs');
require('dotenv').config();

const xmlparser = require('express-xml-bodyparser');
const swaggerDocument = require('./docs/swagger.json');

const apiRoutes = require('./src/routes/index');

const server = express();

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.use(bodyParser.json());

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

server.use(xmlparser());

server.use('/api', apiRoutes);

server.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.url} Not found.`
  });
});

server.listen(4000, (req, res) => {
  console.log('listening on : ', process.env.PORT);
});