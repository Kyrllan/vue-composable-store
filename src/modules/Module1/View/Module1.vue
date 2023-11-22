<template>
  <q-page class="fixed-center">
    <h3>Módulo 1</h3>
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
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