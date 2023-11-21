<script setup>
import { computed } from 'vue'
import VAddress from '@/components/map/VAddress.vue'
const prop = defineProps({
  info: Object
})

const dealType = computed(() => {
  if (prop.info) {
    if (prop.info?.type === 'sale') return `매매 ${prop.info?.amount1}`
    else if (prop.info?.type === 'lease') return `전세 ${prop.info?.amount1}`
    else return `월세 ${prop.info?.amount1}/${prop.info?.amount2}`
  } else {
    return ''
  }
})
</script>

<template>
  <div class="dealinfo-box">
    <header class="header">
      <strong class="title">{{ dealType }}</strong>
      <button class="close-btn" @click="$emit('close-box')">✕</button>
    </header>
    <VAddress title="주소" :address="`${info?.address} ${info?.address_detail}`" />
    <!-- <img
      src="C:\ssafygageimg\61631829-a801-4e69-a7bf-70d5318a7e20_Ellipse 42.png"
      alt="img"
      v-if="info?.img"
      class="info-img"
    /> -->
  </div>
</template>

<style scoped>
.dealinfo-box {
  width: 30rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem;
}
.dealinfo-box .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-btn {
  font-size: 1.3rem;
  background: none;
  border: none;
  outline: none;
}
.title {
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
}
.info-img {
  width: 100%;
}
</style>
