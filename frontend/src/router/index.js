import { createRouter, createWebHashHistory } from 'vue-router'
import SOAPApiTester from '../views/SOAPApiTester.vue'
import MainMenu from '../views/MainMenu.vue'
import UsersManager from '../views/UsersManager.vue'

const routes = [
  {
    path: '/soap-api-tester',
    name: 'SOAPApiTester',
    component: SOAPApiTester
  },
  {
    path: '/',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/users-manager',
    name: 'UsersManager',
    component: UsersManager
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
