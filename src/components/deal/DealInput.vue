<script setup>
defineProps({
  label: String,
  width: String,
  height: String,
  type: String,
  placeholder: String
})
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
  border: 1px solid #000;
  padding: 1rem;
}
</style>
