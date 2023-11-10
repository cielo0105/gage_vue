<script setup>
const props = defineProps({ title: String, color: String })

const clickBtn = () => {
  console.log('btn 클릭')
}
</script>

<template>
  <button :style="{ background: props.color }" @click="clickBtn()">{{ props.title }}</button>
</template>

<style scoped>
button {
  width: 6.6875rem;
  height: 1.9375rem;
  border-radius: 0.9375rem;

  color: #fff;
  font-size: 0.9375rem;
  font-weight: 700;

  border: none;
  outline: none;
  cursor: pointer;
}
</style>
