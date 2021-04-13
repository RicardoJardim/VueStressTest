import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

/* import runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
  runtime.register();
} */

createApp(App).use(VueAxios, axios).use(router).mount("#app");
