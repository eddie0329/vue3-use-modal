/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { useModal } from '../src';

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: ReturnType<DefineComponent>;
  export default component;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $modal: ReturnType<useModal>
  }
}
