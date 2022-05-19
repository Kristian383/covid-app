import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TheLoader from "./components/TheLoader.vue";

const app = createApp(App);

app.component("the-loader", TheLoader);

app.use(router);
app.use(store);
app.mount("#app");
