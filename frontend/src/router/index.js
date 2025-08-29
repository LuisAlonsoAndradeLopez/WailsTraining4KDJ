import { createRouter, createWebHashHistory } from 'vue-router'
import ApiTester from '../views/ApiTester.vue'
import MainMenu from '../views/MainMenu.vue'
import UsersManager from '../views/UsersManager.vue'

const routes = [
  {
    path: '/api-tester',
    name: 'ApiTester',
    component: ApiTester
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
