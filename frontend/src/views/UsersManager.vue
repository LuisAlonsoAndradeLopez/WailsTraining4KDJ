<script setup>
import Swal from "sweetalert2";
import { onMounted, ref, watch } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";
import { CreateUser, GetAllUsers, UpdateUser } from "../../wailsjs/go/services/UserService";

const findByTextInputPlaceholder = ref("Enter a name...");

//constants for handle the users table
const filteredUsers = ref([]);
const users = ref([]);
const usersSearchQuery = ref("");
const usersSearchField = ref("name");
const isAddingANewUser = ref(false);
const isUpdatingAUser = ref(false);
const lastUserID = ref(0);
const userToAdd = ref({
  name: "",
  surnames: "",
  birth_date: "",
  phone_number: "",
  email: "",
});
const userToUpdate = ref({
  id: "",
  name: "",
  surnames: "",
  birth_date: "",
  phone_number: "",
  email: "",
});

//Buttons onclick functions
function addUserButtonOnClick() {
  if (!isAddingANewUser.value) {
    isAddingANewUser.value = true;
  } else {
    Swal.fire("Error", "The row for adding user is already shown.", "error");
  }
}

function cancelAddingUserButtonOnClick() {
  isAddingANewUser.value = false;
  clearAddUserRow();
}

function cancelUpdatingUserButtonOnClick() {
  isUpdatingAUser.value = false;
  clearUpdateUserRow();
}

async function saveTheUserButtonOnClick() {
  if (
    userToAdd.value.name &&
    userToAdd.value.surnames &&
    userToAdd.value.birth_date &&
    userToAdd.value.phone_number &&
    userToAdd.value.email
  ) {
    const birthDate = new Date(userToAdd.value.birth_date);
    const birthDateISO = birthDate.toISOString();

    await CreateUser({
      ...userToAdd.value,
      birth_date: birthDateISO,
    });

    isAddingANewUser.value = false;
    clearAddUserRow();
    await fillUsersTableAndValidations();

    Swal.fire("Success", "The user has been added successfully!", "success");
  } else {
    Swal.fire("Error", "There are missing fields.", "error");
  }
}

async function updateTheUserButtonOnClick() {
  if (
    userToUpdate.value.name &&
    userToUpdate.value.surnames &&
    userToUpdate.value.birth_date &&
    userToUpdate.value.phone_number &&
    userToUpdate.value.email
  ) {
    const birthDate = new Date(userToUpdate.value.birth_date);
    const birthDateISO = birthDate.toISOString();

    await UpdateUser({
      ...userToUpdate.value,
      birth_date: birthDateISO,
    });

    isUpdatingAUser.value = false;
    clearUpdateUserRow();
    await fillUsersTableAndValidations();

    Swal.fire("Success", "The user has been updated successfully!", "success");
  } else {
    Swal.fire("Error", "There are missing fields.", "error");
  }
}

function updateUserButtonOnClick(userData) {
  userToUpdate.value.id = parseInt(userData[0]);
  userToUpdate.value.name = userData[1];
  userToUpdate.value.surnames = userData[2];
  userToUpdate.value.birth_date = userData[3];
  userToUpdate.value.phone_number = userData[4];
  userToUpdate.value.email = userData[5];
  isUpdatingAUser.value = true;
}

//Auxiliary functions
function clearAddUserRow() {
  userToAdd.value = {
    name: "",
    surnames: "",
    birth_date: "",
    phone_number: "",
    email: "",
  };
}

function clearUpdateUserRow() {
  userToUpdate.value = {
    id: "",
    name: "",
    surnames: "",
    birth_date: "",
    phone_number: "",
    email: "",
  };
}

function filterUsers() {
  const query = usersSearchQuery.value.trim().toLowerCase();
  const field = usersSearchField.value;

  if (!query) {
    filteredUsers.value = users.value.map(mapUserToRow);
    return;
  }

  filteredUsers.value = users.value
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

async function fillUsersTableAndValidations() {
  const data = await GetAllUsers();
  users.value = data;

  if (users.value.length > 0) {
    const lastUser = users.value[users.value.length - 1];
    lastUserID.value = parseInt(lastUser.id, 10) + 1;
  } else {
    lastUserID.value = 1;
  }

  filteredUsers.value = users.value.map(mapUserToRow);
}

//Vue.js functions
onMounted(async () => {
  try {
    await fillUsersTableAndValidations();
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
          <tr v-for="(row, rowIndex) in filteredUsers" :key="rowIndex">
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
                @click="updateUserButtonOnClick(row)"
              >
                Update
              </button>
            </td>
          </tr>

          <tr v-if="isAddingANewUser">
            <td class="px-2 py-2">
              <label class="fs-5">{{ lastUserID }}</label>
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.name"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the name..."
                maxlength="30"
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.surnames"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the surnames..."
                maxlength="30"
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.birth_date"
                type="date"
                class="rounded p-1 w-100"
                placeholder="Enter the birthdate..."
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.phone_number"
                type="tel"
                class="rounded p-1 w-100"
                placeholder="Enter the phonenumber..."
                maxlength="15"
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToAdd.email"
                type="email"
                class="rounded p-1 w-100"
                placeholder="Enter the email..."
                maxlength="100"
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

          <tr v-if="isUpdatingAUser">
            <td class="px-2 py-2">
              <label class="fs-5">{{ userToUpdate.id }}</label>
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToUpdate.name"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the name..."
                maxlength="30"
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToUpdate.surnames"
                type="text"
                class="rounded p-1 w-100"
                placeholder="Enter the surnames..."
                maxlength="30"
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToUpdate.birth_date"
                type="date"
                class="rounded p-1 w-100"
                placeholder="Enter the birthdate..."
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToUpdate.phone_number"
                type="tel"
                class="rounded p-1 w-100"
                placeholder="Enter the phonenumber..."
                maxlength="15"
              />
            </td>
            <td class="px-2 py-2">
              <input
                v-model="userToUpdate.email"
                type="email"
                class="rounded p-1 w-100"
                placeholder="Enter the email..."
                maxlength="100"
              />
            </td>
            <td
              class="d-flex flex-column justify-content-center align-items-center px-2 py-2 gap-1"
            >
              <button
                @click="updateTheUserButtonOnClick"
                class="btn btn-success text-white px-2 py-1 rounded mr-2"
              >
                Update the User
              </button>
              <button
                @click="cancelUpdatingUserButtonOnClick"
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
