<template>
  <div class="home">
    <button @click="onClick">CLICK ME! BUTTON</button>
  </div>
</template>

<script setup lang="ts">
import { useModal } from 'use-modal';
import { ref } from 'vue';
import SimpleModal from '../components/SimpleModal.vue';

const modal = useModal();

const myName = ref<string>('eddie');

const onClick = async () => {
  const name = await modal.addModal({ key: 'SimpleModal', component: SimpleModal, options: { myName } });
  alert(name);
};
</script>
