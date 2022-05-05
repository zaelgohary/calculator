const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

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


// sum route
app.post(`/add`, (req, res) => {
  try {
    const result = sum(req.query.num1, req.query.num2)
    res.end(JSON.stringify(result));
  } catch (error) {
    console.log('error: ', error);
  }
});


// subtract route
app.post(`/subtract`, (req, res) => {
  try {
    const result = subtract(req.query.num1, req.query.num2)
    res.end(JSON.stringify(result));
  } catch (error) {
    console.log('error: ', error);
  }
});


// divide route
app.post(`/divide`, (req, res) => {
  try {
    const result = divide(req.query.num1, req.query.num2)
    res.end(JSON.stringify(result));
  } catch (error) {
    console.log('error: ', error);
  }
});

// multiply route
app.post(`/multiply`, (req, res) => {
  try {
    const result = multiply(req.query.num1, req.query.num2)
    res.end(JSON.stringify(result));
  } catch (error) {
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


app.listen(3000, 'localhost', () => {
  console.log('listening to 3000');
});