import {createApp} from 'vue';
import ModalContainer from './components/ModalContainer.vue';
import ModalProxy from './ModalProxy';
import {err} from './utils';
import type {ModalExposed} from './types/modal-proxy';

const createModalEl = (): HTMLElement | never => {
  if (!document) err('No document.');
  const modalEl = document.createElement('div');
  modalEl.setAttribute('id', 'modal');
  document.body.prepend(modalEl);
  return modalEl;
};

export default {
  install(app) {
    const modalEl = createModalEl();
    const modalContainer = createApp(ModalContainer);
    const modalProxy = ModalProxy.getInstance();
    modalProxy.setModalExposed(modalContainer.mount(modalEl) as ModalExposed);
    app.config.globalProperties.$modal = modalProxy;
    modalContainer.config.globalProperties = { ...modalContainer.config.globalProperties, ...app.config.globalProperties};
  }
}