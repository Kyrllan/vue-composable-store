import { reactive } from "vue";

const globalStore = reactive({
  value: 0,
  increment: () => {
    globalStore.value++
  },
  decrement: () => {
    globalStore.value--
  }
});


export const useStateStore = () => {

  const localStore = reactive({
    value: 0,
    increment: () => {
      localStore.value++
    },
    decrement: () => {
      localStore.value--
    }
  });

  return { globalStore, localStore };
};
