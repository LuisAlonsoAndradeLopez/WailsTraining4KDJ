<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";

import { SelectDownloadsDirectory } from "../../wailsjs/go/backend/App";

const findByTextInputPlaceholder = ref("Enter a file type...");

const filesSearchQuery = ref("");
const filesSearchField = ref("file-type");
const downloadingPath = ref("Select the downloading path...");

//Buttons onclick functions
function downloadAllFilesButtonOnClick() {}

function resumeAllFilesDownloadingButtonOnClick() {}

function pauseAllFilesDownloadingButtonOnClick() {}

function cancelAllFilesDownloadingButtonOnClick() {}

async function changeDownloadingPathButtonOnClick() {
  const result = await SelectDownloadsDirectory();
  downloadingPath.value = result;
}

function downloadFileButtonOnClick() {}

function resumeFileDownloadingButtonOnClick() {}

function pauseFileDownloadingButtonOnClick() {}

function cancelFileDownloadingButtonOnClick() {}

//Auxiliary funcions
function updateFindByTextInputPlaceholder() {
  switch (filesSearchField.value) {
    case "file-type":
      findByTextInputPlaceholder.value = "Enter a file type...";
      break;
    case "file-extension":
      findByTextInputPlaceholder.value = "Enter a file extension...";
      break;
    case "size":
      findByTextInputPlaceholder.value = "Enter a size...";
      break;
  }
}

//Vue.js functions
onMounted(() => {});
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
        <div
          class="d-flex justify-content-center align-items-center w-100 gap-2"
        >
          <h3 class="mt-1">Find by:</h3>
          <input
            type="text"
            v-model="filesSearchQuery"
            class="form-control form-control-md files-search-input"
            id="find-by-text-input"
            :placeholder="findByTextInputPlaceholder"
          />
          <select
            v-model="filesSearchField"
            @change="updateFindByTextInputPlaceholder"
            class="form-select files-search-select"
            id="find-by-select"
          >
            <option value="file-type">File Type</option>
            <option value="file-extension">File Extension</option>
            <option value="size">Size</option>
          </select>
        </div>

        <div
          class="d-flex justify-content-center align-items-center w-100 gap-2"
        >
          <div
            class="d-flex align-items-center fs-3 bg-dark text-white px-2 overflow-auto text-nowrap path-div"
          >
            {{ downloadingPath }}
          </div>
          <button
            class="btn btn-md btn-secondary fs-6"
            @click="changeDownloadingPathButtonOnClick()"
          >
            Change download path
          </button>
        </div>
      </div>

      <div
        class="d-flex flex-column justify-content-center align-items-center w-25 gap-2"
      >
        <div class="d-flex justify-content-center align-items-center gap-2">
          <button
            class="btn btn-sm btn-secondary fs-7"
            @click="downloadAllFilesButtonOnClick()"
          >
            Download all files
          </button>
          <button
            class="btn btn-sm btn-secondary fs-7"
            @click="resumeAllFilesDownloadingButtonOnClick()"
          >
            Resume all files downloading
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <button
            class="btn btn-sm btn-secondary fs-7"
            @click="pauseAllFilesDownloadingButtonOnClick()"
          >
            Pause all files downloading
          </button>
          <button
            class="btn btn-sm btn-secondary fs-7"
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
              <th class="px-3 fs-5" id="file-type-th">File Type</th>
              <th class="px-3 fs-5" id="file-extension-th">File Extension</th>
              <th class="px-3 fs-5" id="size-th">Size</th>
              <th class="px-3 fs-5" id="download-progress-th">Download Progress</th>
              <th class="px-3 fs-5">Actions</th>
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
                  @click="downloadFileButtonOnClick()"
                >
                  Download File
                </button>
                <button
                  class="btn btn-md btn-secondary"
                  @click="pauseFileDownloadingButtonOnClick()"
                >
                  Pause File Downloading
                </button>
                <button
                  class="btn btn-md btn-secondary"
                  @click="cancelFileDownloadingButtonOnClick()"
                >
                  Cancel File Downloading
                </button>
                <button
                  class="btn btn-md btn-secondary"
                  @click="resumeFileDownloadingButtonOnClick()"
                >
                  Resume File Downloading
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

.files-search-input {
  width: 43.8%;
}

.files-search-select {
  width: 43.8%;
}

.path-div {
  width: 100%;
}
</style>
