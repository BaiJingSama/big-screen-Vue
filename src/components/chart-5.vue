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
    { name: 0 },
    { name: 2 },
    { name: 4 },
    { name: 6 },
    { name: 8 },
    { name: 10 },
    { name: 12 },
    { name: 14 },
    { name: 16 },
    { name: 18 },
    { name: 20 },
    { name: 22 },
  ];

  randomArr() {
    let arr = []
    for (let i = 0; i < 12; i++) {
      arr.push((0.12 + Math.random() * 0.15).toFixed(2))
    }
    return arr
  }
  chart: any = null


  setChart(data: data) {
    this.chart.setOption(
      createEchartOptions(
        {
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: data.map((i) => i.name),
            splitLine: { show: true, lineStyle: { color: "#073E78" } },
            axisTick: { show: false },
            axisLine: { show: false },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: "#073E78" } },
            axisLabel: {
              formatter(val: number) {
                return val * 100 + "%";
              },
            },
          },
          series: [
            {
              type: "line",
              data: this.randomArr(),
              symbol: "circle",
              symbolSize: px(12),
              lineStyle: { width: px(2) },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#414a9f",
                  },
                  {
                    offset: 1,
                    color: "#1b1d52",
                  },
                ]),
              },
            },
          ],
        }
      ))
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