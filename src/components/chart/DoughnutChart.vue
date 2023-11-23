<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3'
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'

const props = defineProps(['reportDong'])

const dataLabels = ref()
const dataValues = ref()

onMounted(() => {
  const reportInfo = ref(props.reportDong)
  dataLabels.value = new Array()
  dataValues.value = new Array()
  for (let i = 1; i < 4; i++) {
    let label = reportInfo.value.top[i]
    console.log('label', label)
    dataLabels.value.push(label)
    dataValues.value.push(reportInfo.value.rank[label])
  }
})
Chart.register(...registerables)
const toggleLegend = ref(true)
let index = ref(20)
const testData = computed<ChartData<'doughnut'>>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED']
    }
  ]
}))

const options = computed<ChartOptions<'doughnut'>>(() => ({
  scales: {
    myScale: {
      type: 'logarithmic',
      position: toggleLegend.value ? 'left' : 'right'
    }
  },
  plugins: {
    legend: {
      position: toggleLegend.value ? 'top' : 'bottom'
    },
    title: {
      display: true,
      text: '유동인구'
    }
  }
}))

const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
  chartData: testData,
  options
})

// function shuffleData() {
//   dataValues.value.push(index.value)
//   dataLabels.value.push('Other' + index.value)
//   console.log(dataValues.value)
//   index.value++
// }

// function switchLegend() {
//   toggleLegend.value = !toggleLegend.value
// }
</script>

<template>
  <div style="width: 400px">
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
