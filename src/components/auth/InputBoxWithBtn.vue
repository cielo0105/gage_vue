<script setup>
const props = defineProps({
  modelValue: String,
  width: String,
  height: String,
  type: String,
  label: String,
  btnName: String
})
const emit = defineEmits(['update:modelValue'])
const handleInput = ($event) => {
  emit('update:modelValue', $event.target.value)
}
</script>

<template>
  <div :style="{ width: props.width }">
    <label class="text">{{ label }}</label>
    <input
      class="input-box"
      :value="modelValue"
      @input="handleInput"
      :type="props.type"
      :style="{ height: props.height }"
    />
    <button class="input-btn" :style="{ height: props.height }" @click="$emit('click-btn')">
      {{ btnName }}
    </button>
  </div>
</template>

<style scoped>
.input-box {
  border-radius: 0.625rem;
  background: #fff;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  margin-bottom: 1.87rem;
  margin-right: 5%;
  outline: none;
  padding: 0.25rem 1rem 0.1rem 1rem;
  font-size: 1.25rem;
  width: 70%;
}

.input-btn {
  width: 25%;
  border-radius: 0.625rem;
  background: #fff;
  border: none;
  margin: 0.5rem 0;

  color: #6e2add;
  text-align: center;
  line-height: normal;
  font-size: 1.25rem;
  font-weight: 700;
}

.input-btn:hover {
  background: #6e2add;
  color: #fff;
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
