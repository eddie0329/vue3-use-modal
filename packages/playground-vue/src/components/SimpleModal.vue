<template>
  <modal-wrapper @clickOutside="$emit('close')">
    <div class="content">
      <h1>Hello Modal</h1>
    </div>
  </modal-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ModalWrapper } from 'use-modal';

export default defineComponent({
  components: { ModalWrapper },
});
</script>

<style scoped>

.content {
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
}
</style>