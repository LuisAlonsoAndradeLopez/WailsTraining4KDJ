/*
TODO:

*Placeholder de campo de texto cambiar cuando combobox cambia valor
*Agregar usuario botón agregar fila como la de desarrollo de software (Y SOLO SE PUEDE AGREGAR 1 A LA VEZ)
*Modificar usuario, como en desarrollo de software, convertir la fila en campos de texto con validaciones, al igual que agregar usuario
*/

<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";
import { GetAllUsers } from "../../wailsjs/go/services/UserService";

const rows = ref([]);
const users = ref([]);

const usersSearchQuery = ref("");
const usersSearchField = ref("name");

//

function addUserButtonOnClick() {
  rows.value.push(["", "", "", "", "", ""]);
}

function deleteRow(index) {
  rows.value.splice(index, 1);
}

//Auxiliary functions
function filterUsers() {
  const query = usersSearchQuery.value.trim().toLowerCase();
  const field = usersSearchField.value;

  if (!query) {
    rows.value = users.value.map(mapUserToRow);
    return;
  }

  rows.value = users.value
    .filter((user) => {
      const fieldValue = user[field]?.toString().toLowerCase() || "";
      return fieldValue.startsWith(query);
    })
    .map(mapUserToRow);
}

function mapUserToRow(user) {
  return [
    user.id?.toString() || "",
    user.name || "",
    user.surnames || "",
    user.birth_date
      ? new Date(user.birth_date).toISOString().split("T")[0]
      : "",
    user.phone_number || "",
    user.email || "",
  ];
}

//Vue.js functions
onMounted(async () => {
  try {
    const data = await GetAllUsers();
    users.value = data;
    rows.value = data.map(mapUserToRow); // ✅ Reuse helper function here
  } catch (err) {
    console.error("Failed to load users:", err);
  }
});

watch([usersSearchQuery, usersSearchField], () => {
  filterUsers();
});
</script>

<template>
  <ViewNavigator />
  <div
    class="d-flex justify-content-center align-items-center mt-3 py-2 gap-3 bg-dark"
  >
    <h3 class="mt-1">Find by:</h3>
    <input
      type="text"
      v-model="usersSearchQuery"
      class="form-control form-control-md w-50"
      id="find-by-text-input"
      placeholder="Name"
    />
    <select
      v-model="usersSearchField"
      class="form-select w-25"
      id="find-by-select"
    >
      <option value="name">Name</option>
      <option value="id">ID</option>
    </select>
    <button class="btn btn-lg btn-primary ms-5" @click="addUserButtonOnClick">
      Add User
    </button>
  </div>

  <div
    class="d-flex flex-column justify-content-center align-items-center mt-3 gap-3 p-3 bg-dark"
  >
    <h2 class="fw-bold fs-1">Users List</h2>
    <div class="overflow-auto users-table-content-div">
      <table class="w-100">
        <thead class="bg-dark text-white sticky-top">
          <tr>
            <th class="px-3 fs-3" id="id-th">ID</th>
            <th class="px-3 fs-3" id="names-th">Names</th>
            <th class="px-3 fs-3" id="surnames-th">Surnames</th>
            <th class="px-3 fs-3" id="birthdates-th">Birth Dates</th>
            <th class="px-3 fs-3" id="phonenumbers-th">Phone Numbers</th>
            <th class="px-3 fs-3" id="emails-th">Emails</th>
            <th class="px-3 fs-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td
              v-for="(value, colIndex) in row"
              :key="'cell-' + rowIndex + '-' + colIndex"
              class="px-3 py-3"
            >
              <label class="fs-5">{{ value }}</label>
            </td>
            <td>
              <button
                class="btn btn-md btn-secondary"
                @click="deleteRow(rowIndex)"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.users-table-content-div {
  height: 54vh;
}
</style>
