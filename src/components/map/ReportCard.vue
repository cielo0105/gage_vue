<script setup>
const props = defineProps({ title: String })
const emit = defineEmits(['update:modelValue'])
const handleInput = ($event) => {
  emit('update:modelValue', $event.target.value)
}
</script>

<template>
  <div>
    <label class="text">{{ label }}</label>
    <input
      class="input-box"
      :value="modelValue"
      @input="handleInput"
      :style="{ width: props.width, height: props.height }"
      :type="props.type"
    />
  </div>
</template>

<style scoped>
.input-box {
  border-radius: 0.625rem;
  background: #fff;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  margin-bottom: 1.87rem;
  outline: none;
  padding: 0.25rem 1rem 0.1rem 1rem;
  font-size: 1.25rem;
}

.text {
  color: #6e2add;
  font-size: 1.25rem;
  font-weight: 700;
  display: block;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
