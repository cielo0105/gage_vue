<script setup>
defineProps({ title: String, address: String })
</script>

<template>
  <div class="address">
    <span class="badge rounded-pill text-bg-secondary me-2">{{ title }}</span>
    <span>{{ address }}</span>
  </div>
</template>

<style scoped>
.address {
  display: flex;
  align-items: center;
}
</style>
