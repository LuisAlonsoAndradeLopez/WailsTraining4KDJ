<script setup>
import { ref } from "vue";
import ViewNavigator from "../components/ViewNavigator.vue";

import { CreateBook, GetBooks, UpdateBook } from "../../wailsjs/go/services/BookService";

const findByTextInputPlaceholder = ref("Enter a id...");

const booksSearchQuery = ref("");
const booksSearchField = ref("id");

const isAddingANewBook = ref(false);
const isSelectedABook = ref(false);
const isUpdatingABook = ref(false);
const nothingAboutBooksCRUDSelected = ref(true);

const lastBookID = ref(0);

const bookToAdd = ref({
  id: "",
  title: "",
  author: "",
  published_at: "",
  pages: "",
});

const bookToUpdate = ref({
  id: "",
  title: "",
  author: "",
  published_at: "",
  pages: "",
});

const selectedBook = ref({
  id: "",
  title: "",
  author: "",
  published_at: "",
  pages: "",
});

//Buttons onclick functions
function addBookButton1OnClick() {
  nothingAboutBooksCRUDSelected.value = false;
  isAddingANewBook.value = true;
}

function cancelAddBookButtonOnClick() {
  isAddingANewBook.value = false;
  nothingAboutBooksCRUDSelected.value = true;
}

function addBookButton2OnClick() {
  isAddingANewBook.value = false;
  nothingAboutBooksCRUDSelected.value = true;
}

function selectABookButtonOnClick() {
  nothingAboutBooksCRUDSelected.value = false;
  isSelectedABook.value = true;
}

function cancelUpdateBookButton1OnClick() {
  isSelectedABook.value = false;
  nothingAboutBooksCRUDSelected.value = true;
}

function updateBookButton1OnClick() {
  isSelectedABook.value = false;
  isUpdatingABook.value = true;
}

function cancelUpdateBookButton2OnClick() {
  isUpdatingABook.value = false;
  isSelectedABook.value = true;
}

function updateBookButton2OnClick() {
  isUpdatingABook.value = false;
  isSelectedABook.value = true;
}
</script>

<template>
  <ViewNavigator />
  <div class="d-flex flex-column m-3 gap-3">
    <h2 class="fw-bold fs-1">Books List</h2>
    <div
      class="d-flex justify-content-center align-items-center p-3 gap-3 bg-dark books-search-div"
    >
      <h3 class="mt-1">Find by:</h3>
      <input
        type="text"
        v-model="booksSearchQuery"
        class="form-control form-control-md w-50"
        id="find-by-text-input"
        :placeholder="findByTextInputPlaceholder"
      />
      <select
        v-model="booksSearchField"
        @change="updateFindByTextInputPlaceholder"
        class="form-select w-25"
        id="find-by-select"
      >
        <option value="title">Title</option>
        <option value="id">ID</option>
      </select>
      <button
        class="btn btn-lg btn-primary ms-4"
        @click="addBookButton1OnClick"
      >
        Add Book
      </button>
    </div>

    <div class="d-flex justify-content-center align-items-center gap-3">
      <div class="d-flex flex-column p-2 w-50 gap-2 bg-dark books-crud-divs">
        <button class="w-100" @click="selectABookButtonOnClick()">
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">ID:</h3>
            <label class="fs-2">{{ selectedBook.id }}</label>
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Title:</h3>
            <label class="fs-2">{{ selectedBook.title }}</label>
          </div>
        </button>
      </div>

      <div class="w-50 bg-dark books-crud-divs">
        <div
          v-if="nothingAboutBooksCRUDSelected"
          class="d-flex justify-content-center align-items-center select-an-option-div"
        >
          <h1 class="select-an-option-h1">Select an Option</h1>
        </div>

        <div v-if="isAddingANewBook" class="d-flex flex-column p-3">
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">ID:</h3>
            <input v-model="bookToAdd.id" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Title:</h3>
            <input v-model="bookToAdd.title" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Author:</h3>
            <input v-model="bookToAdd.author" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2 text-nowrap">Published at:</h3>
            <input v-model="bookToAdd.published_at" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Pages:</h3>
            <input v-model="bookToAdd.pages" class="fs-4 w-100" />
          </div>
          <div
            class="d-flex justify-content-center align-items-center mt-3 gap-5"
          >
            <button
              class="btn btn-lg btn-secondary ms-4"
              @click="cancelAddBookButtonOnClick"
            >
              Cancel
            </button>
            <button
              class="btn btn-lg btn-primary ms-4"
              @click="addBookButton2OnClick"
            >
              Add
            </button>
          </div>
        </div>

        <div v-if="isSelectedABook" class="d-flex flex-column p-3">
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">ID:</h3>
            <label class="fs-2">{{ selectedBook.id }}</label>
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Title:</h3>
            <label class="fs-2">{{ selectedBook.title }}</label>
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Author:</h3>
            <label class="fs-2">{{ selectedBook.author }}</label>
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2 text-nowrap">Published at:</h3>
            <label class="fs-2">{{ selectedBook.published_at }}</label>
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Pages:</h3>
            <label class="fs-2">{{ selectedBook.pages }}</label>
          </div>
          <div
            class="d-flex justify-content-center align-items-center mt-3 gap-5"
          >
            <button
              class="btn btn-lg btn-secondary ms-4"
              @click="cancelUpdateBookButton1OnClick"
            >
              Cancel
            </button>
            <button
              class="btn btn-lg btn-primary ms-4"
              @click="updateBookButton1OnClick"
            >
              Update
            </button>
          </div>
        </div>

        <div v-if="isUpdatingABook" class="d-flex flex-column p-3">
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">ID:</h3>
            <input v-model="bookToUpdate.id" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Title:</h3>
            <input v-model="bookToUpdate.title" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Author:</h3>
            <input v-model="bookToUpdate.author" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2 text-nowrap">Published at:</h3>
            <input v-model="bookToUpdate.published_at" class="fs-4 w-100" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <h3 class="mt-2 fw-bold fs-2">Pages:</h3>
            <input v-model="bookToUpdate.pages" class="fs-4 w-100" />
          </div>
          <div
            class="d-flex justify-content-center align-items-center mt-3 gap-5"
          >
            <button
              class="btn btn-lg btn-secondary ms-4"
              @click="cancelUpdateBookButton2OnClick"
            >
              Cancel
            </button>
            <button
              class="btn btn-lg btn-primary ms-4"
              @click="updateBookButton2OnClick"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.books-crud-divs {
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 58vh;
}

.books-search-div {
  margin-top: -10px;
}

.select-an-option-div {
  height: 58vh;
}

.select-an-option-h1 {
  font-size: 100px;
}
</style>
