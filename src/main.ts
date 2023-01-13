import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

declare global {
  interface Window {
    pageWidth: number;
  }
}

const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
window.pageWidth =
  clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
const pageHeight = window.pageWidth / (16 / 9);

const string = `<style>html{
        font-size: ${window.pageWidth / 100}px 
      }</style>`;
document.write(string);

const app = <HTMLElement>document.querySelector("#app");
console.log(app);
app.style.height = pageHeight + "px";
app.style.marginTop = (clientHeight - pageHeight) / 2 + "px";
app.style.border = "1px solid red";

// root.style.width = pageWidth + "px";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
