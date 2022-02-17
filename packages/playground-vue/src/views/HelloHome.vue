<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModal, ModalWrapper } from 'use-modal';

export default defineComponent({
  name: 'HelloHome',
});
</script>
