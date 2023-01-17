<template>
  <div ref="divRef" class="chart">

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
    { name: "武侯区" },
    { name: "金牛区" },
    { name: "高新区" },
    { name: "成华区" },
    { name: "锦江区" },
    { name: "双流区" },
    { name: "新都区" },
    { name: "温江区" },
    { name: "郫都区" },
  ];
  randomArr() {
    let arr = []
    for (let i = 0; i < 9; i++) {
      arr.push(5 + Math.random() * 45)
    }
    return arr
  }

  mounted() {
    let chart = echarts.init(this.$refs.divRef as HTMLElement);
    chart.setOption(
      createEchartOptions(
        {
          xAxis: {
            data: this.data.map((i) => i.name),
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                lineStyle: { color: "#213ca9" },
              },
            },
            axisLabel: {
              fontSize: px(12),
              formatter(val: string) {
                if (val.length > 2) {
                  const array = val.split("");
                  array.splice(2, 0, "\n");
                  return array.join("");
                }
              },
            },
          },

          yAxis: {
            splitLine: { show: false },
            axisLine: {
              show: true,
              lineStyle: { color: "#213ca9" },
            },
          },
          series: [
            {
              type: "bar",
              data: this.randomArr(),
              itemStyle: { color: '#213ca9' }
            },
          ],
        }
      ))
  }

}
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>