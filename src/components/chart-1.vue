<template>
  <div>
    <ul class="container">
      <li>
        <div class="scanning"></div>
        <div class="data">
          <span class="number">{{number.siteQuantity}}</span>
          <span class="text">地方公安站点</span>
        </div>
      </li>
      <li>
        <div class="scanning"></div>
        <div class="data">
          <span class="number">{{number.badQuantity}}</span>
          <span class="text">违法案件数量</span>
        </div>
      </li>
      <li>
        <div class="scanning"></div>
        <div class="data">
          <span class="number">{{number.completeQuantity}}</span>
          <span class="text">案件侦破数量</span>
        </div>
      </li>
      <li>
        <div class="scanning"></div>
        <div class="data">
          <span class="number">{{number.badPerson}}</span>
          <span class="text">违法人员总数</span>
        </div>
      </li>
      <li>
        <div class="scanning"></div>
        <div class="data">
          <span class="number">{{number.netWorkPerson}}</span>
          <span class="text">网逃人员数量</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import x from '@/assets/images/agora.svg';

console.log(x);

@Component({
  components: {
  },
})

export default class App extends Vue {

  number = {
    siteQuantity: 2488,
    badQuantity: 3555,
    completeQuantity: 1487,
    badPerson: 1388,
    netWorkPerson: 554,
  }

  created() {
    this.setBadQuantity(4000)
    this.setComplete(1660)
    this.setBadPerson(1588)
    this.setNetWork(888)
  }


  setBadQuantity(max: number) {
    let init = this.number.badQuantity
    setInterval(() => {
      this.number.badQuantity++
      if (this.number.badQuantity === max) {
        this.number.badQuantity = init
      }
    }, 50)
  }


  setComplete(max: number) {
    let init = this.number.completeQuantity
    setInterval(() => {
      this.number.completeQuantity++
      if (this.number.completeQuantity === max) {
        this.number.completeQuantity = init
      }
    }, 100)
  }

  setBadPerson(max: number) {
    let init = this.number.badPerson
    setInterval(() => {
      this.number.badPerson++
      if (this.number.badPerson === max) {
        this.number.badPerson = init
      }
    }, 1000)
  }
  setNetWork(max: number) {
    let init = this.number.netWorkPerson
    setInterval(() => {
      this.number.netWorkPerson++
      if (this.number.netWorkPerson === max) {
        this.number.netWorkPerson = init
      }
    }, 800)
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/style/helper.scss';

.container {
  height: 100%;
  color: #e5e5e7;
  display: flex;
  padding: 0 px(30);
  justify-content: space-between;
  align-items: center;


  >li {
    display: flex;
    align-items: center;

    .scanning {
      width: calc(16em + 1.5em);
      height: calc(16em + 1.5em);
      font-size: px(4);
      margin-right: px(20);
      position: relative;
      border: 1px solid #2c4fb7;
      background:

        linear-gradient(transparent 50.25%, transparent 50.25%);
      border-radius: 50%;
    }

    .scanning::before {
      content: '';
      position: absolute;
      width: calc(16em / 2);
      height: calc(16em / 2);
      top: calc(1.5em / 2);
      left: calc(1.5em / 2);
      /*border: 1px solid white;*/
      background: linear-gradient(45deg,
          rgba(0, 0, 0, 0) 50%,
          #2543bd 100%);
      border-radius: 100% 0 0 0;
      animation: scanning 5s linear infinite;
      transform-origin: 100% 100%;
    }

    @keyframes scanning {
      to {
        transform: rotate(360deg);
      }
    }

    .scanning::after {
      content: '';
      position: absolute;
      width: calc(24em / 2);
      height: calc(24em / 2);
      top: 15%;
      left: 15%;
      border-radius: 50%;
      border: 1px solid #2c4fb7;
    }

    .data {
      display: flex;
      flex-direction: column;

      .number {
        font-size: px(18);
        font-weight: 700;
        text-shadow: 0 0 px(4) #2c4fb7;
      }

      .text {
        font-size: px(10);
        text-shadow: 0 0 px(3) #2c4fb7;
      }
    }
  }
}
</style>