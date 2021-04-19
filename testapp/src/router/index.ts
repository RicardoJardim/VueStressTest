import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Cpu from "@/views/Cpu.vue";
import ServerData from "@/views/ServerData.vue";
import Api from "@/views/Api.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Cpu",
    component: Cpu,
  },
  {
    path: "/server",
    name: "ServerData",
    component: ServerData,
  },
  {
    path: "/api",
    name: "Api",
    component: Api,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
