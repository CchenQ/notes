import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Catgeory from "@/components/Catgeory";
import Personal from "@/components/Personal";
import Detail from "@/components/Detail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/catgeory",
      name: "Catgeory",
      component: Catgeory
    },
    {
      path: "/personal",
      name: "Personal",
      component: Personal
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail
    }
  ]
});
