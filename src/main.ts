import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

declare global {
  interface Window {
    pageWidth: number;
  }
}



// root.style.width = pageWidth + "px";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
