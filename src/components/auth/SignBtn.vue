<script setup>
const props = defineProps({ width: String, height: String, msg: String })
</script>

<template>
  <button
    @click="$emit('click-signbtn')"
    class="sign-btn text"
    :style="{ width: props.width, height: props.height }"
  >
    {{ props.msg }}
  </button>
</template>

<style scoped>
.sign-btn {
  border-radius: 1.875rem;
  background: #ffd600;
  border: none;
  margin: 0.5rem 0;
}
.sign-btn:hover {
  background: #5acc00;
  color: #fff;
}
.text {
  color: black;
  text-align: center;
  line-height: normal;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
