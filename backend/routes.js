const express = require('express');
const router = express.Router();



// simple get route
router.get('/', (req, res) => {
  if(res.status(200)){
    res.send('Hello from the server!!!')
  }
  else{
    res.status(404).send('Server error')
  }
})


// sum route
router.post(`/sum`, (req, res) => {
  if(res.status(200)){
    const result = sum(req.body.num1, req.body.num2)
    res.send(JSON.stringify(result));
  }else{
    console.log(error);
  }
});


// subtract route
router.post(`/subtract`, (req, res) => {
  if (res.status(200)) {
    const result = subtract(req.body.num1, req.body.num2)
    res.send(JSON.stringify(result));
  } else {
    console.log('error: ', error);
  }
});


// divide route
router.post(`/divide`, (req, res) => {
  if (res.status(200)) {
    const result = divide(req.body.num1, req.body.num2)
    res.send(JSON.stringify(result));
  } else {
    console.log('error: ', error);
    
  }
});

// multiply route
router.post(`/multiply`, (req, res) => {
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

module.exports = router; 


