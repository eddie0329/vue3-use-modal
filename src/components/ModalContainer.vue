<template>
  <div>
    <component
      v-for="modal in modals"
      :key="modal.id"
      :is="modal.component"
      :options="modal.options"
      @resolve="(value) => onResolve(value, modal.id, modal.resolve)"
      @reject="(value) => onReject(value, modal.id, modal.reject)"
      @close="() => closeModal({ id: modal.id })"
    />
  </div>
</template>

<script setup lang="ts">
import {ref, markRaw} from 'vue';
import type {Modal, PromiseResolve, PromiseReject} from '../types/modal';
import type {AddModalProxyParams} from '../types/modal-proxy';

const id = ref<number>(0);
const modals = ref<Modal[]>([]);

const addModal = ({key, component, options}: AddModalProxyParams) => {
  return new Promise((resolve, reject) => {
    modals.value.push({
      key,
      id: id.value++,
      component: markRaw(component),
      options,
      resolve,
      reject,
    });
  });
};

const checkModalExistOnSameKey = (key: string): boolean =>
  Boolean(modals.value.find(({key: _key}) => key === _key));

const closeModal = ({id, key}: { id?: number; key?: string }) => {
  if (key) modals.value = modals.value.filter(({key: _key}) => key !== _key);
  else modals.value = modals.value.filter(({id: _id}) => id !== _id);
};

const onResolve = (value: any, id: number, resolve: PromiseResolve) => {
  resolve(value);
  closeModal({id});
};

const onReject = (reason: any, id: number, reject: PromiseReject) => {
  reject(reason);
  closeModal({id});
};

// eslint-disable-next-line no-undef
defineExpose({
  addModal,
  closeModal,
});
</script>
