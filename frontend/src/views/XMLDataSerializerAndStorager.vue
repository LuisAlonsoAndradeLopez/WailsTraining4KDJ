//TODO: Continue with showing Comprobantes
<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";

import {
  FetchAvailableXMLs,
//  StartAllStoragings,
//  PauseAllStoragings,
//  ResumeAllStoragings,
//  CancelAllStoragings,
//  StartStoraging,
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

async function storageAvailableXmlButtonOnClick(xml) {}

async function deleteStoragedXmlButtonOnClick(xml) {}

//Auxiliary funcions
async function fillFilesTable() {}

function filterFiles() {}

//Vue.js functions
onMounted(async () => {
  await FetchAvailableXMLs();
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
      <div class="w-100 gap-2 xmls-div">
        <div
          v-for="(xml, rowIndex) in filteredAvailableXmls"
          :key="rowIndex"
          class="d-flex flex-column justify-content-center align-items-center w-25 p-2 gap-2 bg-dark"
        >
          <textarea class="form-control fs-3 lh-1" disabled
          >{{ xml }}</textarea>
          <button class="btn btn-lg btn-primary" @click="storageAvailableXmlButtonOnClick(xml)">
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
      <div class="w-100 xmls-div">
        <div
          v-for="(xml, rowIndex) in filteredStoragedXmls"
          :key="rowIndex"
          class="d-flex flex-column justify-content-center align-items-center w-25 p-2 gap-2 bg-dark"
        >
          <textarea class="form-control fs-3 lh-1" disabled
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
  overflow-x: auto;
  overflow-y: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-type: y mandatory;
  height: 50vh;
}
</style>
