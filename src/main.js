import { createApp } from "vue";
import Oruga from "@oruga-ui/oruga-next";
import "@oruga-ui/oruga-next/dist/oruga.css";
import "./input.css";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";


const app = createApp(App);
const pinia = createPinia();

app.use(i18n);
app.use(router);
app.use(pinia);
app.use(Oruga, {
  autocomplete: {
    override: true,
  },
});
app.mount("#app");
