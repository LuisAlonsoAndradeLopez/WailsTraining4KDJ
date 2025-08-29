<script setup>
import { changeView } from "../viewStore.js";

function goToUsersManager() {
  changeView("UsersManager");
}

function goToApiTester() {
  changeView("ApiTester");
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
          class="btn btn-primary btn-lg d-flex flex-column align-items-center"
          @click="goToUsersManager"
        >
          <p class="fw-bold fs-1">Go to Users Manager</p>
          <i class="bi bi-person fs-1"></i>
        </button>

        <button class="btn btn-primary btn-lg" @click="goToApiTester">
          <p class="fw-bold fs-1">Go to Api Tester</p>
          <i class="bi bi-cloud-arrow-up fs-1"></i>
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
