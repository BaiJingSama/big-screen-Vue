<template>
  <div class="wrapper">
    <div ref="divRef" class="chart">
    </div>
    <div class="legend">
      <span class="icon" :style='{background:colors["甘肃省"]}' />
      寒国籍
      <span class="icon" :style='{background:colors["四川省"]}' />
      漂亮国籍
      <span class="icon" :style='{background:colors["青海省"]}' />
      旭日籍
    </div>
    <div class="notes">此地图仅显示了中国的部分区域</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as echarts from 'echarts';
import { createEchartOptions } from '@/shared/create-echart-options';
import { px } from '@/shared/px';
import china from "../geo/china.json";

@Component
export default class extends Vue {
  colors = { 青海省: "#BB31F7", 甘肃省: "#15B8FD", 四川省: "#06E1EE" };
  randomArr() {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push((0.02 + Math.random() * 0.08).toFixed(2))
    }
    return arr
  }

  mounted() {
    let chart = echarts.init(this.$refs.divRef as HTMLElement);
    echarts.registerMap("CN", china);
    chart.setOption(
      createEchartOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "甘肃省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: this.colors["甘肃省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "四川省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: this.colors["四川省"],
              borderColor: "yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "青海省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: this.colors["青海省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
        ],
      })
    )
  }
}
</script>

<style lang="scss" >
@import '../assets/style/helper.scss';

.wrapper {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .chart {
    flex: 1;
  }

  .legend {
    position: absolute;
    top: px(0);
    left: px(0);
    display: flex;
    align-items: center;
    font-size: px(14);
    padding: px(20) px(10) px(20) 0;
    border-radius: 0;

    .icon {
      margin: 0 px(10);
      display: inline-block;
      width: px(16);
      height: px(16);
      border-radius: 50%;
      background: #1cecd9;
    }
  }

  .notes {
    position: absolute;
    bottom: px(10);
    right: px(10);
  }
}
</style>