const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const appRoutes = require('./routes');


// create express app
const app = express();


// use cors middleware
app.use(cors())



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


// simple get route
app.get('/', (req, res) => {
  if(res.status(200)){
    res.send('Hello from the server!!!')
    res.end()
  }
  res.status(404).send('Server error')
})


app.use('/', appRoutes)



app.listen(3000, 'localhost', () => {
  console.log('listening to 3000');
});