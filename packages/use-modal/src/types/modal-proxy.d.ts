import { Component, ComponentPublicInstance } from "vue";
import { ModalProxy } from "@/ModalProxy";

export interface ModalExposed extends ComponentPublicInstance {
  addModal: <T>(component: Component, options: any) => Promise<T>;
}

export interface IModalProxy {
  modalProxy?: ModalProxy;
  modalExposed?: ModalExposed;

  setModalExposed(exposed: ComponentPublicInstance): this;
  addModal: ModalExposed.addModal;
}
