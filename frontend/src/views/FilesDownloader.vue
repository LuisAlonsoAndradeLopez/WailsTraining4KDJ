<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";

import {
  GetAllSampleFiles,
  SelectFilesDownloadsDirectory,
  StartAllDownloads,
  PauseAllDownloads,
  ResumeAllDownloads,
  CancelAllDownloads,
  GetSampleFilesStatus,
  StartDownload,
  PauseDownload,
  ResumeDownload,
  CancelDownload,
} from "../../wailsjs/go/services/FileDownloadingService";

const files = ref([]);
const filteredFiles = ref([]);
const filesSearchQuery = ref("");
const filesSearchField = ref("fileType");
const findByTextInputPlaceholder = ref("Enter a file type...");
const downloadingPath = ref("Select a download path...");

//Consts for handle hide-show behabiours between GUI components
const theFilesAreFetching = ref(false);

//Buttons onclick functions
async function downloadAllFilesButtonOnClick() {
  const urls = files.value.map((f) => f.DownloadURL);
  await StartAllDownloads(urls); // backend schedules them
  startPollingSampleFileStatus();

  files.value.forEach((file) => {
    file.downloadState = "downloading";
    file.progress = 0;
  });
}

async function pauseAllFilesDownloadingButtonOnClick() {
  await PauseAllDownloads(); // backend pauses
  files.value.forEach((file) => {
    if (file.downloadState === "downloading") file.downloadState = "paused";
  });
}

async function resumeAllFilesDownloadingButtonOnClick() {
  await ResumeAllDownloads();
  files.value.forEach((file) => {
    if (file.downloadState === "paused") file.downloadState = "downloading";
  });
}

async function cancelAllFilesDownloadingButtonOnClick() {
  await CancelAllDownloads();
  files.value.forEach((file) => {
    file.downloadState = "idle";
    file.progress = 0;
  });
}

async function changeDownloadingPathButtonOnClick() {
  const result = await SelectFilesDownloadsDirectory();
  downloadingPath.value = result;
}

async function downloadFileButtonOnClick(row) {
  row.downloadState = "downloading";
  await StartDownload(row.DownloadURL); // schedules this URL individually
  startPollingSampleFileStatus();
}

async function pauseFileDownloadingButtonOnClick(row) {
  await PauseDownload(row.id);
  row.downloadState = "paused";
}

async function resumeFileDownloadingButtonOnClick(row) {
  await ResumeDownload(row.id);
  row.downloadState = "downloading";
}

async function cancelFileDownloadingButtonOnClick(row) {
  await CancelDownload(row.id);
  row.downloadState = "idle";
  row.progress = 0;
}

//Auxiliary funcions
async function fillFilesTable() {
  theFilesAreFetching.value = true;
  try {
    const result = await GetAllSampleFiles();

    files.value = result.map((file) => ({
      ...file,
      downloadState: "idle", // idle | downloading | paused
      progress: 0,
      id: f.DownloadURL,
    }));

    filteredFiles.value = files.value;
  } catch (error) {
    console.error("Error loading files:", error);
  } finally {
    theFilesAreFetching.value = false;
  }
}

function filterFiles() {
  const query = filesSearchQuery.value.trim().toLowerCase();
  const field = filesSearchField.value;

  if (!query) {
    filteredFiles.value = files.value;
    return;
  }

  filteredFiles.value = files.value.filter((file) => {
    const fieldValue = file[field]?.toString().toLowerCase() || "";
    return fieldValue.startsWith(query);
  });
}

let pollHandle = null;
function startPollingSampleFileStatus() {
  if (pollHandle) return;
  pollHandle = setInterval(async () => {
    try {
      const statuses = await GetSampleFilesStatus();
      // update local files
      statuses.forEach((st) => {
        const file = files.value.find(
          (f) => f.id === st.ID || f.DownloadURL === st.URL
        );
        if (file) {
          file.progress = st.Progress;
          file.downloadState = st.State;
          if (st.State === "completed") {
            file.progress = 100;
          }
          if (st.State === "error") {
            file.downloadState = "idle";
            // optionally show error somewhere
          }
        }
      });
      // stop polling when none are active
      const anyActive = files.value.some((f) =>
        ["downloading", "paused", "queued"].includes(f.downloadState)
      );
      if (!anyActive) {
        clearInterval(pollHandle);
        pollHandle = null;
      }
    } catch (err) {
      console.error("poll error", err);
    }
  }, 300);
}

function updateFindByTextInputPlaceholder() {
  switch (filesSearchField.value) {
    case "fileType":
      findByTextInputPlaceholder.value = "Enter a file type...";
      break;
    case "size":
      findByTextInputPlaceholder.value = "Enter a size...";
      break;
  }
}

//Vue.js functions
onMounted(async () => {
  try {
    await fillFilesTable();
  } catch (err) {
    console.error("Failed to load users:", err);
  }
});

watch([filesSearchQuery, filesSearchField], () => {
  filterFiles();
});
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
            <option value="fileType">File Type</option>
            <option value="size">Size</option>
          </select>
        </div>

        <div
          class="d-flex justify-content-center align-items-center w-100 gap-2"
        >
          <h3 class="mt-1">Download Path:</h3>
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
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 bg-black files-table-module-div"
    >
      <div
        v-if="theFilesAreFetching"
        class="d-flex justify-content-center align-items-center w-100 h-100"
      >
        <div
          class="spinner-border text-primary files-fetching-spinner-div"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div
        v-else
        class="d-flex flex-column justify-content-start align-items-center w-100"
      >
        <h3 class="fw-bold fs-4">Files Downloader</h3>
        <div class="overflow-auto w-100 files-table-div">
          <table class="table w-100">
            <thead class="bg-dark text-white sticky-top">
              <tr>
                <th class="px-3 fs-5" id="file-type-th">File Type</th>
                <th class="px-3 fs-5" id="size-th">Size</th>
                <th class="px-3 fs-5" id="download-progress-th">
                  Download Progress
                </th>
                <th class="px-3 fs-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(file, index) in filteredFiles"
                :key="index"
                class="p-2"
              >
                <td class="px-3 py-2 file-type-td">
                  <label class="fs-5">{{ file.fileType }}</label>
                </td>

                <td class="px-3 py-2 file-size-td">
                  <label class="fs-5">{{ file.size }}</label>
                </td>

                <td class="px-3 py-2 file-download-progress-td">
                  <div class="progress" style="height: 35px">
                    <div
                      class="progress-bar progress-bar-striped"
                      role="progressbar"
                      :style="{ width: file.progress + '%' }"
                      :aria-valuenow="file.progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ file.progress }}%
                    </div>
                  </div>
                </td>

                <td
                  class="d-flex flex-column justify-content-center align-items-center gap-1"
                >
                  <button
                    v-if="file.downloadState === 'idle'"
                    class="btn btn-lg btn-secondary"
                    @click="downloadFileButtonOnClick(file)"
                  >
                    Download File
                  </button>

                  <button
                    v-if="file.downloadState === 'downloading'"
                    class="btn btn-md btn-secondary"
                    @click="pauseFileDownloadingButtonOnClick(file)"
                  >
                    Pause File Downloading
                  </button>

                  <button
                    v-if="file.downloadState === 'paused'"
                    class="btn btn-md btn-secondary"
                    @click="resumeFileDownloadingButtonOnClick(file)"
                  >
                    Resume File Downloading
                  </button>

                  <button
                    v-if="
                      file.downloadState === 'downloading' ||
                      file.downloadState === 'paused'
                    "
                    class="btn btn-md btn-secondary"
                    @click="cancelFileDownloadingButtonOnClick(file)"
                  >
                    Cancel File Downloading
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-size-td {
  width: 10%;
}

.file-type-td {
  width: 10%;
}

.file-download-progress-td {
  width: 60%;
}

.files-fetching-spinner-div {
  width: 19rem;
  height: 19rem;
}

.files-table-module-div {
  height: 57vh;
}

.files-table-div {
  height: 50vh;
}

.files-search-input {
  width: 43.8%;
}

.files-search-select {
  width: 43.8%;
}

.path-div {
  width: 56%;
}
</style>
