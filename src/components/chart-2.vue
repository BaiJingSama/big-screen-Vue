<template>
  <div ref="divRef" class="chart">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as echarts from 'echarts';
import { createEchartOptions } from '@/shared/create-echart-options';
import { px } from '@/shared/px';
type data = {
  name: number
}[]

@Component
export default class extends Vue {

  data: data = [
    { name: 2016 },
    { name: 2017 },
    { name: 2018 },
    { name: 2019 },
    { name: 2020 },
    { name: 2021 },
    { name: 2022 },
  ];
  randomArr() {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push((0.02 + Math.random() * 0.08).toFixed(2))
    }
    return arr
  }
  chart = null

  setChart(data: data) {
    this.chart.setOption(
      createEchartOptions({
        legend: {
          bottom: px(15),
          textStyle: { color: "white" },
          itemWidth: px(35),
          itemHeight: px(16),
        },
        grid: {
          x: px(10),
          x2: px(20),
          y: px(20),
          y2: px(50),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.map((i) => i.name),
          splitLine: { show: true, lineStyle: { color: "#2c4fb7" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#2c4fb7" } },
          axisLabel: {
            formatter(val: number) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            name: "抢劫",
            type: "line",
            data: this.randomArr(),
          },
          {
            name: "醉驾",
            type: "line",
            data: this.randomArr(),
          },
          {
            name: "盗窃",
            type: "line",
            data: this.randomArr()
          },
          {
            name: "故意杀人",
            type: "line",
            data: this.randomArr()
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
        })),
      })
    )
  }

  mounted() {
    this.chart = echarts.init(this.$refs.divRef as HTMLElement);
    this.setChart(this.data)
    setInterval(() => {
      this.setChart(this.data)
    }, 2000)
  }



}
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>