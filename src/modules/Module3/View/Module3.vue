<template>
  <q-page class="fixed-center">
    <h3>Módulo 3</h3>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </p>
    <div>
      <div class="q-pa-md column items-center">
        <span class="text">Local Store</span>
        <div class="row items-center">
          <q-btn @click="localStore.decrement()" color="primary">-</q-btn>
          <span class="q-mx-md text">{{ localStore.value }}</span>
          <q-btn @click="localStore.increment()" color="primary">+</q-btn>
        </div>
      </div>
      <div class="q-pa-md column items-center">
        <span class="text">Global Store</span>
        <div class="row items-center">
          <q-btn @click="globalStore.decrement()" color="primary">-</q-btn>
          <span class="q-mx-md text">{{ globalStore.value }}</span>
          <q-btn @click="globalStore.increment()" color="primary">+</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useStateStore } from '../../../composables/useStateStore'

const { localStore, globalStore } = useStateStore();

</script>

<style scoped>
.text {
  font-size: 1.5rem;
}
</style>