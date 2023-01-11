const express = require('express');
const { config } = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use('/', (req, res) => {
  res.send('Hello World!');
  console.log('owo');
});

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
