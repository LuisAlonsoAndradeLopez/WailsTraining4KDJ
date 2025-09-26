<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";

//Buttons onclick functions
function downloadAllFilesButtonOnClick() {}

function resumeAllFilesDownloadingButtonOnClick() {}

function pauseAllFilesDownloadingButtonOnClick() {}

function cancelAllFilesDownloadingButtonOnClick() {}

function changeDownloadingPathButtonOnClick() {}

function downloadFileButtonOnClick() {}

function resumeFileDownloadingButtonOnClick() {}

function pauseFileDownloadingButtonOnClick() {}

function cancelFileDownloadingButtonOnClick() {}
</script>

<template>
  <ViewNavigator />
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-3 p-3 gap-3 bg-dark"
  >
    <div
      class="d-flex justify-content-center align-items-center p-2 gap-2 w-100 bg-black"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-center w-75 gap-2"
      >
        <div class="d-flex justify-content-center align-items-center w-100 gap-2">
          <h3 class="mt-1">Find by:</h3>
          <input
            type="text"
            v-model="usersSearchQuery"
            class="form-control form-control-md w-50"
            id="find-by-text-input"
            :placeholder="findByTextInputPlaceholder"
          />
          <select
            v-model="usersSearchField"
            @change="updateFindByTextInputPlaceholder"
            class="form-select w-25"
            id="find-by-select"
          >
            <option value="name">Name</option>
            <option value="id">ID</option>
          </select>
        </div>

        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3"
        >
          <h3 class="mt-1 fs-4">Download path:</h3>
          <div
            class="d-flex align-items-center fs-4 bg-dark text-white px-2 path-div"
          >
            royer Dunkan g
          </div>
          <button class="btn btn-md btn-secondary fs-6">
            Change download path
          </button>
        </div>
      </div>

      <div
        class="d-flex flex-column justify-content-center align-items-center w-25 gap-2"
      >
        <div class="d-flex justify-content-center align-items-center gap-2">
          <button
            class="btn btn-sm btn-secondary fs-8"
            @click="downloadAllFilesButtonOnClick()"
          >
            Download all files
          </button>
          <button
            class="btn btn-sm btn-secondary fs-8"
            @click="resumeAllFilesDownloadingButtonOnClick()"
          >
            Resume all files downloading
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <button
            class="btn btn-sm btn-secondary fs-8"
            @click="pauseAllFilesDownloadingButtonOnClick()"
          >
            Pause all files downloading
          </button>
          <button
            class="btn btn-sm btn-secondary fs-8"
            @click="cancelAllFilesDownloadingButtonOnClick()"
          >
            Cancel all files downloading
          </button>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-center align-items-center w-100 mx-5 p-2 bg-black"
    >
      <div class="overflow-auto w-100 files-table-content-div">
        <h3 class="fw-bold fs-4">Files Downloader</h3>
        <table class="w-100">
          <thead class="bg-dark text-white sticky-top">
            <tr>
              <th class="px-3 fs-5" id="id-th">File Type</th>
              <th class="px-3 fs-5" id="names-th">File Extension</th>
              <th class="px-3 fs-5" id="surnames-th">Size</th>
              <th class="px-3 fs-5" id="birthdates-th">Download Progress</th>
              <th class="px-3 fs-5">Action</th>
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
    </div>
  </div>
</template>

<style scoped>
.files-table-content-div {
  height: 54vh;
}

.path-div {
  width: 56%;
}
</style>
