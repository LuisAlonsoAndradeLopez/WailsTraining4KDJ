import { createRouter, createWebHashHistory } from 'vue-router'
import MainMenu from '../views/MainMenu.vue'
import BooksManager from '../views/BooksManager.vue'
import XMLDataSerializerAndStorager from '../views/XMLDataSerializerAndStorager.vue'
import RESTApiTester from '../views/RESTApiTester.vue'
import SOAPApiTester from '../views/SOAPApiTester.vue'
import UsersManager from '../views/UsersManager.vue'

const routes = [
  {
    path: '/',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/books-manager',
    name: 'BooksManager',
    component: BooksManager
  },
  {
    path: '/files-downloader',
    name: 'XMLDataSerializerAndStorager',
    component: XMLDataSerializerAndStorager
  },
  {
    path: '/rest-api-tester',
    name: 'RESTApiTester',
    component: RESTApiTester
  },
  {
    path: '/soap-api-tester',
    name: 'SOAPApiTester',
    component: SOAPApiTester
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
