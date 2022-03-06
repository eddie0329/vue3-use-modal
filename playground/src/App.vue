<template>
  <div class="home">
    <Container1 />
    <Container2 />
    <div class="block"></div>
  </div>
</template>

<script setup lang="ts">
import Container1 from './Container1.vue';
import Container2 from './Container2.vue';
</script>

<style scoped>
.block {
  background: yellow;
  height: 100vh;
}
</style>
