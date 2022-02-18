<template>
  <div class="modal">
    <div class="modal-bg" @click="$emit('clickOutside')" />
    <article class="modal-content">
      <slot />
    </article>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ModalWrapper'
}
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.modal-content {
  z-index: 1;
}
</style>