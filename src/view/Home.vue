<template>
  <div class="home">
    <header>
      <div class="before">
        <span>13:36:25</span>
        <span>2023年1月15日</span>
      </div>
      <div class="title">蜀都市公安局大屏作战平台</div>
      <div class="time">
        <span>13:36:25</span>
        <span>2023年1月15日</span>
      </div>
    </header>
    <main>
      <section class="bordered section1">
        <chart1 class=" chart1" />
      </section>
      <section class="section2">
        <div class="bordered 案发趋势">
          <h2>案发趋势统计 <span>(截止2022年10月)</span></h2>
          <div class="chart">
            <chart2 />
          </div>
        </div>
      </section>
      <section class="bordered section3"></section>
      <section class="section4"></section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import chart1 from '../components/chart-1.vue';
import chart2 from '../components/chart-2.vue'
@Component({
  components: {
    chart1,
    chart2,
  },
})

export default class App extends Vue {


}
</script>

<style lang="scss">
@import '../assets/style/helper.scss';

.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #080717;

  color: #fff;

  header {
    height: px(61);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 px(40);
    background: #070d27;
    background-size: cover;

    .before {
      display: flex;
      flex-direction: column;
      align-items: center;
      visibility: hidden;
      font-size: px(14);
      letter-spacing: px(1);
    }

    .title {
      font-size: px(22);
      color: #dee1e6;
      letter-spacing: px(2);
      text-shadow: 0 0 px(2) white;
    }

    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: px(14);
      color: #838ba0;
      letter-spacing: px(1);
      text-shadow: 0 0 px(2) #838ba0;
    }
  }

  main {
    flex: 1;
    padding: px(30);
    display: grid;
    grid-template:
      "box1 box1 box4" 90fr
      "box2 box3 box4" 570fr / 360fr 570fr 390fr;
    grid-column-gap: px(30);
    grid-row-gap: px(30);

    .bordered {
      border: 1px solid #131e5c;
      position: relative;
      box-shadow: 0 0 2px 0 #2c4fb7, inset 0 0 2px 0 #2c4fb7;


      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        /* border: 1px solid red; */
        box-shadow:
          21px 0 0 -20px #2c4fb7,
          -21px 0 0 -20px #2c4fb7,
          0 21px 0 -20px #2c4fb7,
          0 -21px 0 -20px #2c4fb7,
          11px 0 0 -10px #2e4094,
          -11px 0 0 -10px #2e4094,
          0 11px 0 -10px #2e4094,
          0 -11px 0 -10px #2e4094,
      }
    }

    >.section1 {
      grid-area: box1;

      .chart1 {
        height: 100%;
      }
    }

    >.section2 {
      grid-area: box2;
    }

    >.section3 {
      grid-area: box3;
    }

    >.section4 {
      grid-area: box4;
    }

    .案发趋势 {
      height: px(270);
      display: flex;
      flex-direction: column;

      h2 {
        flex-shrink: 0;
        width: 100%;
        height: px(25);
        border-bottom: 1px solid #2c4fb7;
        box-shadow: 0 0 2px 0 #2c4fb7, inset 0 0 2px 0 #2c4fb7;
        font-size: px(14);
        font-weight: 700;
        line-height: px(25);
        padding-left: px(15);
        text-shadow: 0 0 px(3) #2c4fb7;


        span {
          font-size: px(12);
          color: #575c7a;
          margin-left: px(5);
        }
      }

      .chart {
        width: 100%;
        flex: 1;
      }
    }
  }
}
</style>