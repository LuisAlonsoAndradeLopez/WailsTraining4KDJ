/* TODO: *Una partecita que pruebe cada uno de los metodos HTTP y SOAP */

<script setup>
import ViewNavigator from "../components/ViewNavigator.vue";
import { ref } from "vue";

const numbersToConvertToWords = ref("");
const numbersToConvertToDollars = ref("");
const convertedNumbersToWords = ref("");
const convertedNumbersToDollars = ref("");

function convertNumbersToWords() {}

function convertNumbersToDollars() {}
</script>

<template>
  <ViewNavigator />
  <div
    class="container d-flex flex-column justify-content-center align-items-center bg-dark mt-5 p-5"
  >
    <h1 class="fw-bold fs-1">Number Conversor</h1>
    <div
      class="d-flex justify-content-center align-items-center mt-5 gap-5"
    >
      <div class="d-flex flex-column justify-content-center align-items-center gap-5">
        <h2 class="fw-bold fs-1">Number to Words</h2>
        <input
          v-model="numbersToConvertToWords"
          type="text"
          class="rounded p-1 w-100"
          placeholder="Enter the numbers"
          maxlength="30"
        />
        <label class="fs-5">{{ convertedNumbersToWords }}</label>
        <button
          @click="convertNumbersToWords"
          class="btn btn-primary btn-lg text-white px-2 py-1 rounded"
        >
          Convert numbers to words
        </button>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center gap-5">
        <h2 class="fw-bold fs-1">Number to Dollars</h2>
        <input
          v-model="numbersToConvertToDollars"
          type="text"
          class="rounded p-1 w-100"
          placeholder="Enter the numbers"
          maxlength="30"
        />
        <label class="fs-5">{{ convertedNumbersToDollars }}</label>
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

<style></style>
