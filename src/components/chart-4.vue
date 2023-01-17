<template>
  <div class="wrapper">
    <div ref="divRef" class="chart">
    </div>
    <div class="legend">
      <span class="icon" :style='{background:colors["贵州省"]}' />
      黔州籍
      <span class="icon" :style='{background:colors["四川省"]}' />
      五江籍
      <span class="icon" :style='{background:colors["云南省"]}' />
      天北籍
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
  colors = { 云南省: "#BB31F7", 贵州省: "#15B8FD", 四川省: "#06E1EE" };
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
            data: [{ name: "贵州省", value: 100 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: this.colors["贵州省"],
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
            data: [{ name: "云南省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: this.colors["云南省"],
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