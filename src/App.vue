<script setup>
import { RouterView } from 'vue-router'
import VHeader from '@/components/common/VHeader.vue'
</script>

<template>
  <VHeader />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'Noto Sans KR', sans-serif;
}

.overlaybox {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: url('./assets/marker.png') no-repeat;
  background-size: contain;
  cursor: pointer;
}

.overlaybox .price {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: black;
  pointer-events: none;
}

.overlaybox .date {
  position: relative;
  font-size: 12px;
  color: #000000;
  pointer-events: none;
}
</style>
