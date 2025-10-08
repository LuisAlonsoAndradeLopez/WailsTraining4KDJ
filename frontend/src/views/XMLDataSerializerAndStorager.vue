//TODO: Execute the button storageComprobante
<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";

import {
  FetchAvailableXMLs,
//  StartAllStoragings,
//  PauseAllStoragings,
//  ResumeAllStoragings,
//  CancelAllStoragings,
  StorageAvailableXml,
//  PauseStoraging,
//  ResumeStoraging,
//  CancelStoraging,
} from "../../wailsjs/go/services/XMLDataSerializerAndStoragerService";

const availableXmls = ref([]);
const filteredAvailableXmls = ref([]);
const availableXMLsSearchQuery = ref("");
const findAvailableXMLsTextAreaPlaceholder = ref(
  "Enter the search JSON query..."
);
const storagedXmls = ref([]);
const filteredStoragedXmls = ref([]);
const storagedXMLsSearchQuery = ref("");
const findStoragedXMLsTextAreaPlaceholder = ref(
  "Enter the search JSON query..."
);

//Buttons onclick functions
async function storageAllAvaliableXmlsButtonOnClick() {}

async function pauseAllAvaliableXmlsStoragingButtonOnClick() {}

async function resumeAllAvaliableXmlsStoragingButtonOnClick() {}

async function cancelAllAvaliableXmlsStoragingButtonOnClick() {}

async function storageAvailableXmlButtonOnClick(comprobanteInJson) {
  await StorageAvailableXml(comprobanteInJson);
}

async function deleteStoragedXmlButtonOnClick(xml) {}

//Auxiliary funcions
function filterAvailableXMLs() {
  const queryText = availableXMLsSearchQuery.value.trim();

  // No query → show all
  if (!queryText) {
    filteredAvailableXmls.value = availableXmls.value;
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
    filteredAvailableXmls.value = availableXmls.value.filter((xml) =>
      Object.values(xml).some((v) =>
        v?.toString().toLowerCase().includes(text)
      )
    );
    return;
  }

  // JSON query mode
  if (jsonQuery.conditions && Array.isArray(jsonQuery.conditions)) {
    filteredAvailableXmls.value = availableXmls.value.filter((xml) =>
      jsonQuery.conditions.every((cond) => {
        const value = xml[cond.field]?.toString().toLowerCase() || "";
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
    filteredAvailableXmls.value = availableXmls.value.filter((xml) => {
      const value = xml[jsonQuery.field]?.toString().toLowerCase() || "";
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
    filteredAvailableXmls.value = availableXmls.value;
  }
}

//Vue.js functions
onMounted(async () => {
  const data = await FetchAvailableXMLs();
  availableXmls.value = data;
  filteredAvailableXmls.value = data;
});

watch([availableXMLsSearchQuery], () => {
  filterAvailableXMLs();
});
</script>

<template>
  <ViewNavigator />
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-3 p-3 gap-3 bg-dark"
  >
    <div
      class="d-flex justify-content-center align-items-center p-2 gap-5 w-100 bg-black"
    >
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="storageAllAvaliableXmlsButtonOnClick()"
      >
        Storage all XMLs
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="resumeAllAvaliableXmlsStoragingButtonOnClick()"
      >
        Resume all XMLs storaging
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="pauseAllAvaliableXmlsStoragingButtonOnClick()"
      >
        Pause all XMLs storaging
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="cancelAllAvaliableXmlsStoragingButtonOnClick()"
      >
        Cancel all XMLs storaging
      </button>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black xmls-module-div"
    >
      <textarea
        type="text"
        v-model="availableXMLsSearchQuery"
        class="form-control fs-3 lh-1"
        id="find-textarea"
        :placeholder="findAvailableXMLsTextAreaPlaceholder"
      />
      <h3 class="fw-bold fs-4">XMLs available for storage</h3>
      <div class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 xmls-div">
        <div
          v-for="(comprobanteInJson, rowIndex) in filteredAvailableXmls"
          :key="rowIndex"
          class="d-flex flex-column justify-content-center align-items-center w-100 p-2 gap-2 bg-dark"
        >
          <textarea class="form form-control fs-3 lh-1 xml-textarea" disabled
          >{{ comprobanteInJson }}</textarea>
          <button class="btn btn-lg btn-primary" @click="storageAvailableXmlButtonOnClick(comprobanteInJson)">
            Storage
          </button>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black xmls-module-div"
    >
      <textarea
        type="text"
        v-model="storagedXMLsSearchQuery"
        class="form-control fs-3 lh-1"
        id="find-textarea"
        :placeholder="findStoragedXMLsTextAreaPlaceholder"
      />
      <h3 class="fw-bold fs-4">Storaged XMLs</h3>
      <div class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 xmls-div">
        <div
          v-for="(xml, rowIndex) in filteredStoragedXmls"
          :key="rowIndex"
          class="d-flex flex-column justify-content-center align-items-center w-100 p-2 gap-2 bg-dark"
        >
          <textarea class="form form-control fs-3 lh-1 xml-textarea" disabled
          >{{ xml }}</textarea>
          <button class="btn btn-lg btn-primary" @click="deleteStoragedXmlButtonOnClick(xml)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xmls-module-div {
  height: 71vh;
}

.xmls-div {
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 55vh;
}

.xml-textarea {
  width: 100%;
  height: 41vh;
}
</style>
