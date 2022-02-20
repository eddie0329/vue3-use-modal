<template>
  <div class="home">
    <div>
      <button @click="onClickSimpleModal">CLICK ME NORMAL MODAL</button>
    </div>
    <div>
      <button @click="onClickScrollModal">CLICK ME SCROLL MODAL</button>
    </div>
    <div class="block"></div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "../../src";
import { ref } from "vue";
import SimpleModal from "./components/SimpleModal.vue";
import ScrollModal from "./components/ScrollModal.vue";

const modal = useModal();

const myName = ref<string>("eddie");

const onClickSimpleModal = async () => {
  const name = await modal.addModal({
    key: "SimpleModal",
    component: SimpleModal,
    options: { myName },
  });
  alert(name);
};

const onClickScrollModal = async () => {
  await modal.addModal({ key: "ScrollModal", component: ScrollModal });
};
</script>

<style scoped>
.block {
  background: yellow;
  height: 100vh;
}
</style>
