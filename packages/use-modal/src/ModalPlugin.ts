import { createApp } from 'vue';
import { ModalExposed } from './types/modal-proxy';
import ModalContainer from './components/ModalContainer.vue';
import ModalProxy from './ModalProxy';

export default {
  install() {
    const modalContainer = createApp(ModalContainer);
    ModalProxy.getInstance().setModalExposed(modalContainer.mount('#modal') as ModalExposed);
  }
}