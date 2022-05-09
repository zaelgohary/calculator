const express = require('express');
const router = express.Router();

// sum route
router.post(`/sum`, (req, res) => {
  console.log(req);
  try {
    const result = sum(req.body.num1, req.body.num2)
    res.end(JSON.stringify(result));
  } catch (error) {
    console.log('error: ', error);
  }
});


// subtract route
router.post(`/subtract`, (req, res) => {
  try {
    const result = subtract(req.body.num1, req.body.num2)
    res.end(JSON.stringify(result));
  } catch (error) {
    console.log('error: ', error);
  }
});


// divide route
router.post(`/divide`, (req, res) => {
  try {
    const result = divide(req.body.num1, req.body.num2)
    res.end(JSON.stringify(result));
  } catch (error) {
    console.log('error: ', error);
  }
});

// multiply route
router.post(`/multiply`, (req, res) => {
  try {
    const result = multiply(req.body.num1, req.body.num2)
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

module.exports = router; 


