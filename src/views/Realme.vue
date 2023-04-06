<template>
  <div class="wrapper">
    <div class="card-container">
      <div v-for="product in productStore.realmeProducts">
        <RealmeCard :product="product" />
      </div>
    </div>
    <div class="footer">
      <Tail />
    </div>
  </div>
</template>

<script setup>
import { useRealmeStore } from '../stores/realme'
import RealmeCard from '../components/RealmeCard.vue'
import Tail from '../components/Tail.vue'
const productStore = useRealmeStore()
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
