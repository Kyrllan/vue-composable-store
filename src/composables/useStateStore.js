import {reactive} from 'vue'

const globalStore = reactive({
  value: 0,
  increment: () => {
    localStore.value++
  }
})

const useStateStore = () => {
  const localStore = reactive({
    value: 0,
    increment: () => {
      localStore.value++
    }
  })

  return {
    globalStore,
    localStore
  }

}