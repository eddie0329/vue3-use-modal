<template>
  <div>
    <h1>NORMAL</h1>
    <button @click="onClickSimpleModal">CLICK ME NORMAL MODAL</button>
  </div>
</template>

<script>
import SimpleModal from './components/SimpleModal.vue';

export default {
  name: 'Container',
  methods: {
    async onClickSimpleModal() {
      await this.$modal.addModal({ component: SimpleModal });
    }
  },
};
</script>

<style scoped>

</style>