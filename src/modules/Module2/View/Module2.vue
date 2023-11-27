<template>
  <q-page class="fixed-center">
    <h3>Módulo 2</h3>
    <p>
      Lorem Ipsum is simply dummy.
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