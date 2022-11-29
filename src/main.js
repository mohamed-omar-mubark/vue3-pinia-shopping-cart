import { createApp } from "vue";

// pinia
import { createPinia } from "pinia";

// app
import App from "./App.vue";

// style
import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
