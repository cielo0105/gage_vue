<script setup>
defineProps({
  modelValue: String,
  label: String,
  width: String,
  height: String,
  type: String,
  placeholder: String,
  readonly: Boolean,
  value: String
})

const emit = defineEmits(['update:modelValue'])
const handleInput = ($event) => {
  emit('update:modelValue', $event.target.value)
}
</script>

<template>
  <div class="input-box">
    <label class="text">{{ label }}</label>
    <input
      class="input"
      :value="modelValue"
      @input="handleInput"
      :style="{ width: width, height: height }"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
    />
  </div>
</template>
<style scoped>
.input-box {
  display: inline;
}
.text {
  width: 6rem;
  font-size: 1.25rem;
  font-weight: 700;
}
.input {
  border-radius: 0.9375rem;
  border: 2px solid #9c9c9c;
  padding: 1rem;
}
</style>
