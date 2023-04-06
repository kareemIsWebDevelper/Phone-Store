<template>
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid text-dark">
      <h4 class="brand rounded">
        <RouterLink class="text-white text-decoration-none" to="/">Brand</RouterLink>
      </h4>
      <div class="nav">
        <div class="myBag">
          <span>{{ productStore.count }}</span>
          <i id="bag" class="bi bi-bag rounded-circle"></i>
        </div>
        <button class="btn bg-white border">
          <RouterLink class="text-black text-decoration-none" to="/store">Shop All</RouterLink>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useProductStore } from '../stores/myStore'

const productStore = useProductStore()
</script>

<style scoped>
.container-fluid {
  padding-left: 20px;
  padding-right: 20px;
}

nav {
  height: 70px;
  width: 100%;
}
.brand {
  font-weight: bold;
  color: white;
  background-color: black;
  padding: 5px;
}
#bag {
  font-size: 1.5rem;
  margin-right: 20px;
  margin-top: 5px;
  color: black;
  padding: 5px;
}
</style>
