<script setup>
import { RouterView } from 'vue-router'
import Head from './components/Head.vue'
import Tail from './components/Tail.vue'
</script>

<template>
  <header>
    <Head />
  </header>

  <RouterView />
</template>
