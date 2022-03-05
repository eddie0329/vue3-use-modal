import {Component, ComponentPublicInstance} from 'vue';
import ModalProxy from '../ModalProxy';

export interface AddModalProxyParams {
  key: string;
  component: Component;
  config?: any;
  props?: any;
}

export interface ModalExposed extends ComponentPublicInstance {
  addModal<T>(params: AddModalProxyParams): Promise<T> | undefined;
  closeModal({ key, id }: {key?: string, id?: number}): void
}

export interface IModalProxy {
  modalProxy?: ModalProxy;
  modalExposed?: ModalExposed;

  setModalExposed(exposed: ComponentPublicInstance): this;

  addModal: ModalExposed['addModal'];
  closeModal: ModalExposed['closeModal'];
}
