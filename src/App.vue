<script setup>
import { RouterView } from 'vue-router'
import VHeader from '@/components/common/VHeader.vue'
</script>

<template>
  <VHeader />
  <RouterView />
</template>

<style scoped>
header {
  padding: 1rem 3rem;
}
</style>
