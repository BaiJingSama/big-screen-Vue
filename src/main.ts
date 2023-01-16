import Vue from "vue";
import App from "./App.vue";
import * as echarts from "echarts";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

declare global {
  interface Window {
    pageWidth: number;
  }
}

// root.style.width = pageWidth + "px";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
