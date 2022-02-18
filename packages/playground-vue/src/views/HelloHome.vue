<template>
  <div class="home">
    <button @click="onClick">CLICK ME! BUTTON</button>
  </div>
</template>

<script setup lang="ts">
import { useModal } from 'use-modal';
import SimpleModal from '../components/SimpleModal.vue';

const modal = useModal();

const onClick = async () => {
  await modal.addModal({ key: 'SimpleModal', component: SimpleModal });
};
</script>
