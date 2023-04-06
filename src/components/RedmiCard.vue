<template>
  <div class="container">
    <div class="card mt-3 mb-3">
      <img class="card-image" :src="product.image" alt="image" />
      <div class="card-body text-center bg-light">
        <h3>{{ product.name }}</h3>
        <button class="route">
          <RouterLink class="text-white text-decoration-none" :to="`details/${product.id}`">
            View Details
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ product: Object })
</script>
