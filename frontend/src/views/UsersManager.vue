<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

import ViewNavigator from "../components/ViewNavigator.vue";
import { GetAllUsers } from "../../wailsjs/go/services/UserService";

const rows = ref([]);
const users = ref([]);

// Add a new row with 6 empty values
function addUserButtonOnClick() {
  rows.value.push(["", "", "", "", "", ""]);
}

// Delete a row by index
function deleteRow(index) {
  rows.value.splice(index, 1);
}

onMounted(async () => {
  try {
    const data = await GetAllUsers();
    users.value = data;
    rows.value = data.map((user) => [
      user.id?.toString() || "",
      user.name || "",
      user.surnames || "",
      user.birth_date
        ? new Date(user.birth_date).toISOString().split("T")[0]
        : "",
      user.phone_number || "",
      user.email || "",
    ]);
  } catch (err) {
    console.error("Failed to load users:", err);
  }
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
      class="form-control form-control-md w-50"
      id="find-by-text-input"
      placeholder="Name"
    />
    <select class="form-select w-25" id="find-by-select">
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
    <table>
      <thead>
        <tr>
          <th class="px-3 fs-3" id="id-th">ID</th>
          <th class="px-3 fs-3" id="names-th">Names</th>
          <th class="px-3 fs-3" id="surnames-th">Surnames</th>
          <th class="px-3 fs-3" id="birthdates-th">Birth Dates</th>
          <th class="px-3 fs-3" id="phonenumbers-th">Phone Numbers</th>
          <th class="px-3 fs-3" id="emails-th">Emails</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td
            v-for="(value, colIndex) in row"
            :key="'cell-' + rowIndex + '-' + colIndex"
            class="px-4 py-3"
          >
            <label class="fs-5">{{ rows[rowIndex][colIndex] }}</label>
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
</template>

<style></style>
