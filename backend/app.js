const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const appRoutes = require('./routes');


// create express app
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// use cors middleware
app.use(cors())


app.use('/', appRoutes)


app.listen(4000, 'localhost', () => {
  console.log('listening to 4000');
});