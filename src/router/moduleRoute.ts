import { RouteRecordRaw } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";

const moduleRoute: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main-layout",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/details",
        name: "details",
        component: Details,
      },
    ],
  },
];
export default moduleRoute;
