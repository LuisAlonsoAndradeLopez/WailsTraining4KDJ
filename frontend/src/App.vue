<template>
  <component :is="getView(currentView)" />
</template>

<script setup>
import { currentView } from './viewStore.js'
import MainMenu from './views/MainMenu.vue'
import UsersManager from './views/UsersManager.vue'
import ApiTester from './views/ApiTester.vue'

function getView(viewName) {
  if (viewName === 'MainMenu') return MainMenu
  if (viewName === 'UsersManager') return UsersManager
  if (viewName === 'ApiTester') return ApiTester
}
</script>
