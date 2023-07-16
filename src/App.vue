<script setup>
import Home from './views/Home.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <the-header />
  <RouterView/>
  <the-footer />
</template>

<style scoped>

</style>
