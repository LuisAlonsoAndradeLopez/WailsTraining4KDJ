//TODO: Upgrade the pagination for have buttons 1, 2, 3 to last
// Fix the concurrency, isn't fetching all files on available and storaged

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import mingo from "mingo";

import ViewNavigator from "../components/ViewNavigator.vue";

import {
  FetchAvailableComprobantes,
  FetchStoragedComprobantes,
  SelectComprobantesDownloadsDirectory,
  StorageAllAvailableComprobantes,
  DeleteAllStoragedComprobantes,
  DownloadAllAvailableComprobantes,
  StorageAvailableComprobante,
  DeleteStoragedComprobante,
} from "../../wailsjs/go/services/ComprobantesDataSerializerAndStoragerService";

const availableComprobantes = ref([]);
const filteredAvailableComprobantes = ref([]);
const availableComprobantesFilterQuery = ref({});
const availableComprobantesFilterQueryText = ref('{}');
const findAvailableComprobantesTextAreaPlaceholder = ref(
  "Enter the search comprobante query..."
);
const storagedComprobantes = ref([]);
const filteredStoragedComprobantes = ref([]);
const storagedComprobantesFilterQuery = ref({});
const storagedComprobantesFilterQueryText = ref('{}');
const findStoragedComprobantesTextAreaPlaceholder = ref(
  "Enter the search comprobante query..."
);

const comprobanteDownloadPath = ref("Select a download path...");

const availableComprobantesCurrentPage = ref(1);
const availableComprobantesItemsPerPage = ref(10);
const storagedComprobantesCurrentPage = ref(1);
const storagedComprobantesItemsPerPage = ref(10);
const availableComprobantesTotalPages = computed(() => {
  if (filteredAvailableComprobantes.value != null) {
    return Math.ceil(
      filteredAvailableComprobantes.value.length /
        availableComprobantesItemsPerPage.value
    );
  } else {
    return 0;
  }
});
const availablePaginatedComprobantes = computed(() => {
  if (filteredAvailableComprobantes.value != null) {
    const start =
      (availableComprobantesCurrentPage.value - 1) *
      availableComprobantesItemsPerPage.value;
    const end = start + availableComprobantesItemsPerPage.value;
    return filteredAvailableComprobantes.value.slice(start, end);
  } else {
    return 0;
  }
});
const storagedComprobantesTotalPages = computed(() => {
  if (filteredStoragedComprobantes.value != null) {
    return Math.ceil(
      filteredStoragedComprobantes.value.length /
        storagedComprobantesItemsPerPage.value
    );
  } else {
    return 0;
  }
});
const storagedPaginatedComprobantes = computed(() => {
  if (filteredStoragedComprobantes.value != null) {
    const start =
      (storagedComprobantesCurrentPage.value - 1) *
      storagedComprobantesItemsPerPage.value;
    const end = start + storagedComprobantesItemsPerPage.value;
    return filteredStoragedComprobantes.value.slice(start, end);
  } else {
    return 0;
  }
});

//Consts for handle hide-show behaviours between GUI components
const showAvailableComprobantes = ref(false);
const showStoragedComprobantes = ref(false);

//Buttons onclick functions
async function changeComprobantesDownloadPathButtonOnClick() {
  const result = await SelectComprobantesDownloadsDirectory();
  comprobanteDownloadPath.value = result;
}

async function storageAllAvaliableComprobantesButtonOnClick() {
  showStoragedComprobantes.value = false;
  await StorageAllAvailableComprobantes(availableComprobantes.value);
  await fillStoragedComprobantesDiv();
}

async function deleteAllStoragedComprobantesButtonOnClick() {
  showStoragedComprobantes.value = false;
  await DeleteAllStoragedComprobantes(storagedComprobantes.value);
  await fillStoragedComprobantesDiv();
}

async function downloadAllAvailableComprobantesButtonOnClick() {
  await DownloadAllAvailableComprobantes(availableComprobantes.value);
}

async function storageAvailableComprobanteButtonOnClick(
  comprobanteInComprobante
) {
  await StorageAvailableComprobante(comprobanteInComprobante);
  await fillStoragedComprobantesDiv();
}

function availableComprobantesPreviousPageButtonOnClick() {
  if (availableComprobantesCurrentPage.value > 1) {
    availableComprobantesCurrentPage.value--;
  }
}

function availableComprobantesNextPageButtonOnClick() {
  if (
    availableComprobantesCurrentPage.value <
    availableComprobantesTotalPages.value
  ) {
    availableComprobantesCurrentPage.value++;
  }
}

async function deleteStoragedComprobanteButtonOnClick(
  comprobanteInComprobante
) {
  await DeleteStoragedComprobante(comprobanteInComprobante);
  await fillStoragedComprobantesDiv();
}

function storagedComprobantesPreviousPageButtonOnClick() {
  if (storagedComprobantesCurrentPage.value > 1) {
    storagedComprobantesCurrentPage.value--;
  }
}

function storagedComprobantesNextPageButtonOnClick() {
  if (
    storagedComprobantesCurrentPage.value < storagedComprobantesTotalPages.value
  ) {
    storagedComprobantesCurrentPage.value++;
  }
}

//Auxiliary funcions
async function fillAvailableComprobantesDiv() {
  showAvailableComprobantes.value = false;
  const fetchedAvailableComprobantes = await FetchAvailableComprobantes();
  availableComprobantes.value = fetchedAvailableComprobantes;
  filteredAvailableComprobantes.value = fetchedAvailableComprobantes;
  showAvailableComprobantes.value = true;
}

async function fillStoragedComprobantesDiv() {
  showStoragedComprobantes.value = false;
  const fetchedStoragedComprobantes = await FetchStoragedComprobantes();
  storagedComprobantes.value = fetchedStoragedComprobantes;
  filteredStoragedComprobantes.value = fetchedStoragedComprobantes;
  showStoragedComprobantes.value = true;
}


//Vue.js functions
onMounted(async () => {
  try {
    await Promise.all([
      fillAvailableComprobantesDiv(),
      fillStoragedComprobantesDiv(),
    ]);
  } catch (err) {
    console.error("Failed to fetch comprobantes:", err);
  }
});

watch(availableComprobantesFilterQueryText, (newText) => {
  try {
    const parsed = JSON.parse(newText);
    if (typeof parsed === 'object' && parsed !== null) {
      availableComprobantesFilterQuery.value = parsed;
    } else {
      availableComprobantesFilterQuery.value = {};
    }
  } catch (e) {
    console.warn('Invalid query JSON:', e.message);
    availableComprobantesFilterQuery.value = {};
  }
});

watch(
  [availableComprobantes, availableComprobantesFilterQuery],
  () => {
    try {
      filteredAvailableComprobantes.value = mingo
        .find(availableComprobantes.value, availableComprobantesFilterQuery.value)
        .all();
    } catch (e) {
      console.warn('Mingo query error:', e.message);
      filteredAvailableComprobantes.value = [];
    }
  },
  { immediate: true }
);

watch(storagedComprobantesFilterQueryText, (newText) => {
  try {
    const parsed = JSON.parse(newText);
    if (typeof parsed === 'object' && parsed !== null) {
      storagedComprobantesFilterQuery.value = parsed;
    } else {
      storagedComprobantesFilterQuery.value = {};
    }
  } catch (e) {
    console.warn('Invalid query JSON:', e.message);
    storagedComprobantesFilterQuery.value = {};
  }
});

watch(
  [storagedComprobantes, storagedComprobantesFilterQuery],
  () => {
    try {
      filteredStoragedComprobantes.value = mingo
        .find(storagedComprobantes.value, storagedComprobantesFilterQuery.value)
        .all();
    } catch (e) {
      console.warn('Mingo query error:', e.message);
      filteredStoragedComprobantes.value = [];
    }
  },
  { immediate: true }
);
</script>

<template>
  <ViewNavigator />
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-3 p-3 gap-3 bg-dark"
  >
    <div
      class="d-flex flex-column justify-content-center align-items-center p-2 gap-2 w-100 bg-black"
    >
      <div class="d-flex justify-content-center align-items-center w-100 gap-2">
        <h3 class="mt-1">Download Path:</h3>
        <div
          class="d-flex align-items-center fs-3 bg-dark text-white px-2 overflow-auto text-nowrap comprobantes-directory-download-path-div"
        >
          {{ comprobanteDownloadPath }}
        </div>
        <button
          class="btn btn-md btn-secondary fs-6"
          @click="changeComprobantesDownloadPathButtonOnClick()"
        >
          Change comprobantes download path
        </button>
      </div>

      <div
        class="d-flex justify-content-center align-items-center p-2 gap-5 w-100"
      >
        <button
          class="btn btn-md btn-secondary fs-7"
          @click="storageAllAvaliableComprobantesButtonOnClick()"
        >
          Storage all available comprobantes
        </button>
        <button
          class="btn btn-md btn-secondary fs-7"
          @click="deleteAllStoragedComprobantesButtonOnClick()"
        >
          Delete all storaged comprobantes
        </button>
        <button
          class="btn btn-md btn-secondary fs-7"
          @click="downloadAllAvailableComprobantesButtonOnClick()"
        >
          Download all available comprobantes
        </button>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black comprobantes-module-div"
    >
      <textarea
        type="text"
        v-model="availableComprobantesFilterQueryText"
        class="form-control fs-3 lh-1"
        id="find-textarea"
        :placeholder="findAvailableComprobantesTextAreaPlaceholder"
      />
      <h3 class="fw-bold fs-4">Comprobantes available for storage</h3>
      <div
        v-if="!showAvailableComprobantes"
        class="d-flex justify-content-center align-items-center w-100 h-100"
      >
        <div
          class="spinner-border text-primary comprobantes-fetching-spinner-div"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div
        v-else
        class="d-flex flex-column justify-content-start align-items-start w-100"
      >
        <div
          class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 comprobantes-div"
        >
          <div
            v-for="(
              comprobanteInComprobante, rowIndex
            ) in availablePaginatedComprobantes"
            :key="rowIndex"
            class="d-flex flex-column justify-content-center align-items-center w-100 p-2 gap-2 bg-dark"
          >
            <textarea
              class="form form-control fs-3 lh-1 comprobante-textarea"
              disabled
              >{{ comprobanteInComprobante }}</textarea
            >
            <button
              class="btn btn-lg btn-primary"
              @click="
                storageAvailableComprobanteButtonOnClick(
                  comprobanteInComprobante
                )
              "
            >
              Storage
            </button>
          </div>
        </div>

        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3 mt-3"
        >
          <button
            class="btn btn-secondary"
            :disabled="availableComprobantesCurrentPage === 1"
            @click="availableComprobantesPreviousPageButtonOnClick"
          >
            Previous
          </button>
          <span
            >Page {{ availableComprobantesCurrentPage }} of
            {{ availableComprobantesTotalPages }}</span
          >
          <button
            class="btn btn-secondary"
            :disabled="
              availableComprobantesCurrentPage ===
              availableComprobantesTotalPages
            "
            @click="availableComprobantesNextPageButtonOnClick"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black comprobantes-module-div"
    >
      <textarea
        type="text"
        v-model="storagedComprobantesFilterQueryText"
        class="form-control fs-3 lh-1"
        id="find-textarea"
        :placeholder="findStoragedComprobantesTextAreaPlaceholder"
      />
      <h3 class="fw-bold fs-4">Storaged Comprobantes</h3>
      <div
        v-if="!showStoragedComprobantes"
        class="d-flex justify-content-center align-items-center w-100 h-100"
      >
        <div
          class="spinner-border text-primary comprobantes-fetching-spinner-div"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div 
        v-else
        class="d-flex flex-column justify-content-start align-items-start w-100"
      >
        <div
          class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 comprobantes-div"
        >
          <div
            v-for="(
              comprobanteInComprobante, rowIndex
            ) in storagedPaginatedComprobantes"
            :key="rowIndex"
            class="d-flex flex-column justify-content-center align-items-center w-100 p-2 gap-2 bg-dark"
          >
            <textarea
              class="form form-control fs-3 lh-1 comprobante-textarea"
              disabled
              >{{ comprobanteInComprobante }}</textarea
            >
            <button
              class="btn btn-lg btn-primary"
              @click="
                deleteStoragedComprobanteButtonOnClick(comprobanteInComprobante)
              "
            >
              Delete
            </button>
          </div>
        </div>

        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3 mt-3"
        >
          <button
            class="btn btn-secondary"
            :disabled="storagedComprobantesCurrentPage === 1"
            @click="storagedComprobantesPreviousPageButtonOnClick"
          >
            Previous
          </button>
          <span
            >Page {{ storagedComprobantesCurrentPage }} of
            {{ storagedComprobantesTotalPages }}</span
          >
          <button
            class="btn btn-secondary"
            :disabled="
              storagedComprobantesCurrentPage === storagedComprobantesTotalPages
            "
            @click="storagedComprobantesNextPageButtonOnClick"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comprobantes-fetching-spinner-div {
  width: 19rem;
  height: 19rem;
}

.comprobantes-module-div {
  height: 95.5vh;
}

.comprobantes-div {
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 64vh;
}

.comprobante-textarea {
  width: 100%;
  height: 53vh;
}

.comprobantes-directory-download-path-div {
  width: 56%;
}
</style>
