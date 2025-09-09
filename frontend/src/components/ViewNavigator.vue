<script setup>
import { changeView } from "../viewStore.js";

function goToMainMenu() {
  changeView("MainMenu");
}

function goToRESTApiTester() {
  changeView("RESTApiTester");
}

function goToSOAPApiTester() {
  changeView("SOAPApiTester");
}

function goToUsersManager() {
  changeView("UsersManager");
}
</script>

<template>
  <div
    class="d-flex flex-row justify-content-center align-items-center gap-5 py-3 bg-dark"
  >
    <button class="btn btn-dark btn-lg border" @click="goToMainMenu">
      Go to Main Menu
    </button>
    <button class="btn btn-dark btn-lg border" @click="goToUsersManager">
      Go to Users Manager
    </button>
    <button class="btn btn-dark btn-lg border" @click="goToSOAPApiTester">
      Go to SOAP Api Tester
    </button>
    <button class="btn btn-dark btn-lg border" @click="goToRESTApiTester">
      Go to REST Api Tester
    </button>
  </div>
</template>

<style scoped></style>
