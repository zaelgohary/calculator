<template>
  <div class="calculator">
    <div class="screen">
      {{ message }}
    </div>
    <form @submit.prevent="onSubmit">
      <div class="numbers">
        <label for="7" v-on:click="getInputValue(7)">7</label>
        <input type="text" id="7" name="7" value="7" />

        <label for="8" v-on:click="getInputValue(8)">8</label>
        <input type="text" id="8" name="8" value="8" />

        <label for="9" v-on:click="getInputValue(9)">9</label>
        <input type="text" id="9" name="9" value="9" />

        <label for="4" v-on:click="getInputValue(4)">4</label>
        <input type="text" id="4" name="4" value="4" />

        <label for="5" v-on:click="getInputValue(5)">5</label>
        <input type="text" id="5" name="5" value="5" />

        <label for="6" v-on:click="getInputValue(6)">6</label>
        <input type="text" id="6" name="6" value="6" />

        <label for="1" v-on:click="getInputValue(1)">1</label>
        <input type="text" id="1" name="1" value="1" />

        <label for="2" v-on:click="getInputValue(2)">2</label>
        <input type="text" id="2" name="2" value="2" />

        <label for="3" v-on:click="getInputValue(3)">3</label>
        <input type="text" id="3" name="3" value="3" />

        <label for="ac" v-on:click="reset()">AC</label>
        <input type="text" id="ac" name="ac" />

        <label for="0" v-on:click="getInputValue(0)">0</label>
        <input type="text" id="0" name="0" value="0" />

        <label for="equal">=</label>
        <input type="submit" id="equal" name="equal" value="=" />
      </div>
      <div class="operators">
        <label for="divide" v-on:click="getOperatorValue('/')">÷</label>
        <input type="text" id="divide" name="divide" value="÷" />

        <label for="multiply" v-on:click="getOperatorValue('*')">&times;</label>
        <input type="text" id="multiply" name="multiply" value="*" />

        <label for="subtract" v-on:click="getOperatorValue('-')">-</label>
        <input type="text" id="subtract" name="subtract" value="-" />

        <label for="add" v-on:click="getOperatorValue('+')">+</label>
        <input type="text" id="add" name="add" value="+" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Calculator",
  data() {
    return {
      calculatedValue: "",
      operator: null,
      firstNumber: "",
      secondNumber: "",
      message: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.calc();
    },
    getInputValue(value) {
      if (!this.firstNumber && !this.operator) {
        this.firstNumber = String(value);
      } else if (this.firstNumber && !this.operator) {
        this.firstNumber += value;
      } else if (!this.secondNumber && this.operator) {
        this.secondNumber = String(value);
      } else if (this.secondNumber && !this.calculatedValue) {
        this.secondNumber += value;
      }

      this.displayValues();
      return value;
    },
    getOperatorValue(operatorVal) {
      if (this.operator === null) {
        this.operator = operatorVal;
      }
      this.displayValues();
    },

    async addNums(data) {
      try {
        let response = await axios.post(`http://localhost:3000/add`, data);

        if (response.status === 200 && response.status < 300) {
          console.log(response.data);
          return response.data;
        } else {
          console.log("error happened");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    },

    async subtractNums(data) {
      try {
        let response = await axios.post(`http://localhost:3000/subtract`, data);

        if (response.status === 200 && response.status < 300) {
          console.log(response.data);
          return response.data;
        } else {
          console.log("error happened");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    },

    async divideNums(data) {
      try {
        let response = await axios.post(`http://localhost:3000/divide`, data);

        if (response.status === 200 && response.status < 300) {
          console.log(response.data);
          return response.data;
        } else {
          console.log("error happened");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    },

    async multiplyNums(data) {
      try {
        let response = await axios.post(`http://localhost:3000/multiply`, data);

        if (response.status === 200 && response.status < 300) {
          console.log(response.data);
          return response.data;
        } else {
          console.log("error happened");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async calc() {
      switch (this.operator) {
        case "+":
          this.calculatedValue = await this.addNums({
            num1: this.firstNumber,
            num2: this.secondNumber,
          });
          break;

        case "-":
          this.calculatedValue = await this.subtractNums({
            num1: this.firstNumber,
            num2: this.secondNumber,
          });
          break;

        case "*":
          this.calculatedValue = await this.multiplyNums({
            num1: this.firstNumber,
            num2: this.secondNumber,
          });
          break;

        case "/":
          this.calculatedValue = await this.divideNums({
            num1: this.firstNumber,
            num2: this.secondNumber,
          });
          break;

        default:
          return;
      }
      this.displayValues();
      this.firstNumber = "";
      this.secondNumber = "";
      this.calculatedValue = "";
      this.operator = null;
    },

    displayValues() {
      if (this.firstNumber && this.operator === null) {
        this.message = `${this.firstNumber} `;
      } else if (this.firstNumber && this.operator && !this.secondNumber) {
        this.message += `${this.operator} `;
      } else if (
        this.firstNumber &&
        this.operator &&
        this.secondNumber &&
        !this.calculatedValue
      ) {
        this.message += this.secondNumber;
      } else if (
        this.firstNumber &&
        this.operator &&
        this.secondNumber &&
        this.calculatedValue
      ) {
        this.message = this.calculatedValue;
      }
      return this.message;
    },
    reset() {
      this.firstNumber = "";
      this.secondNumber = "";
      this.calculatedValue = "";
      this.operator = null;
      this.message = "";
    },
  },
};
</script>

<style scoped>
.calculator {
  width: 20%;
  display: grid;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  grid-template-rows: 2fr 4fr;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.screen {
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: end;
  font-size: 1.2rem;
  padding: 0.5rem;
}
form {
  background-color: rgb(88, 87, 87);

  display: grid;
  grid-template-columns: 3fr 1fr;
}

form .numbers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #fff;
}

form .operators {
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgb(255, 155, 61);
  color: rgb(88, 87, 87);
  font-weight: bold;
}

label:hover {
  cursor: pointer;
  background-color: darkgray;
  opacity: 0.5;
}

input {
  display: none;
}
label {
  padding: 1rem;
}
</style>