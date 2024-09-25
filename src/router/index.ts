import { createRouter, createWebHistory } from "vue-router";
import moduleRoute from "./moduleRoute";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: moduleRoute,
});
export default router;
