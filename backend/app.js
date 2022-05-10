const express = require('express');
const bodyParser = require('body-parser');
const appRoutes = require('./routes');
const cors = require('cors')

// create express app
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// const corsOptions = {
//   credentials: true,
//   origin: '*',  
//   allowedHeaders: ['Content-Type'],
//   optionsSuccessStatus: 200
// };
app.use(cors());


// app.use('/', appRoutes)

// simple get route
app.get('/', (req, res) => {
  if(res.status(200)){
    res.send('Hello from the server!!!')
  }
  else{
    res.status(404).send('Server error')
  }
})


// sum route
app.post(`/sum`, (req, res) => {
  if(res.status(200)){
    const result = sum(req.body.num1, req.body.num2)
    res.send(JSON.stringify(result));
    console.log(req.body.num1, req.body.num2);
    console.log(result);
  }else{
    console.log(error);
  }
});


// subtract route
app.post(`/subtract`, (req, res) => {
  if (res.status(200)) {
    const result = subtract(req.body.num1, req.body.num2)
    res.send(JSON.stringify(result));
  } else {
    console.log('error: ', error);
  }
});


// divide route
app.post(`/divide`, (req, res) => {
  if (res.status(200)) {
    const result = divide(req.body.num1, req.body.num2)
    res.send(JSON.stringify(result));
  } else {
    console.log('error: ', error);
    
  }
});

// multiply route
app.post(`/multiply`, (req, res) => {
  if (res.status(200)) {
    const result = multiply(req.body.num1, req.body.num2)
    res.send(JSON.stringify(result));
  } else {
    console.log('error: ', error);
  }
});

// sum function
const sum = (num1, num2) => {
  return Number(num1) + Number(num2)
}

// subtract function
const subtract = (num1, num2) => {
  return Number(num1) - Number(num2)
}

// division function
const divide = (num1, num2) =>{
  return Number(num1) / Number(num2)
}

// multiply function
const multiply = (num1, num2) => {
  return Number(num1) * Number(num2)
}


app.listen(4000, 'localhost', () => {
  console.log('listening to 4000');
});