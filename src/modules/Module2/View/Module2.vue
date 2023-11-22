<template>
  <q-page class="fixed-center">
    <h3>Módulo 2</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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