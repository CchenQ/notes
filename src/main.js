import Vue from "vue";
import App from "./App";
import router from "./router";
import Router from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./stylesheet/main.scss";
Vue.config.productionTip = false;

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(ElementUI);
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
