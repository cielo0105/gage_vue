<script setup>
import { ref } from 'vue'
const props = defineProps({ selectOption: Array })
const emit = defineEmits(['onKeySelect'])
const key = ref('')

const onSelect = () => {
  console.log('dropdown-selected: ', key.value)
  emit('onKeySelect', key.value)
}
</script>

<template>
  <select v-model="key" class="form-select form-select-sm dropdown" @change="onSelect">
    <option
      v-for="option in selectOption"
      :key="option.value"
      :value="option.value"
      :disabled="option.value === '' ? true : false"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<style scoped>
.dropdown {
  border-radius: 0.9375rem;
  border: 2px solid var(--main, #5acc00);

  /* background: #fff; */

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: black;
  width: 7.9375rem;
  height: 2.375rem;
  margin-right: 0.5rem;
}
</style>
