<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";
</script>

<template>
  <ViewNavigator />
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-3 py-2 gap-1 bg-dark"
  >
    <h3 class="fw-bold fs-1">Files Downloader</h3>
    <div
      class="d-flex flex-column justify-content-center align-items-center w-100 mx-3 p-2 bg-black"
    >
      <div class="overflow-auto files-table-content-div">
        <table class="w-100">
          <thead class="bg-dark text-white sticky-top">
            <tr>
              <th class="px-3 fs-3" id="id-th">File Type</th>
              <th class="px-3 fs-3" id="names-th">File Extension</th>
              <th class="px-3 fs-3" id="surnames-th">Size</th>
              <th class="px-3 fs-3" id="birthdates-th">Download Progress</th>
              <th class="px-3 fs-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <td
                v-for="(value, colIndex) in row"
                :key="'cell-' + rowIndex + '-' + colIndex"
                class="px-3 py-2"
              >
                <label class="fs-5">{{ value }}</label>
              </td>
              <td>
                <button
                  class="btn btn-md btn-secondary"
                  @click="updateUserButtonOnClick(row)"
                >
                  Update
                </button>
              </td>
            </tr>

            <tr v-if="isAddingANewUser">
              <td class="px-2 py-2">
                <label class="fs-5">{{ lastUserID }}</label>
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToAdd.name"
                  type="text"
                  class="rounded p-1 w-100"
                  placeholder="Enter the name..."
                  maxlength="30"
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToAdd.surnames"
                  type="text"
                  class="rounded p-1 w-100"
                  placeholder="Enter the surnames..."
                  maxlength="30"
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToAdd.birth_date"
                  type="date"
                  class="rounded p-1 w-100"
                  placeholder="Enter the birthdate..."
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToAdd.phone_number"
                  type="tel"
                  class="rounded p-1 w-100"
                  placeholder="Enter the phonenumber..."
                  maxlength="15"
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToAdd.email"
                  type="email"
                  class="rounded p-1 w-100"
                  placeholder="Enter the email..."
                  maxlength="100"
                />
              </td>
              <td
                class="d-flex flex-column justify-content-center align-items-center px-2 py-2 gap-1"
              >
                <button
                  @click="saveTheUserButtonOnClick"
                  class="btn btn-success text-white px-2 py-1 rounded mr-2"
                >
                  Save the User
                </button>
                <button
                  @click="cancelAddingUserButtonOnClick"
                  class="btn btn-danger text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </td>
            </tr>

            <tr v-if="isUpdatingAUser">
              <td class="px-2 py-2">
                <label class="fs-5">{{ userToUpdate.id }}</label>
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToUpdate.name"
                  type="text"
                  class="rounded p-1 w-100"
                  placeholder="Enter the name..."
                  maxlength="30"
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToUpdate.surnames"
                  type="text"
                  class="rounded p-1 w-100"
                  placeholder="Enter the surnames..."
                  maxlength="30"
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToUpdate.birth_date"
                  type="date"
                  class="rounded p-1 w-100"
                  placeholder="Enter the birthdate..."
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToUpdate.phone_number"
                  type="tel"
                  class="rounded p-1 w-100"
                  placeholder="Enter the phonenumber..."
                  maxlength="15"
                />
              </td>
              <td class="px-2 py-2">
                <input
                  v-model="userToUpdate.email"
                  type="email"
                  class="rounded p-1 w-100"
                  placeholder="Enter the email..."
                  maxlength="100"
                />
              </td>
              <td
                class="d-flex flex-column justify-content-center align-items-center px-2 py-2 gap-1"
              >
                <button
                  @click="updateTheUserButtonOnClick"
                  class="btn btn-success text-white px-2 py-1 rounded mr-2"
                >
                  Update the User
                </button>
                <button
                  @click="cancelUpdatingUserButtonOnClick"
                  class="btn btn-danger text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="d-flex justify-content-center align-items-center w-100 mt-3 mx-3 p-2 gap-3 bg-dark"
      >
        <h3 class="mt-1">Download path:</h3>
        <label
          class="fs-1 py-3 w-50 bg-black text-white path-text-area"
          readonly
          disabled
        >
{{}}
        </label>
        <button class="btn btn-md btn-secondary">Change download path</button>
        <button class="btn btn-md btn-secondary">Download all files</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.files-table-content-div {
  height: 54vh;
}


</style>
