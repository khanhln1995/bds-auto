import { createApp } from "vue";
import App from "./App.vue";

import "./index.css";
import router from "./router";
import "./demos/ipc";
import Antd from "ant-design-vue";
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'
const app = createApp(App);
app.use(Antd);
app.use(router);

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
