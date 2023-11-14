<script setup>
defineProps({ title: String, address: String })
</script>

<template>
  <div>
    <span class="badge rounded-pill text-bg-secondary me-2">{{ title }}</span>
    <span>{{ address }}</span>
  </div>
</template>

<style scoped></style>
