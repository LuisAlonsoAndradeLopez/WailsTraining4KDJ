<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";

import {
  FetchAvailableComprobantes,
  FetchStoragedComprobantes,
  StorageAllAvailableComprobantes,
  DeleteAllStoragedComprobantes,
  StorageAvailableComprobante,
  DeleteStoragedComprobante,
} from "../../wailsjs/go/services/ComprobantesDataSerializerAndStoragerService";

const availableComprobante = ref([]);
const filteredAvailableComprobantes = ref([]);
const availableComprobantesSearchQuery = ref("");
const findAvailableComprobantesTextAreaPlaceholder = ref(
  "Enter the search Comprobante query..."
);
const storagedComprobantes = ref([]);
const filteredStoragedComprobantes = ref([]);
const storagedComprobantesSearchQuery = ref("");
const findStoragedComprobantesTextAreaPlaceholder = ref(
  "Enter the search Comprobante query..."
);

//Consts for handle hide-show behabiours between GUI components
const showAvailableComprobantes = ref(false);
const showStoragedComprobantes = ref(false);

//Buttons onclick functions
async function storageAllAvaliableComprobantesButtonOnClick() {
  showStoragedComprobantes.value = false;
  await StorageAllAvailableComprobantes(availableComprobante.value);
  await fillStoragedComprobantesDiv();
}

async function deleteAllStoragedComprobantesButtonOnClick() {
  showStoragedComprobantes.value = false;
  await DeleteAllStoragedComprobantes(storagedComprobantes.value);
  await fillStoragedComprobantesDiv();
}

async function storageAvailableComprobanteButtonOnClick(comprobanteInComprobante) {
  await StorageAvailableComprobante(comprobanteInComprobante);
  await fillStoragedComprobantesDiv();
}

async function deleteStoragedComprobanteButtonOnClick(comprobanteInComprobante) {
  await DeleteStoragedComprobante(comprobanteInComprobante);
  await fillStoragedComprobantesDiv();
}

//Auxiliary funcions
async function fillAvailableComprobantesDiv() {
  showAvailableComprobantes.value = false;
  const fetchedAvailableComprobantes = await FetchAvailableComprobantes();
  availableComprobante.value = fetchedAvailableComprobantes;
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

function filterAvailableComprobantes() {
  const queryText = availableComprobantesSearchQuery.value.trim();

  // No query → show all
  if (!queryText) {
    filteredAvailableComprobantes.value = availableComprobante.value;
    return;
  }

  let comprobanteQuery;
  try {
    comprobanteQuery = json.parse(queryText);
  } catch {
    comprobanteQuery = null;
  }

  // Plain text search
  if (!comprobanteQuery) {
    const text = queryText.toLowerCase();
    filteredAvailableComprobantes.value = availableComprobante.value.filter((Comprobante) =>
      Object.values(Comprobante).some((v) =>
        v?.toString().toLowerCase().includes(text)
      )
    );
    return;
  }

  // Comprobante query mode
  if (comprobanteQuery.conditions && Array.isArray(comprobanteQuery.conditions)) {
    filteredAvailableComprobantes.value = availableComprobante.value.filter((Comprobante) =>
      comprobanteQuery.conditions.every((cond) => {
        const value = Comprobante[cond.field]?.toString().toLowerCase() || "";
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
  } else if (comprobanteQuery.field && comprobanteQuery.value) {
    // Simple Comprobante object
    filteredAvailableComprobantes.value = availableComprobante.value.filter((comprobante) => {
      const value = comprobante[comprobanteQuery.field]?.toString().toLowerCase() || "";
      const target = comprobanteQuery.value.toLowerCase();

      switch (comprobanteQuery.match) {
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
    // Invalid Comprobante structure — show all
    filteredAvailableComprobantes.value = availableComprobante.value;
  }
}

//Vue.js functions
onMounted(async () => {
  try {
    await Promise.all([fillAvailableComprobantesDiv(), fillStoragedComprobantesDiv()]);
  } catch (err) {
    console.error("Failed to fetch comprobantes:", err);
  }
});

watch([availableComprobantesSearchQuery], () => {
  filterAvailableComprobantes();
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
        @click="storageAllAvaliableComprobantesButtonOnClick()"
      >
        Storage all available Comprobantes
      </button>
      <button
        class="btn btn-md btn-secondary fs-7"
        @click="deleteAllStoragedComprobantesButtonOnClick()"
      >
        Delete all storaged Comprobantes
      </button>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black comprobantes-module-div"
    >
      <textarea
        type="text"
        v-model="availableComprobantesSearchQuery"
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
        class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 comprobantes-div"
      >
        <div
          v-for="(comprobanteInComprobante, rowIndex) in filteredAvailableComprobantes"
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
            @click="storageAvailableComprobanteButtonOnClick(comprobanteInComprobante)"
          >
            Storage
          </button>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-start align-items-center w-100 mx-5 p-2 gap-2 bg-black comprobantes-module-div"
    >
      <textarea
        type="text"
        v-model="storagedComprobantesSearchQuery"
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
        class="d-flex flex-column justify-content-start align-items-start w-100 gap-2 comprobantes-div"
      >
        <div
          v-for="(comprobanteInComprobante, rowIndex) in filteredStoragedComprobantes"
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
            @click="deleteStoragedComprobanteButtonOnClick(comprobanteInComprobante)"
          >
            Delete
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
  height: 71vh;
}

.comprobantes-div {
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 55vh;
}

.comprobante-textarea {
  width: 100%;
  height: 41vh;
}
</style>
