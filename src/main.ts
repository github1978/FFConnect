import { createSSRApp } from "vue";
import Store, { key } from './store'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(Store, key);
  return {
    app,
  };
}
