<script setup>
const props = defineProps({ title: String, color: String })
</script>

<template>
  <button class="sign-btn text">
    {{ props.title }}
  </button>
</template>

<style scoped>
.sign-btn {
  width: 24.4375rem;
  height: 1.9375rem;
  border-radius: 0.9375rem;
  background: #ffd600;
  border: none;
  margin-top: 1rem;
}
.sign-btn:hover {
  color: #fff;
}
.text {
  color: #363636;
  text-align: center;
  line-height: normal;
  font-size: 1rem;
  font-weight: 700;
}
</style>
