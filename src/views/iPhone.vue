<template>
  <div class="wrapper">
    <div class="card-container">
      <div v-for="product in productStore.AppleProducts">
        <AppleCard :product="product" />
      </div>
    </div>
    <div class="footer">
      <Tail />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/myStore'
import AppleCard from '../components/AppleCard.vue'
import Tail from '../components/Tail.vue'
const productStore = useProductStore()
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
