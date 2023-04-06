<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer" style="display: grid; gap:30px;">
    <h1 class="display-1 card-title" style="font-size: 50px; font-weight: bold">
      Brand
    </h1>    
      <RouterLink class="route text-center text-white" to="/store">Shop All</RouterLink>
    <div class="row" style="margin: auto;">
      <div class="col">
        <RouterLink class="route" to="/iPhone">iPhone</RouterLink>
        <RouterLink class="route" to="/redmi">Redmi</RouterLink>
      </div>
      <div class="col">
        <RouterLink class="route" to="/realme">Realme</RouterLink>
        <RouterLink class="route" to="/realme">Samsung</RouterLink>
      </div>
    </div>
    <p class="text-center">(C) Copyright Reserved 2023.</p>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
}

@media screen and (max-width: 700px) {
  .footer {
    display: grid;
    place-items: center;
    height: min-content;
  }
}
</style>
