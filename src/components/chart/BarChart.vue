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
      <Bar :dataKeys="['age', 'population']" :barStyle="{ fill: '#90e0ef' }" />
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
import { ref, onMounted, watch } from 'vue'
import { Chart, Grid, Bar, Tooltip } from 'vue3-charts'

const props = defineProps(['reportDong'])

const reportInfo = ref(props.reportDong)
const data = ref(
  Object.entries(reportInfo.value.rank).map(([key, value]) => ({
    age: key,
    population: value
  }))
)

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
  data.value = Object.entries(reportInfo.value.rank).map(([key, value]) => ({
    age: key,
    population: value
  }))
})
</script>
