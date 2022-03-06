<template>
  <div>
    <h1>SETUP</h1>
    <button @click="onClickSimpleModal">CLICK ME NORMAL MODAL</button>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useModal } from "../../src";
import SimpleModal from './components/SimpleModal.vue';
import ScrollModal from './components/ScrollModal.vue';
const modal = useModal();

const myName = ref<string>("eddie");

const onClickSimpleModal = async () => {
  const name = await modal.addModal<string>({
    key: "SimpleModal",
    component: SimpleModal,
    props: { myName },
  });
  alert(name);
};

const onClickScrollModal = async () => {
  await modal.addModal({ key: "ScrollModal", component: ScrollModal });
};
</script>
