<script setup>
const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
const handleInput = ($event) => {
  emit('update:modelValue', $event.target.value)
}
</script>

<template>
  <div class="chat-input-box">
    <input type="text" @input="handleInput" :value="modelValue" />
    <button @click="$emit('send')">전송</button>
  </div>
</template>

<style scoped>
.chat-input-box {
  background-color: aqua;
  display: flex;
  width: 100%;
  height: 7%;
  padding: 0.5rem;
}
</style>
