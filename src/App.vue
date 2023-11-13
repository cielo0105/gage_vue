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
  width: 79px;
  height: 73px;
  background: url('./assets/marker.png') no-repeat;
  cursor: pointer;
}

.overlaybox .price {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: white;
  pointer-events: none;
}

.overlaybox .date {
  position: relative;
  font-size: 12px;
  color: #bebebe;
  pointer-events: none;
  padding-bottom: 11px;
}
</style>
