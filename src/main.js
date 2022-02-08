import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/css/index.css";
import GStore from "./store/store";

createApp(App).provide("state", GStore).use(router).mount("#app");
