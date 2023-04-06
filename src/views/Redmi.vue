<template>
  <div class="wrapper">
    <div class="card-container">
      <div v-for="product in xiaomiStore.xiaomiProducts">
        <RedmiCard :product="product" />
      </div>
    </div>
    <div class="footer">
      <Tail />
    </div>
  </div>
</template>

<script setup>
import { usexiaomiProducts } from '../stores/redmi'
import RedmiCard from '../components/RedmiCard.vue'
import Tail from '../components/Tail.vue'
const xiaomiStore = usexiaomiProducts()
</script>

<style scoped>
.wrapper {
  max-width: 100%;
}
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
