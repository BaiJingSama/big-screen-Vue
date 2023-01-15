<template>
  <div id="app" :style="{width:pageWidthPx,height: pageHeightPx,marginTop: marginTop,flex:1}">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './view/Home.vue';
import './assets/style/reset.scss'
@Component({
  components: {
    Home,
  },
})

export default class App extends Vue {
  clientWidth = document.documentElement.clientWidth;
  clientHeight = document.documentElement.clientHeight;
  pageWidth = this.clientWidth / this.clientHeight > 16 / 9
    ? this.clientHeight * (16 / 9)
    : this.clientWidth;
  pageHeight = this.pageWidth / (16 / 9);
  get pageWidthPx() {
    return this.clientWidth / this.clientHeight > 16 / 9
      ? this.clientHeight * (16 / 9) + 'px'
      : this.clientWidth + 'px'
  }
  get pageHeightPx() {
    return this.pageWidth / (16 / 9) + 'px'
  }

  get marginTop() {
    return (this.clientHeight - this.pageHeight) / 2 + 'px'
  }

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  background: pink;
  display: flex;
  flex-direction: column;
}
</style>
