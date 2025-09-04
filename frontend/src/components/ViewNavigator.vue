<script setup>
import { changeView } from "../viewStore.js";

function goToSOAPApiTester() {
  changeView("ApiTester");
}

function goToMainMenu() {
  changeView("MainMenu");
}

function goToUsersManager() {
  changeView("UsersManager");
}
</script>

<template>
  <div
    class="d-flex flex-row justify-content-center align-items-center gap-5 py-3 bg-dark"
  >
    <button class="btn btn-dark btn-lg" @click="goToMainMenu">
      Go to Main Menu
    </button>
    <button class="btn btn-dark btn-lg" @click="goToUsersManager">
      Go to Users Manager
    </button>
    <button class="btn btn-dark btn-lg" @click="goToSOAPApiTester">
      Go to SOAP Api Tester
    </button>
  </div>
</template>

<style scoped></style>
