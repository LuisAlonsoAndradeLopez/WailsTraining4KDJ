<script setup>
import ViewNavigator from "../components/ViewNavigator.vue";
import {
  NumberToWords,
  NumberToDollars,
} from "../../wailsjs/go/services/SoapService";
import { ref } from "vue";

const numbersToConvertToWords = ref("");
const numbersToConvertToDollars = ref("");
const convertedNumbersToWords = ref("");
const convertedNumbersToDollars = ref("");

async function convertNumbersToWords() {
  const num = parseInt(numbersToConvertToWords.value);
  if (!isNaN(num)) {
    convertedNumbersToWords.value = await NumberToWords(num);
  }
}

async function convertNumbersToDollars() {
  const num = parseFloat(numbersToConvertToDollars.value);
  if (!isNaN(num)) {
    convertedNumbersToDollars.value = await NumberToDollars(num);
  }
}
</script>

<template>
  <ViewNavigator />
  <div
    class="container d-flex flex-column justify-content-center align-items-center bg-dark mt-5 p-4"
  >
    <h1 class="fw-bold number-conversor-text">Number Conversor</h1>
    <div class="d-flex justify-content-center align-items-center mt-3 gap-5">
      <div
        class="d-flex flex-column justify-content-center align-items-center gap-4 p-3 rounded number-conversor-div"
      >
        <h2 class="fw-bold fs-1">Number to Words</h2>
        <input
          v-model="numbersToConvertToWords"
          type="number"
          class="rounded p-1 w-100 form-control-lg"
          placeholder="Enter the numbers"
          maxlength="30"
        />
        <label class="p-1 w-100 h-100 fs-3 bg-dark">{{
          convertedNumbersToWords
        }}</label>
        <button
          @click="convertNumbersToWords"
          class="btn btn-primary btn-lg text-white px-2 py-1 rounded"
        >
          Convert numbers to words
        </button>
      </div>

      <div
        class="d-flex flex-column justify-content-center align-items-center gap-4 p-3 rounded number-conversor-div"
      >
        <h2 class="fw-bold fs-1">Number to Dollars</h2>
        <input
          v-model="numbersToConvertToDollars"
          type="number" 
          class="rounded p-1 w-100 form-control-lg"
          placeholder="Enter the numbers"
          maxlength="30"
        />
        <label class="p-1 w-100 h-100 fs-3 bg-dark">{{
          convertedNumbersToDollars
        }}</label>
        <button
          @click="convertNumbersToDollars"
          class="btn btn-primary btn-lg text-white px-2 py-1 rounded"
        >
          Convert numbers to dollars
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .number-conversor-div {
    width: 75vh;
    background-color: #121212;
  }

  .number-conversor-text {
    font-size: 70px;
  }
</style>
