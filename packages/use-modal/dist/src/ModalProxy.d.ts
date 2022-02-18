import { IModalProxy, ModalExposed, AddModalProxyParams } from "./types/modal-proxy";
export default class ModalProxy implements IModalProxy {
    static modalProxy?: ModalProxy;
    modalExposed?: ModalExposed;
    constructor(key: any);
    static getInstance(): ModalProxy;
    setModalExposed(exposed: ModalExposed): this;
    addModal<T>(params: AddModalProxyParams): Promise<T> | undefined;
}
