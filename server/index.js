const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' ? true : false,
  })
);

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
