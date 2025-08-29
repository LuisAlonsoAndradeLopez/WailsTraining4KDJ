import { ref } from 'vue'

export const currentView = ref('MainMenu')
export function changeView(viewName) {
  currentView.value = viewName
}
