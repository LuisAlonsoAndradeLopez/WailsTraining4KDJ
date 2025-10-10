//TODO: Execute the button storageComprobante
<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";

import {
  FetchAvailableJsons,
  FetchStoragedJsons,
  StorageAllAvailableJsons,
  PauseAllAvailableJsonsStoraging,
  ResumeAllAvailableJsonsStoraging,
  CancelAllAvailableJsonsStoraging,
  DeleteAllStoragedJsons,
  PauseAllStoragedJsonsDeleting,
  ResumeAllStoragedJsonsDeleting,
  CancelAllStoragedJsonsDeleting,
  StorageAvailableJson,
  DeleteStoragedJson,
} from "../../wailsjs/go/services/JsonDataSerializerAndStoragerService";

const availableJsons = ref([]);
const filteredAvailableJsons = ref([]);
const availableJsonsSearchQuery = ref("");
const findAvailableJsonsTextAreaPlaceholder = ref(
  "Enter the search JSON query..."
);
const storagedJsons = ref([]);
const filteredStoragedJsons = ref([]);
const storagedJsonsSearchQuery = ref("");
const findStoragedJsonsTextAreaPlaceholder = ref(
  "Enter the search JSON query..."
);

//Consts for handle hide-show behabiours between GUI components
const showAvailableJsons = ref(false);
const showStoragedJsons = ref(false);

//Buttons onclick functions
async function storageAllAvaliableJsonsButtonOnClick() {
  showStoragedJsons.value = false;
  await StorageAllAvailableJsons(availableJsons.value);
  await fillStoragedJsonsDiv();
}

async function pauseAllAvaliableJsonsStoragingButtonOnClick() {
  showStoragedJsons.value = false;
  await PauseAllAvailableJsonsStoraging(availableJsons.value);
  await fillStoragedJsonsDiv();
}

async function resumeAllAvaliableJsonsStoragingButtonOnClick() {
  showStoragedJsons.value = false;
  await ResumeAllAvailableJsonsStoraging(availableJsons.value);
  await fillStoragedJsonsDiv();
}

async function cancelAllAvaliableJsonsStoragingButtonOnClick() {
  showStoragedJsons.value = false;
  await CancelAllAvailableJsonsStoraging(availableJsons.value);
  await fillStoragedJsonsDiv();
}

async function deleteAllStoragedJsonsButtonOnClick() {
  showStoragedJsons.value = false;
  await DeleteAllStoragedJsons(storagedJsons.value);
  await fillStoragedJsonsDiv();
}

async function pauseAllStoragedJsonsDeletingButtonOnClick() {
  showStoragedJsons.value = false;
  await PauseAllStoragedJsonsDeleting(storagedJsons.value);
  await fillStoragedJsonsDiv();
}

async function resumeAllStoragedJsonsDeletingButtonOnClick() {
  showStoragedJsons.value = false;
  await ResumeAllStoragedJsonsDeleting(storagedJsons.value);
  await fillStoragedJsonsDiv();
}

async function cancelAllStoragedJsonsDeletingButtonOnClick() {
  showStoragedJsons.value = false;
  await CancelAllStoragedJsonsDeleting(storagedJsons.value);
  await fillStoragedJsonsDiv();
}

async function storageAvailableJsonButtonOnClick(comprobanteInJson) {
  await StorageAvailableJson(comprobanteInJson);
  await fillStoragedJsonsDiv();
}

async function deleteStoragedJsonButtonOnClick(comprobanteInJson) {
  await DeleteStoragedJson(comprobanteInJson);
  await fillStoragedJsonsDiv();
}

//Auxiliary funcions
async function fillAvailableJsonsDiv() {
  showAvailableJsons.value = false;
  const fetchedAvailableJsons = await FetchAvailableJsons();
  availableJsons.value = fetchedAvailableJsons;
  filteredAvailableJsons.value = fetchedAvailableJsons;
  showAvailableJsons.value = true;
}

async function fillStoragedJsonsDiv() {
  showStoragedJsons.value = false;
  const fetchedStoragedJsons = await FetchStoragedJsons();
  storagedJsons.value = fetchedStoragedJsons;
  filteredStoragedJsons.value = fetchedStoragedJsons;
  showStoragedJsons.value = true;
}

function filterAvailableJsons() {
  const queryText = availableJsonsSearchQuery.value.trim();

  // No query → show all
  if (!queryText) {
    filteredAvailableJsons.value = availableJsons.value;
    return;
  }

  // Try parse JSON query
  let jsonQuery;
  try {
    jsonQuery = JSON.parse(queryText);
  } catch {
    jsonQuery = null;
  }

  // Plain text search
  if (!jsonQuery) {
    const text = queryText.toLowerCase();
    filteredAvailableJsons.value = availableJsons.value.filter((json) =>
      Object.values(json).some((v) =>
        v?.toString().toLowerCase().includes(text)
      )
    );
    return;
  }

  // JSON query mode
  if (jsonQuery.conditions && Array.isArray(jsonQuery.conditions)) {
    filteredAvailableJsons.value = availableJsons.value.filter((json) =>
      jsonQuery.conditions.every((cond) => {
        const value = json[cond.field]?.toString().toLowerCase() || "";
        const target = cond.value.toLowerCase();

        switch (cond.match) {
          case "startsWith":
            return value.startsWith(target);
          case "equals":
            return value === target;
          case "includes":
          default:
            return value.includes(target);
        }
      })
    );
  } else if (jsonQuery.field && jsonQuery.value) {
    // Simple JSON object
    filteredAvailableJsons.value = availableJsons.value.filter((json) => {
      const value = json[jsonQuery.field]?.toString().toLowerCase() || "";
      const target = jsonQuery.value.toLowerCase();

      switch (jsonQuery.match) {
        case "startsWith":
          return value.startsWith(target);
        case "equals":
          return value === target;
        case "includes":
        default:
          return value.includes(target);
      }
    });
  } else {
    // Invalid JSON structure — show all
    filteredAvailableJsons.value = availableJsons.value;
  }
}

//Vue.js functions
onMounted(async () => {
  await Promise.all([fillAvailableJsonsDiv(), fillStoragedJsonsDiv()]);
});

watch([availableJsonsSearchQuery], () => {
  filterAvailableJsons();
});
</script>

<template>
  <ViewNavigator />
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-3 p-3 gap-3 bg-dark"
  >
    <div
      class="d-flex justify-content-center align-items-center p-2 gap-1 w-100 bg-black"
    >
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="storageAllAvaliableJsonsButtonOnClick()"
      >
        Storage all available Jsons
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="resumeAllAvaliableJsonsStoragingButtonOnClick()"
      >
        Resume all Jsons storaging
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="pauseAllAvaliableJsonsStoragingButtonOnClick()"
      >
        Pause all Jsons storaging
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="cancelAllAvaliableJsonsStoragingButtonOnClick()"
      >
        Cancel all Jsons storaging
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="deleteAllStoragedJsonsButtonOnClick()"
      >
        Delete all storaged Jsons
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="resumeAllStoragedJsonsDeletingButtonOnClick()"
      >
        Resume all storaged Jsons deleting
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="pauseAllStoragedJsonsDeletingButtonOnClick()"
      >
        Pause all storaged Jsons deleting
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="cancelAllStoragedJsonsDeletingButtonOnClick()"
      >
        Cancel all storaged Jsons deleting
      </button>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black jsons-module-div"
    >
      <textarea
        type="text"
        v-model="availableJsonsSearchQuery"
        class="form-control fs-3 lh-1"
        id="find-textarea"
        :placeholder="findAvailableJsonsTextAreaPlaceholder"
      />
      <h3 class="fw-bold fs-4">Jsons available for storage</h3>
      <div
        v-if="!showAvailableJsons"
        class="d-flex justify-content-center align-items-center w-100 h-100"
      >
        <div
          class="spinner-border text-primary jsons-fetching-spinner-div"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div
        v-else
        class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 jsons-div"
      >
        <div
          v-for="(comprobanteInJson, rowIndex) in filteredAvailableJsons"
          :key="rowIndex"
          class="d-flex flex-column justify-content-center align-items-center w-100 p-2 gap-2 bg-dark"
        >
          <textarea
            class="form form-control fs-3 lh-1 json-textarea"
            disabled
            >{{ comprobanteInJson }}</textarea
          >
          <button
            class="btn btn-lg btn-primary"
            @click="storageAvailableJsonButtonOnClick(comprobanteInJson)"
          >
            Storage
          </button>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black jsons-module-div"
    >
      <textarea
        type="text"
        v-model="storagedJsonsSearchQuery"
        class="form-control fs-3 lh-1"
        id="find-textarea"
        :placeholder="findStoragedJsonsTextAreaPlaceholder"
      />
      <h3 class="fw-bold fs-4">Storaged Jsons</h3>
      <div
        v-if="!showStoragedJsons"
        class="d-flex justify-content-center align-items-center w-100 h-100"
      >
        <div
          class="spinner-border text-primary jsons-fetching-spinner-div"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div
        v-else
        class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 jsons-div"
      >
        <div
          v-for="(comprobanteInJson, rowIndex) in filteredStoragedJsons"
          :key="rowIndex"
          class="d-flex flex-column justify-content-center align-items-center w-100 p-2 gap-2 bg-dark"
        >
          <textarea
            class="form form-control fs-3 lh-1 json-textarea"
            disabled
            >{{ comprobanteInJson }}</textarea
          >
          <button
            class="btn btn-lg btn-primary"
            @click="deleteStoragedJsonButtonOnClick(comprobanteInJson)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jsons-fetching-spinner-div {
  width: 19rem;
  height: 19rem;
}

.jsons-module-div {
  height: 71vh;
}

.jsons-div {
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 55vh;
}

.json-textarea {
  width: 100%;
  height: 41vh;
}
</style>
