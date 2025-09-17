<script setup>
import Swal from "sweetalert2";
import { onMounted, ref, watch } from "vue";
import ViewNavigator from "../components/ViewNavigator.vue";

import {
  CreateBook,
  GetBooks,
  UpdateBook,
} from "../../wailsjs/go/services/BookService";

const findByTextInputPlaceholder = ref("Enter a title...");

const allBooks = ref([]);
const filteredBooks = ref([]);
const booksSearchQuery = ref("");
const booksSearchField = ref("title");
const isAddingANewBook = ref(false);
const isSelectedABook = ref(false);
const isUpdatingABook = ref(false);
const nothingAboutBooksCRUDSelected = ref(true);
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
  isSelectedABook.value = false;
  isUpdatingABook.value = false;
  isAddingANewBook.value = true;
}

function cancelAddBookButtonOnClick() {
  isAddingANewBook.value = false;
  nothingAboutBooksCRUDSelected.value = true;
}

async function addBookButton2OnClick() {
  if (
    bookToAdd.value.title &&
    bookToAdd.value.author &&
    bookToAdd.value.published_at &&
    bookToAdd.value.pages > 0
  ) {
    const publishedAt = new Date(bookToAdd.value.published_at);
    const publishedAtISO = publishedAt.toISOString();

    await CreateBook({
      title: bookToAdd.value.title,
      author: bookToAdd.value.author,
      published_at: publishedAtISO,
      pages: bookToAdd.value.pages,
    });

    isAddingANewBook.value = false;
    nothingAboutBooksCRUDSelected.value = true;
    booksSearchQuery.value = "";
    clearAddBookRow();
    await fillBooksTableAndValidations();

    Swal.fire("Success", "The book has been added successfully!", "success");
  } else {
    Swal.fire("Error", "There are missing fields.", "error");
  }

  isAddingANewBook.value = false;
  nothingAboutBooksCRUDSelected.value = true;
  clearAddBookRow();
}

function selectABookButtonOnClick(registerNumber) {
  fillSelectedBook(filteredBooks.value[registerNumber]);
  nothingAboutBooksCRUDSelected.value = false;
  isAddingANewBook.value = false;
  isSelectedABook.value = true;
}

function cancelUpdateBookButton1OnClick() {
  isSelectedABook.value = false;
  nothingAboutBooksCRUDSelected.value = true;
  clearSelectedBookRow();
}

function updateBookButton1OnClick() {
  fillBookToUpdate(selectedBook.value);
  isSelectedABook.value = false;
  isUpdatingABook.value = true;
}

function cancelUpdateBookButton2OnClick() {
  isUpdatingABook.value = false;
  isSelectedABook.value = true;
  clearUpdateBookRow();
}

async function updateBookButton2OnClick() {
  if (
    bookToUpdate.value.title &&
    bookToUpdate.value.author &&
    bookToUpdate.value.published_at &&
    bookToUpdate.value.pages > 0
  ) {
    const publishedAt = new Date(bookToUpdate.value.published_at);
    const publishedAtISO = publishedAt.toISOString();

    await UpdateBook(bookToUpdate.value.id, {
      title: bookToUpdate.value.title,
      author: bookToUpdate.value.author,
      published_at: publishedAtISO,
      pages: bookToUpdate.value.pages,
    });

    isUpdatingABook.value = false;
    nothingAboutBooksCRUDSelected.value = true;
    booksSearchQuery.value = "";
    clearSelectedBookRow();
    clearUpdateBookRow();
    await fillBooksTableAndValidations();

    Swal.fire("Success", "The book has been updated successfully!", "success");
  } else {
    Swal.fire("Error", "There are missing fields.", "error");
  }
}

//Auxiliary functions
function clearAddBookRow() {
  bookToAdd.value = {
    id: "",
    title: "",
    author: "",
    published_at: "",
    pages: "",
  };
}

function clearSelectedBookRow() {
  selectedBook.value = {
    id: "",
    title: "",
    author: "",
    published_at: "",
    pages: "",
  };
}

function clearUpdateBookRow() {
  bookToUpdate.value = {
    id: "",
    title: "",
    author: "",
    published_at: "",
    pages: "",
  };
}

function fillBookToUpdate(book) {
  bookToUpdate.value = {
    id: book.id,
    title: book.title,
    author: book.author,
    published_at: book.published_at.split("T")[0],
    pages: book.pages,
  };
}

function fillSelectedBook(book) {
  selectedBook.value = {
    id: book.id,
    title: book.title,
    author: book.author,
    published_at: book.published_at.split("T")[0],
    pages: book.pages,
  };
}

function filterBooks() {
  const query = booksSearchQuery.value.trim().toLowerCase();
  const field = booksSearchField.value;

  if (!query) {
    filteredBooks.value = allBooks.value;
    return;
  }

  filteredBooks.value = allBooks.value.filter((book) => {
    const fieldValue = book[field]?.toString().toLowerCase() || "";
    return fieldValue.startsWith(query);
  });
}

function updateFindByTextInputPlaceholder() {
  switch (booksSearchField.value) {
    case "title":
      findByTextInputPlaceholder.value = "Enter a title...";
      break;
    case "author":
      findByTextInputPlaceholder.value = "Enter an author...";
      break;
  }
}

async function fillBooksTableAndValidations() {
  const data = await GetBooks();
  allBooks.value = data;
  filteredBooks.value = allBooks.value;
}

//Vue.js functions
onMounted(async () => {
  try {
    await fillBooksTableAndValidations();
  } catch (err) {
    console.error("Failed to load books:", err);
  }
});

watch([booksSearchQuery, booksSearchField], () => {
  filterBooks();
});
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
        <option value="author">Author</option>
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
        <button
          v-for="(book, rowIndex) in filteredBooks"
          :key="rowIndex"
          class="btn btn-dark w-100 rounded border"
          @click="selectABookButtonOnClick(rowIndex)"
        >
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Title:</h3>
            <label class="fs-2 text-start lh-1">{{ book.title }}</label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Author:</h3>
            <label class="fs-2 text-start lh-1">{{ book.author }}</label>
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

        <div v-if="isAddingANewBook" class="d-flex flex-column p-3 gap-2">
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-1 text-start lh-1">Title:</h3>
            <input
              v-model="bookToAdd.title"
              class="fs-3 w-100 text-start lh-1"
              maxlength="50"
            />
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-1 text-start lh-1">Author:</h3>
            <input
              v-model="bookToAdd.author"
              class="fs-3 w-100 text-start lh-1"
              maxlength="50"
            />
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-1 text-nowrap text-start lh-1">Published at:</h3>
            <input
              v-model="bookToAdd.published_at"
              class="fs-3 w-100 text-start lh-1"
              type="date"
            />
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-1 text-start lh-1">Pages:</h3>
            <input
              v-model="bookToAdd.pages"
              class="fs-3 w-100 text-start lh-1"
              type="number"
              min="1"
              max="10000"
              maxlength="5"
            />
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

        <div v-if="isSelectedABook" class="d-flex flex-column p-3 gap-1">
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">ID:</h3>
            <label class="fs-2 text-start lh-1">{{ selectedBook.id }}</label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Title:</h3>
            <label class="fs-2 text-start lh-1">{{ selectedBook.title }}</label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Author:</h3>
            <label class="fs-2 text-start lh-1">{{ selectedBook.author }}</label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1 text-nowrap">Published at:</h3>
            <label class="fs-2 text-start lh-1">{{ selectedBook.published_at }}</label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Pages:</h3>
            <label class="fs-2 text-start lh-1">{{ selectedBook.pages }}</label>
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

        <div v-if="isUpdatingABook" class="d-flex flex-column p-3 gap-1">
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">ID:</h3>
            <label class="fs-2 text-start lh-1">{{ bookToUpdate.id }}</label>
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Title:</h3>
            <input
              v-model="bookToUpdate.title"
              class="fs-4 w-100 text-start lh-1"
              maxlength="50"
            />
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Author:</h3>
            <input
              v-model="bookToUpdate.author"
              class="fs-4 w-100 text-start lh-1"
              maxlength="50"
            />
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-nowrap text-start lh-1">Published at:</h3>
            <input
              v-model="bookToUpdate.published_at"
              class="fs-4 w-100 text-start lh-1"
              type="date"
            />
          </div>
          <div class="d-flex align-items-center gap-2">
            <h3 class="mt-2 fw-bold fs-2 text-start lh-1">Pages:</h3>
            <input
              v-model="bookToUpdate.pages"
              class="fs-4 w-100 text-start lh-1"
              type="number"
              min="1"
              max="10000"
              maxlength="5"
            />
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
