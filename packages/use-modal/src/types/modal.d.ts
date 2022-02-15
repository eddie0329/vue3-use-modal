import { Component } from 'vue';

export interface Modal {
  key: string;
  id: number;
  options: any;
  component: Component,
  resolve: PromiseResolve,
  reject: PromiseReject
}

export type PromiseResolve = (value: any) => void;
export type PromiseReject = (reason: any) => void;