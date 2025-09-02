/* TODO: *Mensajes de alerta cuando se pica 2 veces boton agregar usuario, estas seguro de agregar usuario y faltan campos por llenar *Modificar usuario, como en desarrollo de
software, convertir la fila en campos de texto con validaciones, al igual que
agregar usuario */

<script setup>
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";
import { CreateUser, GetAllUsers } from "../../wailsjs/go/services/UserService";

const findByTextInputPlaceholder = ref("Enter a name...");

//constants for handle the users table
const rows = ref([]);
const users = ref([]);
const usersSearchQuery = ref("");
const usersSearchField = ref("name");
const isAddingANewUser = ref(false);
const userToAdd = ref({
  name: "",
  surnames: "",
  birth_date: "",
  phone_number: "",
  email: "",
});

//Buttons onclick functions
function addUserButtonOnClick() {
  isAddingANewUser.value = true;
}

function saveTheUserButtonOnClick() {
  if (
    userToAdd.value.name &&
    userToAdd.value.surnames &&
    userToAdd.value.birth_date &&
    userToAdd.value.phone_number &&
    userToAdd.value.email
  ) {
    CreateUser(userToAdd.value);
    isAdding.value = false;
  } else {
  }
}

function cancelAddingUserButtonOnClick() {
  isAddingANewUser.value = false;
  userToAdd.value = {
    name: "",
    surnames: "",
    birth_date: "",
    phone_number: "",
    email: "",
  };
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

function updateFindByTextInputPlaceholder() {
  switch (usersSearchField.value) {
    case "name":
      findByTextInputPlaceholder.value = "Enter a name...";
      break;
    case "id":
      findByTextInputPlaceholder.value = "Enter an ID...";
      break;
  }
}

async function getUsersFromDatabaseAndLastUserID() {
  const data = await GetAllUsers();
  users.value = data;
  lastUserID = users.value[users.value.length - 1][0];

  if (!isNaN(lastUserID)) {
    lastUserID = parseInt(lastUserID, 10) + 1;
  }
}

//Vue.js functions
onMounted(async () => {
  try {
    getUsersFromDatabaseAndLastUserID();
    rows.value = users.value.map(mapUserToRow);
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
              class="px-3 py-2"
            >
              <label class="fs-5">{{ value }}</label>
            </td>
            <td>
              <button class="btn btn-md btn-secondary" @click="">Update</button>
            </td>
          </tr>
          <tr v-if="isAddingANewUser">
            <td class="px-2 py-2">
              <label>{{ lastUserID }}</label>
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.name"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the name..."
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.surnames"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the surnames..."
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.birth_date"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the birthdate..."
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.phone_number"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the phonenumber..."
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.email"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the email..."
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
