<script setup>
const props = defineProps({ width: String, height: String, msg: String, type: String })
</script>

<template>
  <button :type="type" class="sign-btn text" :style="{ width: props.width, height: props.height }">
    {{ props.msg }}
  </button>
</template>

<style scoped>
.sign-btn {
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: #fff;
  border: none;
  margin: 0.5rem 0;
}
.text {
  color: #6e2add;
  text-align: center;
  line-height: normal;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
