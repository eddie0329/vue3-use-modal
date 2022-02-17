import { Component } from "vue";
import { IModalProxy, ModalExposed } from "./types/modal-proxy";
export default class ModalProxy implements IModalProxy {
    static modalProxy?: ModalProxy;
    modalExposed?: ModalExposed;
    constructor(key: any);
    static getInstance(): ModalProxy;
    setModalExposed(exposed: ModalExposed): this;
    addModal(component: Component, options: any): Promise<unknown> | undefined;
}
//# sourceMappingURL=ModalProxy.d.ts.map