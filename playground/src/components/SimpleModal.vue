<template>
  <modal-wrapper @clickOutside="$emit('close')">
    <div class="content">
      <h1>Hello Modal</h1>
      <div>MyName:{{ myName }}</div>
      <button @click="$emit('resolve', 'sam')">Confirm</button>
      <button @click="$emit('reject')">Cancel</button>
      <button @click="$emit('close')">Close</button>
      <button @click="onClickCloseModal">Close Modal</button>
    </div>
  </modal-wrapper>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ModalWrapper from './ModalWrapper.vue';

export default defineComponent({
  props: {
    myName: {
      name: String,
      default: '',
    },
  },
  components: {ModalWrapper},
  methods: {
    onClickCloseModal() {
      this.$modal.closeModal({key: 'SimpleModal'});
    }
  },
});
</script>

<style scoped>

.content {
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
}
</style>