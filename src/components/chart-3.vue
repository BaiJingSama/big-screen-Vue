<template>
  <div>
    <div ref="divRef" class="chart"></div>
    <div class="legend">
      <span :style={background:colors[0]} />
      10-20岁
      <span :style={background:colors[1]} />
      20-30岁
      <span :style={background:colors[2]} />
      30-40岁
      <span :style={background:colors[3]} />
      40-50岁
      <span :style={background:colors[4]} />
      50-60岁
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as echarts from 'echarts';
import { createEchartOptions } from '@/shared/create-echart-options';
import { px } from '@/shared/px';

@Component
export default class extends Vue {
  data = [
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

  colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];

  mounted() {
    let chart = echarts.init(this.$refs.divRef as HTMLElement);
    chart.setOption(
      createEchartOptions({
        color: this.colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        grid: {
          x: px(10),
          x2: px(20),
          y: px(20),
          y2: px(50),
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["75%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inside",
              textStyle: { color: "white", fontSize: px(15) },
              formatter(options: any) {
                return (options.value * 100).toFixed(0) + "%";
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#0F113A",
              borderWidth: px(4),
            },
            data: [
              { value: 0.07, name: "10-20" },
              { value: 0.1, name: "20-30" },
              { value: 0.23, name: "30-40" },
              { value: 0.28, name: "40-50" },
              { value: 0.32, name: "50-60" },
            ],
          },
        ],
      })
    )
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/helper.scss';

.chart {
  height: px(200);
  width: 100%;
  padding-top: px(10);
}

.legend {
  height: px(40);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: px(10);

  >span {
    display: inline-block;
    width: px(10);
    height: px(10);
    border-radius: px(2);
    margin: 0 px(10);
  }

}
</style>