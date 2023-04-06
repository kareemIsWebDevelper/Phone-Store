<template>
  <div v-if="product" class="container">
    <div class="card mt-3 mb-3">
      <img class="card-image" :src="product.image" alt="image" />
      <div class="card-body bg-light text-center">
        <h3>{{ product.name }}</h3>
        <h4>{{ product.price }}$</h4>
        <button
          @click="productStore.addToCard"
          class="btn bg-black text-white"
          style="width: max-content"
        >
          Add To Card
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/myStore'

const props = defineProps({ product: Object })

const productStore = useProductStore()
</script>

<style lang="scss" scoped></style>
