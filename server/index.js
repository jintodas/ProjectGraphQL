const express = require('express');
require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const schema = require('./schema/schema');
const {graphqlHTTP} = require('express-graphql');
const port = process.env.PORT || 6000;

const app = express();

app.use(
'/graphql',
 graphqlHTTP({
   schema,
   graphiql: process.env.NODE_ENV === 'development' 
})
);

app.listen(port, console.log(`Server running on port ${port}`));