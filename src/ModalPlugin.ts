import {createApp} from 'vue';
import ModalContainer from './components/ModalContainer.vue';
import ModalProxy from './ModalProxy';
import type {ModalExposed} from './types/modal-proxy';

export default {
  install(app) {
    const modalContainer = createApp(ModalContainer);
    const modalProxy = ModalProxy.getInstance();
    modalProxy.setModalExposed(modalContainer.mount('#modal') as ModalExposed);
    app.config.globalProperties.$modal = modalProxy;
    modalContainer.config.globalProperties = { ...modalContainer.config.globalProperties, ...app.config.globalProperties};
  }
}