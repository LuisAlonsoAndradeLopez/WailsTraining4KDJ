/* TODO: *Verificar si las salidas de los metodos http son buenas buenas */
<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import ViewNavigator from "../components/ViewNavigator.vue";
import {
  CreatePost,
  DeletePost,
  GetPost,
  PatchPost,
  PutPost,
} from "../../wailsjs/go/services/RestService";

const numberToHTTPGet = ref();
const numberToHTTPPost = ref();
const numberToHTTPPut = ref();
const numberToHTTPPatch = ref();
const numberToHTTPDelete = ref();

const httpGetResult = ref();
const httpPostResult = ref();
const httpPutResult = ref();
const httpPatchResult = ref();
const httpDeleteResult = ref();

async function getButtonOnClick() {
  if (numberToHTTPGet.value >= 1 && numberToHTTPGet.value <= 200) {
    httpGetResult.value = await GetPost(parseInt(numberToHTTPGet));
  } else {
    Swal.fire("Error", "The number should be between 1 and 200.", "error");
  }
}

async function postButtonOnClick() {
  if (numberToHTTPPost.value >= 1 && numberToHTTPPost.value <= 200) {
    httpPostResult.value = await CreatePost(parseInt(numberToHTTPPost));
  } else {
    Swal.fire("Error", "The number should be between 1 and 200.", "error");
  }
}

async function putButtonOnClick() {
  if (numberToHTTPPut.value >= 1 && numberToHTTPPut.value <= 200) {
    httpPutResult.value = await PutPost(parseInt(numberToHTTPPut));
  } else {
    Swal.fire("Error", "The number should be between 1 and 200.", "error");
  }
}

async function patchButtonOnClick() {
  if (numberToHTTPPatch.value >= 1 && numberToHTTPPatch.value <= 200) {
    httpPatchResult.value = await PatchPost(parseInt(numberToHTTPPatch));
  } else {
    Swal.fire("Error", "The number should be between 1 and 200.", "error");
  }
}

async function deleteButtonOnClick() {
  if (numberToHTTPDelete.value >= 1 && numberToHTTPDelete.value <= 200) {
    httpDeleteResult.value = await DeletePost(parseInt(numberToHTTPDelete));
  } else {
    Swal.fire("Error", "The number should be between 1 and 200.", "error");
  }
}
</script>

<template>
  <ViewNavigator />
  <div
    class="container d-flex flex-column align-items-center mt-5 p-3 gap-2 bg-dark"
  >
    <h1 class="fw-bold fs-1">REST Api Tester</h1>
    <div class="d-flex w-100 p-3 gap-3 bg-black http-methods-content-div">
      <div class="p-3 gap-1 rounded bg-dark panel">
        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3 mb-3"
        >
          <button
            class="btn btn-lg text-dark get-button"
            @click="getButtonOnClick"
          >
            Get
          </button>
          <input
            v-model="numberToHTTPGet"
            class="rounded p-1 w-100 form-control-lg"
            type="number"
            placeholder="Enter a number between 1 and 200"
            maxlength="3"
          />
        </div>
        <textarea
          class="fs-3 p-3 w-100 h-100 bg-black text-white"
          readonly
          disabled
          >{{ httpGetResult }}</textarea
        >
      </div>

      <div class="p-3 gap-1 rounded bg-dark panel">
        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3 mb-3"
        >
          <button
            class="btn btn-lg text-dark post-button"
            @click="postButtonOnClick"
          >
            Post
          </button>
          <input
            v-model="numberToHTTPPost"
            class="rounded p-1 w-100 form-control-lg"
            type="number"
            placeholder="Enter a number between 1 and 200"
            maxlength="3"
          />
        </div>
        <textarea
          class="fs-3 p-3 w-100 h-100 bg-black text-white"
          readonly
          disabled
          >{{ httpPostResult }}</textarea
        >
      </div>

      <div class="p-3 gap-1 rounded bg-dark panel">
        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3 mb-3"
        >
          <button
            class="btn btn-lg text-dark put-button"
            @click="putButtonOnClick"
          >
            Put
          </button>
          <input
            v-model="numberToHTTPPut"
            class="rounded p-1 w-100 form-control-lg"
            type="number"
            placeholder="Enter a number between 1 and 200"
            maxlength="3"
          />
        </div>
        <textarea
          class="fs-3 p-3 w-100 h-100 bg-black text-white"
          readonly
          disabled
          >{{ httpPutResult }}</textarea
        >
      </div>

      <div class="p-3 gap-1 rounded bg-dark panel">
        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3 mb-3"
        >
          <button
            class="btn btn-lg text-dark patch-button"
            @click="patchButtonOnClick"
          >
            Patch
          </button>
          <input
            v-model="numberToHTTPPatch"
            class="rounded p-1 w-100 form-control-lg"
            type="number"
            placeholder="Enter a number between 1 and 200"
            maxlength="3"
          />
        </div>
        <textarea
          class="fs-3 p-3 w-100 h-100 bg-black text-white"
          readonly
          disabled
          >{{ httpPatchResult }}</textarea
        >
      </div>

      <div class="p-3 gap-1 rounded bg-dark panel">
        <div
          class="d-flex justify-content-center align-items-center w-100 gap-3 mb-3"
        >
          <button
            class="btn btn-lg text-dark delete-button"
            @click="deleteButtonOnClick"
          >
            Delete
          </button>
          <input
            v-model="numberToHTTPDelete"
            class="rounded p-1 w-100 form-control-lg"
            type="number"
            placeholder="Enter a number between 1 and 200"
            maxlength="3"
          />
        </div>
        <textarea
          class="fs-3 p-3 w-100 h-100 bg-black text-white"
          readonly
          disabled
          >{{ httpDeleteResult }}</textarea
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.http-methods-content-div {
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  height: 57vh;
}

.panel {
  flex: 0 0 530px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.get-button {
  background-color: #61affe;
}

.post-button {
  background-color: #49cc90;
}

.put-button {
  background-color: #fca130;
}

.patch-button {
  background-color: #72e7e1;
}

.delete-button {
  background-color: #f93e3e;
}
</style>
