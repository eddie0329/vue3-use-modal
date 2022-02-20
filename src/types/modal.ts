import { AddModalProxyParams } from "./modal-proxy";

export interface Modal extends AddModalProxyParams {
  id: number;
  resolve: PromiseResolve;
  reject: PromiseReject;
}

export type PromiseResolve = (value: any) => void;
export type PromiseReject = (reason: any) => void;
