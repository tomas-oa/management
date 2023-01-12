const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const morgan = require('morgan');
const schema = require('./schema/schema');
const PORT = process.env.PORT || 3000;
const db = require('./config/db');
const app = express();

db();

app.use(cors());
app.use(morgan('dev'));
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' ? true : false,
  })
);

app.listen(PORT, () => {
  console.log('express en puerto 3000');
});
