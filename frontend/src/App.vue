<template>
  <component :is="getView(currentView)" />
</template>

<script setup>
import { currentView } from './viewStore.js'
import MainMenu from './views/MainMenu.vue'
import UsersManager from './views/UsersManager.vue'
import SOAPApiTester from './views/SOAPApiTester.vue'
import RESTApiTester from './views/RESTApiTester.vue'
import BooksManager from './views/BooksManager.vue'
import ComprobantesDataSerializerAndStorager from './views/ComprobantesDataSerializerAndStorager.vue'

function getView(viewName) {
  if (viewName === 'MainMenu') return MainMenu
  if (viewName === 'UsersManager') return UsersManager
  if (viewName === 'SOAPApiTester') return SOAPApiTester
  if (viewName === 'RESTApiTester') return RESTApiTester
  if (viewName === 'BooksManager') return BooksManager
  if (viewName === 'ComprobantesDataSerializerAndStorager') return ComprobantesDataSerializerAndStorager
}
</script>
