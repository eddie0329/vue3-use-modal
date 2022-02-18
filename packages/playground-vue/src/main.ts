import { createApp } from "vue";
import { ModalPlugin } from "use-modal";

import App from "./App.vue";
import router from "./router";

createApp(App).use(ModalPlugin).use(router).mount("#app");
