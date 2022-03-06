import {Component, ComponentPublicInstance} from 'vue';
import ModalProxy from '../ModalProxy';

export interface AddModalProxyParams {
  key: string;
  component: Component;
  config?: any;
  props?: unknown;
}

export interface CloseModalProxyParams {
  key?: string;
  id?: number;
}

export interface ModalExposed extends ComponentPublicInstance {
  addModal<T>(params: AddModalProxyParams): Promise<T> | undefined;

  closeModal({key}: { key: string }): void;
}

export interface IModalProxy {
  modalProxy?: ModalProxy;
  modalExposed?: ModalExposed;

  setModalExposed(exposed: ComponentPublicInstance): this;

  addModal: ModalExposed['addModal'];
  closeModal(key: string): void;
}
