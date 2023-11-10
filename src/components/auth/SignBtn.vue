<script setup>
const props = defineProps({ width: String, height: String, msg: String })
</script>

<template>
  <button class="sign-btn text" :style="{ width: props.width, height: props.height }">
    {{ props.msg }}
  </button>
</template>

<style scoped>
.sign-btn {
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border: none;
  margin: 0.5rem 0;
}
.text {
  color: #6e2add;
  text-align: center;
  line-height: normal;
  font-size: 1.25rem;
}
</style>
