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
    <input
      type="text"
      @input="handleInput"
      :value="modelValue"
      class="input-box"
      @keyup.enter="$emit('send')"
    />
    <button @click="$emit('send')" class="send-btn"></button>
    <img src="../../assets/send.png" alt="send" class="send-btn" />
  </div>
</template>

<style scoped>
.chat-input-box {
  /* background-color: aqua; */
  display: flex;
  width: 100%;
  height: 7%;
  padding: 0.5rem;
  box-shadow: 0px -10px 10px -4px #c0c0c0;
}

.input-box {
  width: 93%;
  border-radius: 30px;
  margin-right: 1%;
  border: 2px solid #9c9c9c;
  padding: 5px 10px;
}

.send-btn {
  border-radius: 50%;
  border: none;
  background-size: contain;
}
</style>
