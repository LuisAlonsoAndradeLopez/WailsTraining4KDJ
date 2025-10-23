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
const availableComprobantesFilterQueryText = ref("{}");
const findAvailableComprobantesTextAreaPlaceholder = ref(
  "Enter the search comprobante query..."
);
const storagedComprobantes = ref([]);
const filteredStoragedComprobantes = ref([]);
const storagedComprobantesComprobanteTypes = computed(() => {
  const uniqueComprobanteTypes = storagedComprobantes.value.map(sc => sc.TipoComprobante)
  return [...new Set(uniqueComprobanteTypes)]
})
const storagedComprobantesIssueDates = computed(() => {
  const uniqueIssueDates = storagedComprobantes.value.map(sc => sc.FechaEmision)
  return [...new Set(uniqueIssueDates)]
})
const storagedComprobantesRFCs = computed(() => {
  const uniqueRFCs = storagedComprobantes.value.map(sc => sc.RfcProvCertif)
  return [...new Set(uniqueRFCs)]
})
const storagedComprobantesSeries = computed(() => {
  const uniqueSeries = storagedComprobantes.value.map(sc => sc.Serie)
  return [...new Set(uniqueSeries)]
})
const storagedComprobantesFolios = computed(() => {
  const uniqueFolios = storagedComprobantes.value.map(sc => sc.Folio)
  return [...new Set(uniqueFolios)]
})
const storagedComprobantesUUIDs = computed(() => {
  const uniqueUUIDs = storagedComprobantes.value.map(sc => sc.Uuid)
  return [...new Set(uniqueUUIDs)]
})
const storagedComprobantesComprobanteTypeSearchField = ref("anyComprobanteType");
const storagedComprobantesIssueDateSearchField = ref("anyIssueDate");
const storagedComprobantesRFCSearchField = ref("anyRFC");
const storagedComprobantesSerieSearchField = ref("anySerie");
const storagedComprobantesFolioSearchField = ref("anyFolio");
const storagedComprobantesUUIDSearchField = ref("anyUUID");
const storagedComprobantesFilterQueryText = ref("{}");
const storagedComprobantesManualFilterQuery = ref({})
const storagedComprobantesSelectFilterQuery = computed(() => {
  const query = {}

  if (storagedComprobantesComprobanteTypeSearchField.value !== 'anyComprobanteType')
    query.TipoComprobante = storagedComprobantesComprobanteTypeSearchField.value

  if (storagedComprobantesIssueDateSearchField.value !== 'anyIssueDate')
    query.FechaEmision = storagedComprobantesIssueDateSearchField.value

  if (storagedComprobantesRFCSearchField.value !== 'anyRFC')
    query.RfcProvCertif = storagedComprobantesRFCSearchField.value

  if (storagedComprobantesSerieSearchField.value !== 'anySerie')
    query.Serie = storagedComprobantesSerieSearchField.value

  if (storagedComprobantesFolioSearchField.value !== 'anyFolio')
    query.Folio = storagedComprobantesFolioSearchField.value

  if (storagedComprobantesUUIDSearchField.value !== 'anyUUID')
    query.Uuid = storagedComprobantesUUIDSearchField.value

  return query
})
const storagedComprobantesFilterQuery = computed(() => {
  return {
    ...storagedComprobantesManualFilterQuery.value,
    ...storagedComprobantesSelectFilterQuery.value,
  }
})
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
const availableComprobantesPageBeforeCurrentPage = computed(() => {
  if (
    filteredAvailableComprobantes.value != null &&
    availableComprobantesCurrentPage.value > 1
  ) {
    return availableComprobantesCurrentPage.value - 1;
  } else {
    return 0;
  }
});
const availableComprobantesPageAfterCurrentPage = computed(() => {
  if (
    filteredAvailableComprobantes.value != null &&
    availableComprobantesCurrentPage.value <
      availableComprobantesTotalPages.value
  ) {
    return availableComprobantesCurrentPage.value + 1;
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
const storagedComprobantesPageBeforeCurrentPage = computed(() => {
  if (
    filteredStoragedComprobantes.value != null &&
    storagedComprobantesCurrentPage.value > 1
  ) {
    return storagedComprobantesCurrentPage.value - 1;
  } else {
    return 0;
  }
});
const storagedComprobantesPageAfterCurrentPage = computed(() => {
  if (
    filteredStoragedComprobantes.value != null &&
    storagedComprobantesCurrentPage.value < storagedComprobantesTotalPages.value
  ) {
    return storagedComprobantesCurrentPage.value + 1;
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

function availableComprobantesFirstPageButtonOnClick() {
  availableComprobantesCurrentPage.value = 1;
}

function availableComprobantesBeforeCurrentPageButtonOnClick() {
  if (availableComprobantesCurrentPage.value > 1) {
    availableComprobantesCurrentPage.value--;
  }
}

function availableComprobantesAfterCurrentPageButtonOnClick() {
  if (
    availableComprobantesCurrentPage.value <
    availableComprobantesTotalPages.value
  ) {
    availableComprobantesCurrentPage.value++;
  }
}

function availableComprobantesLastPageButtonOnClick() {
  availableComprobantesCurrentPage.value =
    availableComprobantesTotalPages.value;
}

async function deleteStoragedComprobanteButtonOnClick(
  comprobanteInComprobante
) {
  await DeleteStoragedComprobante(comprobanteInComprobante);
  await fillStoragedComprobantesDiv();
}

function storagedComprobantesFirstPageButtonOnClick() {
  storagedComprobantesCurrentPage.value = 1;
}

function storagedComprobantesBeforeCurrentPageButtonOnClick() {
  if (storagedComprobantesCurrentPage.value > 1) {
    storagedComprobantesCurrentPage.value--;
  }
}

function storagedComprobantesAfterCurrentPageButtonOnClick() {
  if (
    storagedComprobantesCurrentPage.value < storagedComprobantesTotalPages.value
  ) {
    storagedComprobantesCurrentPage.value++;
  }
}

function storagedComprobantesLastPageButtonOnClick() {
  storagedComprobantesCurrentPage.value = storagedComprobantesTotalPages.value;
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
    if (typeof parsed === "object" && parsed !== null) {
      availableComprobantesFilterQuery.value = parsed;
    } else {
      availableComprobantesFilterQuery.value = {};
    }
  } catch (e) {
    availableComprobantesFilterQuery.value = {};
  }
});

watch(
  [availableComprobantes, availableComprobantesFilterQuery],
  () => {
    try {
      filteredAvailableComprobantes.value = mingo
        .find(
          availableComprobantes.value,
          availableComprobantesFilterQuery.value
        )
        .all();
      availableComprobantesCurrentPage.value = 1;
    } catch (e) {
      filteredAvailableComprobantes.value = [];
    }
  },
  { immediate: true }
);

watch(storagedComprobantesFilterQueryText, (newText) => {
  try {
    const parsed = JSON.parse(newText)
    storagedComprobantesManualFilterQuery.value =
      typeof parsed === 'object' && parsed !== null ? parsed : {}
  } catch {
    storagedComprobantesManualFilterQuery.value = {}
  }
})

watch(
  [storagedComprobantes, storagedComprobantesFilterQuery],
  () => {
    try {
      filteredStoragedComprobantes.value = mingo
        .find(storagedComprobantes.value, storagedComprobantesFilterQuery.value)
        .all()
    } catch (err) {
      console.error('Error filtering comprobantes:', err)
      filteredStoragedComprobantes.value = []
    }
  },
  { immediate: true }
)
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
            v-if="availableComprobantesCurrentPage > 2"
            class="btn btn-secondary"
            @click="availableComprobantesFirstPageButtonOnClick"
          >
            1
          </button>
          <span v-if="availableComprobantesCurrentPage > 2"> ... </span>
          <button
            v-if="availableComprobantesCurrentPage > 1"
            class="btn btn-secondary"
            @click="availableComprobantesBeforeCurrentPageButtonOnClick"
          >
            {{ availableComprobantesPageBeforeCurrentPage }}
          </button>
          <span>{{ availableComprobantesCurrentPage }}</span>
          <button
            v-if="
              availableComprobantesCurrentPage <
              availableComprobantesTotalPages - 1
            "
            class="btn btn-secondary"
            @click="availableComprobantesAfterCurrentPageButtonOnClick"
          >
            {{ availableComprobantesPageAfterCurrentPage }}
          </button>
          <span
            v-if="
              availableComprobantesCurrentPage <
              availableComprobantesTotalPages - 1
            "
          >
            ...
          </span>
          <button
            v-if="
              availableComprobantesCurrentPage < availableComprobantesTotalPages
            "
            class="btn btn-secondary"
            @click="availableComprobantesLastPageButtonOnClick"
          >
            {{ availableComprobantesTotalPages }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black comprobantes-module-div"
    >
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
        class="d-flex flex-column justify-content-start align-items-center w-100"
      >
        <textarea
          type="text"
          v-model="storagedComprobantesFilterQueryText"
          class="form-control fs-3 lh-1"
          id="find-textarea"
          :placeholder="findStoragedComprobantesTextAreaPlaceholder"
        />
        <div
          class="d-flex flex-column justify-content-center align-items-center p-2 gap-2 w-100"
        >
          <div
            class="d-flex justify-content-center align-items-center w-100 gap-2"
          >
            <h3 class="fs-3 mt-1">Tipo de Comprobante:</h3>
            <select
              v-model="storagedComprobantesComprobanteTypeSearchField"
              class="form-select w-25"
              id="find-by-select"
            >
              <option value="anyComprobanteType">Any</option>
              <option
                v-for="(comprobanteType, index) in storagedComprobantesComprobanteTypes"
                :key="index"
                :value="comprobanteType"
              >
                {{ comprobanteType }}
              </option>
            </select>

            <h3 class="fs-3 mt-1 ms-2">Fecha de emisión:</h3>
            <select
              v-model="storagedComprobantesIssueDateSearchField"
              class="form-select w-25"
              id="find-by-select"
            >
              <option value="anyIssueDate">Any</option>
              <option
                v-for="(issueDate, index) in storagedComprobantesIssueDates"
                :key="index"
                :value="issueDate"
              >
                {{ issueDate }}
              </option>
            </select>

            <h3 class="fs-3 mt-1 ms-2">RFC:</h3>
            <select
              v-model="storagedComprobantesRFCSearchField"
              class="form-select w-25"
              id="find-by-select"
            >
              <option value="anyRFC">Any</option>
              <option
                v-for="(rfc, index) in storagedComprobantesRFCs"
                :key="index"
                :value="rfc"
              >
                {{ rfc }}
              </option>
            </select>
          </div>

          <div
            class="d-flex justify-content-center align-items-center w-100 gap-2"
          >
            <h3 class="fs-3 mt-1">Serie:</h3>
            <select
              v-model="storagedComprobantesSerieSearchField"
              class="form-select w-25"
              id="find-by-select"
            >
              <option value="anySerie">Any</option>
              <option
                v-for="(serie, index) in storagedComprobantesSeries"
                :key="index"
                :value="serie"
              >
                {{ serie }}
              </option>
            </select>

            <h3 class="fs-3 mt-1 ms-2">Folio:</h3>
            <select
              v-model="storagedComprobantesFolioSearchField"
              class="form-select w-25"
              id="find-by-select"
            >
              <option value="anyFolio">Any</option>
              <option
                v-for="(folio, index) in storagedComprobantesFolios"
                :key="index"
                :value="folio"
              >
                {{ folio }}
              </option>
            </select>

            <h3 class="fs-3 mt-1 ms-2">UUID:</h3>
            <select
              v-model="storagedComprobantesUUIDSearchField"
              class="form-select w-25"
              id="find-by-select"
            >
              <option value="anyUUID">Any</option>
              <option
                v-for="(uuid, index) in storagedComprobantesUUIDs"
                :key="index"
                :value="uuid"
              >
                {{ uuid }}
              </option>
            </select>
          </div>
        </div>

        <h3 class="fw-bold fs-4 mt-2">Storaged Comprobantes</h3>

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
            v-if="storagedComprobantesCurrentPage > 2"
            class="btn btn-secondary"
            @click="storagedComprobantesFirstPageButtonOnClick"
          >
            1
          </button>
          <span v-if="storagedComprobantesCurrentPage > 2"> ... </span>
          <button
            v-if="storagedComprobantesCurrentPage > 1"
            class="btn btn-secondary"
            @click="storagedComprobantesBeforeCurrentPageButtonOnClick"
          >
            {{ storagedComprobantesPageBeforeCurrentPage }}
          </button>
          <span>{{ storagedComprobantesCurrentPage }}</span>
          <button
            v-if="
              storagedComprobantesCurrentPage <
              storagedComprobantesTotalPages - 1
            "
            class="btn btn-secondary"
            @click="storagedComprobantesAfterCurrentPageButtonOnClick"
          >
            {{ storagedComprobantesPageAfterCurrentPage }}
          </button>
          <span
            v-if="
              storagedComprobantesCurrentPage <
              storagedComprobantesTotalPages - 1
            "
          >
            ...
          </span>
          <button
            v-if="
              storagedComprobantesCurrentPage < storagedComprobantesTotalPages
            "
            class="btn btn-secondary"
            @click="storagedComprobantesLastPageButtonOnClick"
          >
            {{ storagedComprobantesTotalPages }}
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
  height: 117vh;
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
