<template>
  <modal-wrapper @clickOutside="$emit('close')">
    <div class="content">
      <h1>Hello scroll Modal</h1>
      <div class="block"></div>
    </div>
  </modal-wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ModalWrapper } from "../../../src";

export default defineComponent({
  components: { ModalWrapper },
});
</script>

<style scoped>
.content {
  background-color: white;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  overflow: auto;
}

.block {
  width: 400px;
  height: 400px;
  background-color: yellow;
}
</style>
