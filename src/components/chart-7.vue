<template>
  <div>
    <div ref="divRef" class="chart">
    </div>
    <div class="legend">
      <span :style={background:colors[0]} />
      刑事
      <span :style={background:colors[1]} />
      民事
      <span :style={background:colors[2]} />
      经济
      <span :style={background:colors[3]} />
      其他
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
  colors = ["#F46064", "#F38E1C", "#1CDB7C", "#8D70F8", "#33A4FA"];
  mounted() {
    let chart = echarts.init(this.$refs.divRef as HTMLElement);
    chart.setOption(
      createEchartOptions(
        {
          color: this.colors,
          xAxis: { show: false },
          yAxis: { show: false },
          legend: { show: false },
          series: [
            {
              // 控制饼图数据显示的方向
              startAngle: -20,
              type: "pie",
              // 控制饼图的大小
              radius: ["30%", "90%"],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: "outside",
                textStyle: { color: "white", fontSize: px(14) },
                distanceToLabelLine: 0,
                // 控制饼图标签输出数据
                formatter(options: any) {
                  return options.value * 100 + "%";
                },
              },
              // 控制标签指示线的长度以及显示
              labelLine: { show: true, length: 0 },
              roseType: "area",
              itemStyle: {
                shadowBlur: px(200),
                shadowColor: "rgba(0,0,0,0.5)",
              },
              data: [
                { value: 0.36, name: "刑事案件" },
                { value: 0.2, name: "民事案件" },
                { value: 0.18, name: "经济案件" },
                { value: 0.24, name: "其他案件" },
              ],
            },
          ],
        }
      ))
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/style/helper.scss';

.chart {
  height: px(150);
  width: 100%;
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