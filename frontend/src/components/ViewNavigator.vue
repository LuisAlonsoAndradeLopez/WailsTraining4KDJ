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

function goToBooksManager() {
  changeView("BooksManager");
}

function goToFilesDownloader() {
  changeView("FilesDownloader");
}
</script>

<template>
  <div
    class="d-flex flex-row justify-content-center align-items-center gap-4 py-3 bg-dark"
  >
    <button class="btn btn-dark btn-md border" @click="goToMainMenu">
      Go to Main Menu
    </button>
    <button class="btn btn-dark btn-md border" @click="goToUsersManager">
      Go to Users Manager
    </button>
    <button class="btn btn-dark btn-md border" @click="goToSOAPApiTester">
      Go to SOAP Api Tester
    </button>
    <button class="btn btn-dark btn-md border" @click="goToRESTApiTester">
      Go to REST Api Tester
    </button>
    <button class="btn btn-dark btn-md border" @click="goToBooksManager">
      Go to Books Manager
    </button>
    <button class="btn btn-dark btn-md border" @click="goToFilesDownloader">
      Go to Files Downloader
    </button>
  </div>
</template>

<style scoped></style>
