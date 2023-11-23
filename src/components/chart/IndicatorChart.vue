<template>
  <Chart
    :size="{ width: 450, height: 400 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis"
  >
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Bar :dataKeys="['name', 'val']" :barStyle="{ fill: '#90e0ef' }" />
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          population: { color: '#90e0ef' },
          avg: { color: '#0096c7' },
          inc: { color: '#48cae4' }
        }"
      />
    </template>
  </Chart>
</template>

<script setup>
import { ref, watchEffect, watch } from 'vue'
import { Chart, Grid, Bar, Tooltip } from 'vue3-charts'

const props = defineProps(['indicator'])

const info = ref(props.indicator)

// const data = ref(
//   Object.entries(reportInfo.value.rank).map(([key, value]) => ({
//     age: key,
//     population: value
//   }))
// )

const data = ref([
  { name: 'ingAvg', val: props.indicator.ingAvg, color: '#90e0ef' },
  { name: 'sIngAvg', val: props.indicator.singAvg, color: '48CAE4' },
  { name: 'closeAvg', val: props.indicator.closeAvg, color: '#90e0ef' },
  { name: 'sCloseAvg', val: props.indicator.scloseAvg, color: '48CAE4' }
])

const direction = ref('horizontal')
const margin = ref({
  left: 40,
  top: 40,
  right: 60,
  bottom: 0
})

const axis = ref({
  primary: {
    type: 'band'
  },
  secondary: {
    domain: ['dataMin', 'dataMax + 100'],
    type: 'linear',
    ticks: 8
  }
})

watch(() => {
  console.log('그래프', data.value)
  data.value = [
    { name: 'ingAvg', val: props.indicator.ingAvg, color: '#90e0ef' },
    { name: 'sIngAvg', val: props.indicator.singAvg, color: '#48CAE4' },
    { name: 'closeAvg', val: props.indicator.closeAvg, color: '#90e0ef' },
    { name: 'sCloseAvg', val: props.indicator.scloseAvg, color: '#48CAE4' }
  ]
})
</script>
