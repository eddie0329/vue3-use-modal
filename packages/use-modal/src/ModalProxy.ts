import { Component } from "vue";
import { IModalProxy, ModalExposed } from "./types/modal-proxy";
import { err }  from './utils';

const modalKey = Symbol('modal_key');

export default class ModalProxy implements IModalProxy {
  static modalProxy?: ModalProxy;
  modalExposed?: ModalExposed;

  constructor(key: any) {
    if (key !== modalKey) err(`Invalid construct key ${key}`);
    return this;
  }

  static getInstance() {
    if (this.modalProxy) return this.modalProxy;
    else {
      this.modalProxy = new ModalProxy(modalKey);
      return this.modalProxy;
    }
  }

  setModalExposed(exposed: ModalExposed) {
    this.modalExposed = exposed;
    return this;
  }

  addModal(component: Component, options: any) {
    return this.modalExposed?.addModal(component, options);
  }
}
