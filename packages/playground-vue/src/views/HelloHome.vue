<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <modal-wrapper>
    </modal-wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ModalWrapper } from "use-modal";

export default defineComponent({
  name: "HelloHome",
  components: {
    ModalWrapper,
  },
});
</script>
