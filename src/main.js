import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import components from "./components";

loadFonts();

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(vuetify).mount("#app");
