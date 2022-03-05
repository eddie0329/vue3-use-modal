import {createApp} from 'vue';
import ModalContainer from './components/ModalContainer.vue';
import ModalProxy from './ModalProxy';
import type {ModalExposed} from './types/modal-proxy';

export default {
  install() {
    const modalContainer = createApp(ModalContainer);
    ModalProxy.getInstance().setModalExposed(modalContainer.mount('#modal') as ModalExposed);
  }
}