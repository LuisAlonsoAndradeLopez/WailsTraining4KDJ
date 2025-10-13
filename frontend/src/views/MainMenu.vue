<script setup>
import { changeView } from "../viewStore.js";

function goToUsersManager() {
  changeView("UsersManager");
}

function goToSOAPApiTester() {
  changeView("SOAPApiTester");
}

function goToRESTApiTester() {
  changeView("RESTApiTester");
}

function goToBooksManager() {
  changeView("BooksManager");
}

function goToComprobantesDataSerializerAndStorager() {
  changeView("ComprobantesDataSerializerAndStorager");
}
</script>

<template>
  <div
    class="container d-flex justify-content-center align-items-center flex-column vh-100"
  >
    <div
      class="container d-flex justify-content-center align-items-center flex-column gap-3 bg-dark content-div"
    >
      <h1 class="fw-bold main-title">Choose one</h1>
      <div class="d-flex gap-3">
        <button
          class="btn btn-primary btn-md d-flex flex-column align-items-center"
          @click="goToUsersManager"
        >
          <p class="fw-bold fs-4">Go to Users Manager</p>
          <i class="bi bi-person fs-2"></i>
        </button>
        
        <button class="btn btn-primary btn-md" @click="goToSOAPApiTester">
          <p class="fw-bold fs-4">Go to SOAP Api Tester</p>
          <i class="bi bi-cloud-arrow-up fs-2"></i>
        </button>
        
        <button class="btn btn-primary btn-md" @click="goToRESTApiTester">
          <p class="fw-bold fs-4">Go to REST Api Tester</p>
          <i class="bi bi-cloud-arrow-up fs-2"></i>
        </button>
        
        <button
        class="btn btn-primary btn-md d-flex flex-column align-items-center"
        @click="goToBooksManager"
        >
        <p class="fw-bold fs-4">Go to Books Manager</p>
        <i class="bi bi-book fs-2"></i>
      </button>

      <button class="btn btn-primary btn-md" @click="goToComprobantesDataSerializerAndStorager">
        <p class="fw-bold fs-4">Go to Files Downloader</p>
        <i class="bi bi-download fs-2"></i>
      </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-div {
  padding: 10%;
}

.main-title {
  font-size: 100px;
}
</style>
